import type { Slide } from "@/components/Carousel";

/**
 * The WorkEZ managed office projects, shown on /projects/managed-office-spaces.
 * To add or change one, edit this list. Photos are in /public/images (park-centre, vivera, helix).
 */
export const managedOffice = [
  {
    title: "WorkEZ Park Centre",
    type: "Workplace",
    place: "Alwarpet, Chennai",
    facts: "~35,000 sq. ft. · 600+ seats · 4 floors",
    text: "Handled end-to-end, from design development and GFC documentation to consultant and vendor coordination, site resolution and execution. Also designed the cafeteria and pantry interiors.",
    // Captions are a first reading of each photo; edit them to say what Sowmya wants to explain.
    // The Park Centre lounge photo is used as the page's hero image, so it isn't repeated here.
    slides: [
      {
        caption: "The building at dusk",
        images: [{ src: "/images/park-centre/exterior.webp", alt: "Brick-clad WorkEZ Park Centre building lit at dusk" }],
      },
      {
        caption: "Boardroom and cafeteria",
        images: [
          { src: "/images/park-centre/space-2.webp", alt: "Boardroom with a long timber table and cane-backed chairs" },
          { src: "/images/park-centre/space-3.webp", alt: "Cafeteria with round tables, pendant lights and planting" },
        ],
      },
      {
        caption: "Waiting lounge and breakout seating",
        images: [
          { src: "/images/park-centre/space-1.webp", alt: "Waiting lounge with leather armchairs and a timber wall" },
          { src: "/images/park-centre/space-4.webp", alt: "Breakout seating nook with small round tables" },
        ],
      },
    ] satisfies Slide[],
  },
  {
    title: "WorkEZ Vivera",
    type: "Workplace",
    place: "Coimbatore",
    facts: "~100,000 sq. ft. · 2,250+ seats · 3 floors",
    text: "Contributed to the end-to-end delivery of this premium managed office facility, covering GFC documentation, consultant and vendor coordination, design and site resolution, and execution.",
    slides: [
      {
        caption: "Elevation",
        images: [{ src: "/images/vivera/elevation.webp", alt: "Elevation of WorkEZ Vivera: glazed facade with perforated metal screens at dusk" }],
      },
      {
        caption: "Reception",
        images: [{ src: "/images/vivera/reception.webp", alt: "Reception with a stone desk and the WorkEZ sign" }],
      },
      {
        caption: "The building",
        images: [{ src: "/images/vivera/exterior.webp", alt: "WorkEZ Vivera building with blue glazed facade" }],
      },
      {
        caption: "Lounge and window-side seating",
        images: [
          { src: "/images/vivera/space-1.webp", alt: "Lounge with a curved yellow sofa" },
          { src: "/images/vivera/space-2.webp", alt: "Bar-height seating along a window with planting" },
        ],
      },
      {
        caption: "Meeting room and games area",
        images: [
          { src: "/images/vivera/space-3.webp", alt: "Meeting room with a long table and orange chairs" },
          { src: "/images/vivera/space-4.png", alt: "Games area with a foosball table and pool table" },
        ],
      },
    ] satisfies Slide[],
  },
  {
    title: "WorkEZ Helix",
    type: "Workplace",
    place: "Velachery, Chennai",
    // Facts and description come from WorkEZ's own page for this centre. Add Sowmya's role here
    // (as in the two projects above) once she has described it.
    facts: "~125,000 sq. ft. · 2,250+ workstations · 10 floors",
    text: "A managed office centre next to Phoenix Market City, planned with work zones and breakout areas for informal discussions, quiet work and collaboration.",
    slides: [
      {
        caption: "Elevation",
        images: [
          {
            src: "/images/helix/elevation.webp",
            alt: "Elevation of WorkEZ Helix: a ten-storey tower with white slab edges and a glazed facade at dusk",
            // A tall picture in a wide frame: shown whole, on a backdrop matched to its dusk sky.
            fit: "contain",
            backdrop:
              "linear-gradient(to bottom, rgb(57,64,109) 0%, rgb(91,101,148) 25%, rgb(140,147,183) 50%, rgb(119,113,96) 75%, rgb(65,48,43) 100%)",
          },
        ],
      },
      {
        caption: "Workspace corridor",
        images: [{ src: "/images/helix/corridor.webp", alt: "Glazed corridor with lounge seating and planting" }],
      },
      {
        caption: "The building",
        images: [{ src: "/images/helix/exterior.webp", alt: "WorkEZ Helix tower in Velachery" }],
      },
      {
        caption: "Booth seating and cafeteria",
        images: [
          { src: "/images/helix/space-1.webp", alt: "Booth seating set into arched openings" },
          { src: "/images/helix/space-2.webp", alt: "Cafeteria tables with planters" },
        ],
      },
      {
        caption: "Lounge and workstations",
        images: [
          { src: "/images/helix/space-3.webp", alt: "Informal lounge with a large pendant light" },
          { src: "/images/helix/space-4.webp", alt: "Rows of workstations under pendant lights" },
        ],
      },
    ] satisfies Slide[],
  },
];

export type ManagedOffice = (typeof managedOffice)[number];
