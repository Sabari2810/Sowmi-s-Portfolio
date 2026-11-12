import Link from "next/link";

/** The name mark shown at the top of every project page, matching the home page. */
export default function SiteLogo() {
  return (
    <Link href="/" aria-label="AR.SOWMYA. P, home" className="block leading-none text-wine">
      <span className="label mb-2.5 block font-semibold">Architecture Portfolio</span>
      <span className="block font-serif text-[2rem] font-medium leading-none tracking-[-0.01em]">AR.SOWMYA. P</span>
    </Link>
  );
}
