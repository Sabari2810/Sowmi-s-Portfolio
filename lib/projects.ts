// Edit this file to change the portfolio.
// Each project's illustration lives in components/ProjectArt.tsx, keyed by `slug`.

export type Category = "residential" | "public" | "cultural" | "workplace";

export type Project = {
  slug: string;
  title: string;
  cat: Category;
  type: string;
  location: string;
  year: string;
  area: string;
  status: string;
  blurb: string;
  text: string;
  alt: string;
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "public", label: "Public" },
  { id: "cultural", label: "Cultural" },
  { id: "workplace", label: "Workplace" },
];

export const projects: Project[] = [
  {
    slug: "halden-house",
    title: "Halden House",
    cat: "residential",
    type: "Private residence",
    location: "North coast",
    year: "2025",
    area: "310 m²",
    status: "Completed",
    blurb:
      "A single long roof floats over a glazed living room, framing the horizon like a drawn line.",
    text: "Set low behind the dunes, the house is organised as one continuous room beneath a cantilevered concrete canopy. Rammed-earth walls hold the bedrooms to the north, while the south opens entirely to the sea. Deep eaves shade the glass in summer and admit low winter sun.",
    alt: "Illustration of a low house with a long flat roof at sunset",
  },
  {
    slug: "kiln-court-library",
    title: "Kiln Court Library",
    cat: "public",
    type: "Public library",
    location: "Old brickworks quarter",
    year: "2024",
    area: "2,400 m²",
    status: "Completed",
    blurb: "A brick arcade turns a neighbourhood library into a covered street.",
    text: "Built on the footprint of a demolished kiln, the library reuses 60,000 reclaimed bricks. A deep arcade shelters the entrance and a weekly market; inside, a timber reading room rises three storeys beneath a north-facing rooflight.",
    alt: "Illustration of a brick building with four tall arches",
  },
  {
    slug: "terrace-nine",
    title: "Terrace Nine",
    cat: "residential",
    type: "Housing — nine homes",
    location: "Hillside infill site",
    year: "2023",
    area: "1,150 m²",
    status: "Completed",
    blurb:
      "Nine stepped homes, each with its own roof garden and a view over the one below.",
    text: "A steep, overlooked plot became an advantage: the section steps with the slope so every home gains a south-facing terrace on its neighbour’s roof. Lime-rendered walls and shared stairs give the scheme the feel of a small hill village.",
    alt: "Illustration of white stepped terrace housing",
  },
  {
    slug: "saltworks-pavilion",
    title: "Saltworks Pavilion",
    cat: "cultural",
    type: "Exhibition pavilion",
    location: "Tidal estuary",
    year: "2023",
    area: "420 m²",
    status: "Completed",
    blurb: "A black timber roof on slender columns, doubled by the water it stands in.",
    text: "A seasonal gallery for a coastal arts trust, raised on screw piles above the salt marsh. The charred-larch roof is a single folded plane; walls are sliding screens that open the whole room to the tide.",
    alt: "Illustration of a pitched-roof pavilion reflected in water",
  },
  {
    slug: "orchard-studio",
    title: "Orchard Studio",
    cat: "workplace",
    type: "Workshop & offices",
    location: "Former fruit farm",
    year: "2022",
    area: "860 m²",
    status: "Completed",
    blurb: "A sawtooth roof brings even north light to a furniture maker’s workshop.",
    text: "A working building for a team of twenty makers. The timber frame was prefabricated in the client’s previous workshop and raised in eleven days. Rooflights face north for drawing-board light; photovoltaics cover every south-facing slope.",
    alt: "Illustration of a workshop with a sawtooth roof and lit windows",
  },
  {
    slug: "north-quay-chapel",
    title: "North Quay Chapel",
    cat: "cultural",
    type: "Chapel & community room",
    location: "Harbour edge",
    year: "2021",
    area: "240 m²",
    status: "Completed",
    blurb: "A pale tower with a single slot of light — a lantern for the quay at night.",
    text: "A non-denominational space for a harbour community. Inside, a board-marked concrete room is lit only from above and through one tall slit, so the mood shifts hour by hour with the weather.",
    alt: "Illustration of a pale chapel tower at night with a glowing slit window",
  },
];
