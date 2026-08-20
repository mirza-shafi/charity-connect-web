# UN OCHA Humanitarian Icons (2012)

The site's thematic iconography — programme areas, relief items, values — uses the
official **UN OCHA 2012 Humanitarian Icon set**, released by OCHA for humanitarian
use. AICT Global is a humanitarian organisation, so this is the set's intended use.

## What's here

- `*.svg` — all **243** icons extracted from OCHA's official editable PDF, one file
  per icon, named after the label printed beside it in the source (`education.svg`,
  `water-sanitation-and-hygiene.svg`, `livestock.svg`, …).
- `_manifest.json` — every icon with its original OCHA label and source page.

These are the raw asset library. Only the icons the site actually references are
inlined into the bundle — see below.

## How they're used

`src/icons/ocha-icons.ts` is a **generated** module holding just the icons the site
references, and `src/components/site/ocha-icon.tsx` renders them:

```tsx
<OchaIcon name="education" size={26} />
```

The paths are inlined rather than served as `<img>` so they inherit `currentColor`.
Every place an icon appears, the surrounding rule already sets a brand colour
(`var(--pt-primary)`, or white inside a filled circle) — an `<img>` could not
follow that.

Icons are decorative by default (`aria-hidden`). Pass `title` only when the icon
carries meaning on its own, which turns it into `role="img"` with a label.

## Scope

OCHA's set is humanitarian iconography — it has no arrows, chevrons, carts, close
buttons, social logos or payment-card marks. Those remain Font Awesome, because
swapping a chevron for a humanitarian pictogram would hurt usability. The split is
deliberate:

- **OCHA** → programme areas, causes, relief items, organisational values
- **Font Awesome** → interface chrome (navigation, controls, brand logos)

## Regenerating

Needs the original `2012_OCHA_humanitarian_icon_editablepdf.pdf` plus `pymupdf`:

```bash
python scripts/extract-ocha-icons.py <path-to-pdf> src/icons/ocha > src/icons/ocha/_manifest.json
python scripts/gen-ocha-icon-module.py src/icons/ocha src/icons/ocha-icons.ts
```

To use an icon that isn't in the bundle yet, add its name to `USED` in
`scripts/gen-ocha-icon-module.py` and re-run the second command. `OchaIconName` is
derived from the generated module, so a typo is a compile error rather than a
silently missing icon.
