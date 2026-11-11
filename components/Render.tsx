/* eslint-disable @next/next/no-img-element */

export type RenderImage = { src: string; w: number; h: number };

/**
 * A slot for one architectural render.
 *
 * With `image` set, it shows the picture at its own proportions (never cropped);
 * the stored width and height reserve the space so the page doesn't jump while it loads.
 * Without it, it shows a labelled placeholder naming the file to add.
 */
export default function Render({
  image,
  label,
  file,
  ratio = "16 / 9",
  eager = false,
  className = "",
}: {
  image?: RenderImage;
  /** What the render shows, e.g. "Reception". */
  label: string;
  /** Suggested file path under /public, shown on the placeholder. */
  file: string;
  /** Placeholder proportions only; a real image keeps its own. */
  ratio?: string;
  eager?: boolean;
  className?: string;
}) {
  if (image) {
    return (
      <img
        src={image.src}
        width={image.w}
        height={image.h}
        alt={`Render of ${label}`}
        loading={eager ? "eager" : "lazy"}
        className={`block h-auto w-full ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Placeholder for render: ${label}`}
      style={{ aspectRatio: ratio }}
      className={`flex w-full flex-col items-center justify-center gap-2 border border-dashed border-maroon/40 bg-sand px-4 text-center ${className}`}
    >
      <span className="label text-wine">Render</span>
      <span className="font-serif text-[1.35rem] leading-tight text-wine">{label}</span>
      <span className="break-all text-[0.68rem] tracking-[0.04em] text-ink/60">{file}</span>
    </div>
  );
}
