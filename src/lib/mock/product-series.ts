import type { ProductSeries } from "@/types/product";

export const mockProductSeries: ProductSeries[] = [
  {
    slug: "small-tubular-motors",
    name: "Small Tubular Motors",
    category: "motor",
    description:
      "Compact tubular motor category for sunshade, blinds and curtain applications.",
    image: "/images/placeholders/small-tubular-motor-placeholder.png",
    sortOrder: 10,
    placeholderNote: "Series-level details are waiting for verified factory data."
  },
  {
    slug: "59-series-motors",
    name: "59 Series Motors",
    category: "motor",
    description:
      "Tubular motor category prepared for small rolling shutter applications.",
    image: "/images/placeholders/series-59-motor-placeholder.png",
    sortOrder: 20,
    placeholderNote: "Series-level details are waiting for verified factory data."
  },
  {
    slug: "92-series-motors",
    name: "92 Series Motors",
    category: "motor",
    description:
      "Tubular motor category prepared for garage doors and large rolling shutters.",
    image: "/images/placeholders/series-92-motor-placeholder.png",
    sortOrder: 30,
    placeholderNote: "Series-level details are waiting for verified factory data."
  },
  {
    slug: "92-servo-motors",
    name: "92 Servo Motors",
    category: "motor",
    description:
      "Servo-oriented tubular motor category for precise control scenarios.",
    image: "/images/placeholders/series-92-servo-motor-placeholder.png",
    sortOrder: 40,
    placeholderNote: "Series-level details are waiting for verified factory data."
  },
  {
    slug: "control-system",
    name: "Control System",
    category: "control-system",
    description:
      "Control interface and system option category for tubular motor applications.",
    image: "/images/placeholders/Control-system.png",
    sortOrder: 50,
    placeholderNote: "Control system details are placeholders until verified."
  },
  {
    slug: "accessory",
    name: "Accessory",
    category: "accessory",
    description:
      "Mounting, adapter and installation accessory category for tubular motor systems.",
    image: "/images/placeholders/accessary.png",
    sortOrder: 60,
    placeholderNote: "Accessory details are placeholders until verified."
  }
];
