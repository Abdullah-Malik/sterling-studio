import manifest from "../../public/portfolio-source/asset-manifest.json";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  services: string[];
  cover: string;
  sourceUrl: string;
  media: string[];
};

const assets = manifest.assets as string[];

const mediaFor = (prefixes: string[]) =>
  assets.filter((asset) => prefixes.some((prefix) => asset.startsWith(prefix)));

export const assetUrl = (asset: string) =>
  `/portfolio-source/${asset.split("/").map(encodeURIComponent).join("/")}`;

export const mediaKind = (asset: string) =>
  /\.(mp4|mov)$/i.test(asset) ? "video" : "image";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "shiba-wings",
    title: "Shiba Wings",
    category: "Social Content & Motion",
    summary:
      "Social media posts, launch creative, motion graphics, and campaign support for a crypto brand building momentum online.",
    services: ["Social media content", "Motion graphics", "Ad creative", "Video editing"],
    cover: "images/Portfolio-Poster/wings.jpg",
    sourceUrl: "https://seharijaz.com/shiba",
    media: mediaFor(["images/portfolio-details/shiba/"]),
  },
  {
    slug: "wingers-uk",
    title: "Wingers UK",
    category: "Motion Graphics",
    summary:
      "Animated brand assets and video edits created to support restaurant marketing, social posts, and visual campaigns.",
    services: ["Motion design", "Video editing", "Social assets"],
    cover: "images/Portfolio-Poster/wingers.jpg",
    sourceUrl: "https://seharijaz.com/wingers",
    media: mediaFor(["images/portfolio-details/wingers/"]),
  },
  {
    slug: "the-nutrients",
    title: "The Nutritionists",
    category: "Brand Design & Motion",
    summary:
      "Brand visuals, packaging support, promotional graphics, and motion-led assets designed for a consumer product company.",
    services: ["Graphic design", "Brand assets", "Motion graphics", "Promotional content"],
    cover: "images/Portfolio-Poster/nutrution.jpg",
    sourceUrl: "https://seharijaz.com/nutrients",
    media: mediaFor(["images/portfolio-details/nutrients/"]),
  },
];

export const getPortfolioProject = (slug: string) =>
  portfolioProjects.find((project) => project.slug === slug);
