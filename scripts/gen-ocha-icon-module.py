"""Generate the site's OCHA icon module from the extracted SVG set.

Only the icons the site actually references are inlined, so the client bundle
carries ~28 small paths rather than the whole 243-icon library (which stays in
src/icons/ocha/ as source assets).
"""
import re
import sys
from pathlib import Path

SRC = Path(sys.argv[1])
OUT = Path(sys.argv[2])

USED = [
    # programme clusters
    "education", "health", "water-sanitation-and-hygiene", "livelihood",
    "nutrition", "mobile-clinic", "potable-water", "shelter",
    # seasonal / relief
    "mosque", "kitchen-set", "fund", "relief-goods", "livestock", "blanket",
    # organisation / values
    "reporting", "financing", "protection", "affected-population", "environment",
    "response", "innovation", "rule-of-law-and-justice",
    "humanitarian-programme-cycle", "advocacy", "analysis", "partnership",
    "policy", "early-recovery",
]

entries = []
for name in sorted(USED):
    p = SRC / f"{name}.svg"
    if not p.exists():
        raise SystemExit(f"missing icon: {name}")
    svg = p.read_text()
    vb = re.search(r'viewBox="([^"]+)"', svg).group(1)
    body = svg.split(">", 1)[1].rsplit("</svg>", 1)[0]
    body = body.replace('fill="currentColor"', "").replace("  ", " ")
    body = re.sub(r"<path\s+", "<path ", body)
    entries.append((name, vb, body))

lines = [
    "// GENERATED FILE — do not edit by hand.",
    "// Source: UN OCHA 2012 Humanitarian Icons (public domain, released by OCHA",
    "// for humanitarian use). Extracted from the official editable PDF; the full",
    "// 243-icon set lives in src/icons/ocha/ as raw SVGs.",
    "// Regenerate with scripts/gen-ocha-icons (see src/icons/ocha/_manifest.json).",
    "",
    "export interface OchaIconDef {",
    "  viewBox: string;",
    "  body: string;",
    "}",
    "",
    "export const OCHA_ICONS = {",
]
for name, vb, body in entries:
    esc = body.replace("\\", "\\\\").replace('"', '\\"').strip()
    lines.append(f'  "{name}": {{ viewBox: "{vb}", body: "{esc}" }},')
lines += [
    "} as const satisfies Record<string, OchaIconDef>;",
    "",
    "export type OchaIconName = keyof typeof OCHA_ICONS;",
    "",
]
OUT.write_text("\n".join(lines))
print(f"wrote {OUT} with {len(entries)} icons ({OUT.stat().st_size} bytes)")
