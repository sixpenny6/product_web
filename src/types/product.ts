export type ProductSpecGroup =
  | "Performance"
  | "Electrical"
  | "Mechanical"
  | "Control"
  | "Environment"
  | "Certification";

export type ProductCategory = "motor" | "control-system" | "accessory";

export type ControlType =
  | "TODO"
  | "待补充"
  | "placeholder"
  | "wired"
  | "remote"
  | "smart"
  | "servo";

export type ProductDownloadType =
  | "datasheet"
  | "manual"
  | "wiring"
  | "certificate"
  | "catalog"
  | "cad"
  | "other";

export type ProductStatus = "placeholder" | "draft" | "published";

export type ProductImageRole =
  | "hero"
  | "gallery"
  | "poster"
  | "application"
  | "series";

export type ProductImage = {
  src: string;
  alt: string;
  role?: ProductImageRole;
  caption?: string;
};

export type ProductSpec = {
  group: ProductSpecGroup;
  key: string;
  label: string;
  value: "TODO" | "待补充" | "placeholder";
  unit?: string;
  highlight?: boolean;
  sortOrder: number;
};

export type ProductSpecGroupData = {
  group: ProductSpecGroup;
  label: string;
  specs: ProductSpec[];
};

export type ProductHighlight = {
  title: string;
  description: string;
  status?: "placeholder";
};

export type ProductHotspot = {
  id: string;
  title: string;
  description: string;
  position: {
    x: number;
    y: number;
    z?: number;
  };
  relatedSpecKeys?: string[];
  status?: "placeholder";
};

export type ProductDownload = {
  title: string;
  type: ProductDownloadType;
  language: string;
  version?: string;
  fileName?: "TODO" | "待补充" | "placeholder";
  href?: string;
  disabled: boolean;
  placeholderNote: string;
};

export type ProductSeries = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  sortOrder: number;
  placeholderNote?: string;
};

export type ProductApplication = {
  slug: string;
  name: string;
  shortDescription: string;
  relatedSeries: string[];
  image: string;
  placeholderNote: string;
};

export type Product = {
  slug: string;
  name: string;
  modelNumber: "TODO" | "待补充" | "placeholder";
  series: string;
  category: ProductCategory;
  applications: string[];
  shortDescription: string;
  heroImage: ProductImage;
  gallery?: ProductImage[];
  modelPoster: ProductImage;
  model3d: null;
  specs: ProductSpec[];
  highlights: ProductHighlight[];
  hotspots: ProductHotspot[];
  downloads: ProductDownload[];
  relatedProducts?: string[];
  status?: ProductStatus;
};
