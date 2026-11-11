// Edit this file to change the portfolio.
// Each project's illustration lives in components/ProjectArt.tsx, keyed by `slug`.
// All entries below are placeholders — replace them with real projects.

export type Project = {
  slug: string;
  title: string;
  kind: string;
  place: string;
  year: string;
  role: string;
  tools: string;
  blurb: string;
  text: string;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "courtyard-museum",
    title: "Courtyard Museum",
    kind: "Graduation project",
    place: "Old town quarter",
    year: "2024",
    role: "Individual thesis",
    tools: "Revit, 3ds Max, Photoshop",
    blurb:
      "A white gallery volume slips beside a brick warehouse, sharing one public courtyard.",
    text: "The thesis asks how a new cultural building can sit next to heritage fabric without imitating it. A glazed ground floor keeps the courtyard visible from the street, while the galleries float above on a single long beam.",
    alt: "Illustration of a white glazed gallery beside a red brick building",
  },
  {
    slug: "weavers-library",
    title: "Weavers’ Library",
    kind: "Competition entry — second prize",
    place: "Textile district",
    year: "2023",
    role: "Team of three — design lead",
    tools: "AutoCAD, SketchUp, V-Ray",
    blurb: "A neighbourhood library with deep square windows that read like a loom.",
    text: "A compact reading tower for a weaving community. Deep reveals shade the glass and turn every window into a seat. The ground floor opens fully to a shared working yard.",
    alt: "Illustration of a white cubic library with deep square windows",
  },
  {
    slug: "brick-house",
    title: "Brick House Renovation",
    kind: "Freelance — residential",
    place: "Suburban plot",
    year: "2025",
    role: "Concept to working drawings",
    tools: "AutoCAD, SketchUp, Lumion",
    blurb: "An old gabled house kept intact, with a light white living room added to the garden.",
    text: "The clients wanted more daylight without losing the character of the family home. The existing brick shell was repaired and a single-storey glazed extension added, connected by a top-lit passage.",
    alt: "Illustration of a red brick gabled house with a white glazed extension",
  },
  {
    slug: "terrace-housing",
    title: "Terrace Housing",
    kind: "Design studio — semester 7",
    place: "Hillside site",
    year: "2022",
    role: "Individual studio project",
    tools: "Revit, Enscape, InDesign",
    blurb: "Stepped homes where every roof becomes the terrace of the home above.",
    text: "A housing study for a steep site. The section steps with the slope so each unit gains a private terrace and cross ventilation, with a shared brick stair tower tying the levels together.",
    alt: "Illustration of stepped white housing with a brick stair tower",
  },
  {
    slug: "market-pavilion",
    title: "Market Pavilion",
    kind: "Competition entry — shortlisted",
    place: "Town square",
    year: "2022",
    role: "Team of two",
    tools: "Rhino, AutoCAD, Illustrator",
    blurb: "One thin roof on slender columns, giving a weekly market permanent shade.",
    text: "A lightweight canopy set against an existing brick wall. Stalls plug into a regular column grid, and the roof collects rainwater for the square’s planting.",
    alt: "Illustration of a thin white canopy on columns in front of a brick wall",
  },
  {
    slug: "studio-interior",
    title: "Studio Apartment",
    kind: "Freelance — interior",
    place: "City apartment",
    year: "2025",
    role: "Interior design & site supervision",
    tools: "SketchUp, V-Ray, AutoCAD",
    blurb: "A 45 m² apartment organised around one timber wall that hides all the storage.",
    text: "A compact interior for a young professional. A full-height slatted timber wall conceals wardrobe, kitchen appliances and a fold-down desk, leaving the rest of the room calm and open.",
    alt: "Illustration of an interior with a timber slat wall, sofa and pendant lamp",
  },
];
