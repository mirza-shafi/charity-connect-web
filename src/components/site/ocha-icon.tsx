import { OCHA_ICONS, type OchaIconName } from "@/icons/ocha-icons";

export type { OchaIconName };

interface OchaIconProps {
  name: OchaIconName;
  /** Rendered size in px (square). Defaults to 1em so it can sit inline with text. */
  size?: number | string;
  className?: string;
  /** Supply when the icon carries meaning on its own; omit for decorative use. */
  title?: string;
}

/**
 * Renders an icon from the UN OCHA 2012 Humanitarian Icon set.
 *
 * The paths are inlined (rather than served as <img>) specifically so they
 * inherit `currentColor` — every place these appear, the surrounding rule
 * already sets a brand colour, and an <img> could not follow it.
 */
export function OchaIcon({ name, size = "1em", className, title }: OchaIconProps) {
  const icon = OCHA_ICONS[name];
  if (!icon) return null;

  return (
    <svg
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      style={{ display: "block", flexShrink: 0 }}
      dangerouslySetInnerHTML={{
        __html: (title ? `<title>${title}</title>` : "") + icon.body,
      }}
    />
  );
}
