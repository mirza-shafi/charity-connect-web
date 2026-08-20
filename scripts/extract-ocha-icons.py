"""Extract individual OCHA humanitarian icons from the 2012 editable PDF as SVGs.

Each page lays icons out in columns: a small vector glyph with its text label to
the right on the same vertical band. So: cluster the page's vector drawings into
icon-sized groups, pair each group with the label beside it, then rebuild a
minimal standalone SVG from just that group's path geometry.

Rebuilding (rather than cropping the page) matters: PyMuPDF's cropbox export
keeps every element on the page and merely clips it, producing ~160KB per icon.
"""
import json
import re
import sys

import pymupdf

PDF, OUT = sys.argv[1], sys.argv[2]
MANIFEST_ONLY = "--manifest-only" in sys.argv
LABEL_SIZE_MAX = 12.5  # larger text is a section heading, not an icon label


def cluster(rects, gap=6.0):
    boxes = [list(r) for r in rects]
    changed = True
    while changed:
        changed = False
        out = []
        while boxes:
            b = boxes.pop()
            merged = True
            while merged:
                merged = False
                rest = []
                for o in boxes:
                    if (b[0] - gap < o[2] and o[0] - gap < b[2]
                            and b[1] - gap < o[3] and o[1] - gap < b[3]):
                        b = [min(b[0], o[0]), min(b[1], o[1]),
                             max(b[2], o[2]), max(b[3], o[3])]
                        merged = changed = True
                    else:
                        rest.append(o)
                boxes = rest
            out.append(b)
        boxes = out
    return boxes


def slug(s):
    s = s.lower().replace("&", " and ").replace("/", " ")
    return re.sub(r"-{2,}", "-", re.sub(r"[^a-z0-9]+", "-", s).strip("-"))


def num(v):
    return f"{round(v, 3):g}"


def path_d(drawing, ox, oy):
    """Convert one PyMuPDF drawing into SVG path data, origin-shifted."""
    d, cur = [], None

    def pt(p):
        return f"{num(p.x - ox)} {num(p.y - oy)}"

    for it in drawing["items"]:
        op = it[0]
        if op == "l":
            p1, p2 = it[1], it[2]
            if cur != p1:
                d.append(f"M{pt(p1)}")
            d.append(f"L{pt(p2)}")
            cur = p2
        elif op == "c":
            p1, p2, p3, p4 = it[1], it[2], it[3], it[4]
            if cur != p1:
                d.append(f"M{pt(p1)}")
            d.append(f"C{pt(p2)} {pt(p3)} {pt(p4)}")
            cur = p4
        elif op == "re":
            r = it[1]
            d.append(f"M{num(r.x0 - ox)} {num(r.y0 - oy)}"
                     f"H{num(r.x1 - ox)}V{num(r.y1 - oy)}H{num(r.x0 - ox)}Z")
            cur = None
        elif op == "qu":
            q = it[1]
            d.append(f"M{pt(q.ul)}L{pt(q.ur)}L{pt(q.lr)}L{pt(q.ll)}Z")
            cur = None
    if drawing.get("closePath"):
        d.append("Z")
    return "".join(d)


doc = pymupdf.open(PDF)
manifest, seen = [], set()

for pno in range(len(doc)):
    page = doc[pno]

    labels = []
    for blk in page.get_text("dict")["blocks"]:
        for line in blk.get("lines", []):
            for sp in line["spans"]:
                t = sp["text"].strip()
                if t and sp["size"] <= LABEL_SIZE_MAX:
                    labels.append({"bbox": list(sp["bbox"]), "text": t})

    # Labels can wrap; join spans stacked directly beneath one another.
    labels.sort(key=lambda l: (round(l["bbox"][0]), l["bbox"][1]))
    joined = []
    for lb in labels:
        if joined:
            prev = joined[-1]
            if abs(prev["bbox"][0] - lb["bbox"][0]) < 3 and 0 < lb["bbox"][1] - prev["bbox"][3] < 6:
                prev["text"] += " " + lb["text"]
                prev["bbox"][2] = max(prev["bbox"][2], lb["bbox"][2])
                prev["bbox"][3] = lb["bbox"][3]
                continue
        joined.append(lb)
    labels = joined

    drawings = page.get_drawings()
    icons = [b for b in cluster([d["rect"] for d in drawings])
             if 6 < b[2] - b[0] < 90 and 6 < b[3] - b[1] < 90]

    for box in icons:
        cy = (box[1] + box[3]) / 2
        cands = [l for l in labels
                 if l["bbox"][0] >= box[2] - 2 and l["bbox"][1] - 14 <= cy <= l["bbox"][3] + 14]
        if not cands:
            continue
        lab = min(cands, key=lambda l: l["bbox"][0] - box[2])
        if lab["bbox"][0] - box[2] > 60:
            continue

        name = slug(lab["text"])
        if not name or name in seen:
            continue
        seen.add(name)

        mine = [d for d in drawings
                if d["rect"].x0 >= box[0] - 1 and d["rect"].x1 <= box[2] + 1
                and d["rect"].y0 >= box[1] - 1 and d["rect"].y1 <= box[3] + 1]
        if not mine:
            continue

        w, h = box[2] - box[0], box[3] - box[1]
        manifest.append({"name": name, "label": lab["text"], "page": pno + 1,
                         "w": round(w, 2), "h": round(h, 2), "paths": len(mine)})
        if MANIFEST_ONLY:
            continue

        parts = []
        for dr in mine:
            dd = path_d(dr, box[0], box[1])
            if not dd:
                continue
            attrs = ['fill="currentColor"'] if dr.get("fill") is not None else ['fill="none"']
            if dr.get("even_odd"):
                attrs.append('fill-rule="evenodd"')
            if dr.get("color") is not None and dr.get("width"):
                attrs.append('stroke="currentColor"')
                attrs.append(f'stroke-width="{num(dr["width"])}"')
            parts.append(f'<path {" ".join(attrs)} d="{dd}"/>')

        svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {num(w)} {num(h)}" '
               f'fill="currentColor" aria-hidden="true">'
               + "".join(parts) + "</svg>")
        with open(f"{OUT}/{name}.svg", "w") as fh:
            fh.write(svg)

print(json.dumps(manifest, indent=1))
print(f"TOTAL ICONS: {len(manifest)}", file=sys.stderr)
