import type { ProductApplication } from "@/types/product";

export const mockApplications: ProductApplication[] = [
  {
    slug: "sunshade-and-blinds",
    name: "Sunshade & Blinds",
    shortDescription:
      "Application placeholder for compact shading and blind systems.",
    relatedSeries: ["small-tubular-motors", "control-system", "accessory"],
    image: "/images/placeholders/small-tubular-motor-placeholder.png",
    placeholderNote:
      "Application requirements, installation details and product matching are TODO."
  },
  {
    slug: "curtains",
    name: "Curtains",
    shortDescription:
      "Application placeholder for curtain opening and control scenarios.",
    relatedSeries: ["small-tubular-motors", "control-system", "accessory"],
    image: "/images/placeholders/small-tubular-motor-placeholder.png",
    placeholderNote:
      "Application requirements, installation details and product matching are TODO."
  },
  {
    slug: "small-rolling-shutters",
    name: "Small Rolling Shutters",
    shortDescription:
      "Application placeholder for compact rolling shutter systems.",
    relatedSeries: ["59-series-motors", "control-system", "accessory"],
    image: "/images/placeholders/series-59-motor-placeholder.png",
    placeholderNote:
      "Application requirements, installation details and product matching are TODO."
  },
  {
    slug: "garage-doors",
    name: "Garage Doors",
    shortDescription:
      "Application placeholder for garage door tubular motor systems.",
    relatedSeries: ["92-series-motors", "92-servo-motors", "accessory"],
    image: "/images/placeholders/series-92-motor-placeholder.png",
    placeholderNote:
      "Application requirements, installation details and product matching are TODO."
  },
  {
    slug: "industrial-doors",
    name: "Industrial Doors",
    shortDescription:
      "Application placeholder for large opening and industrial door scenarios.",
    relatedSeries: ["92-series-motors", "92-servo-motors", "control-system"],
    image: "/images/placeholders/series-92-servo-motor-placeholder.png",
    placeholderNote:
      "Application requirements, installation details and product matching are TODO."
  }
];
