import type {
  Product,
  ProductCategory,
  ProductDownload,
  ProductHighlight,
  ProductHotspot,
  ProductImage,
  ProductSpec
} from "@/types/product";

const images = {
  small: "/images/placeholders/small-tubular-motor-placeholder.png",
  series59: "/images/placeholders/series-59-motor-placeholder.png",
  series92: "/images/placeholders/series-92-motor-placeholder.png",
  series92Servo: "/images/placeholders/series-92-servo-motor-placeholder.png",
  controlSystem: "/images/placeholders/Control-system.png",
  accessory: "/images/placeholders/accessary.png"
} as const;

function createImage(src: string, alt: string, role: ProductImage["role"]) {
  return {
    src,
    alt,
    role,
    caption: "placeholder"
  } satisfies ProductImage;
}

function createPlaceholderDownloads(subject: string): ProductDownload[] {
  return [
    {
      title: `${subject} Datasheet Placeholder`,
      type: "datasheet",
      language: "en",
      fileName: "TODO",
      disabled: true,
      placeholderNote:
        "Datasheet file is not available yet and must be supplied by the factory."
    },
    {
      title: `${subject} Manual Placeholder`,
      type: "manual",
      language: "en",
      fileName: "TODO",
      disabled: true,
      placeholderNote:
        "Manual file is not available yet and must be supplied by the factory."
    },
    {
      title: `${subject} Certificate Placeholder`,
      type: "certificate",
      language: "en",
      fileName: "TODO",
      disabled: true,
      placeholderNote:
        "Certificate file is not available yet and must be supplied by the factory."
    }
  ];
}

function createMotorSpecs(controlValue: ProductSpec["value"] = "待补充") {
  return [
    {
      group: "Performance",
      key: "ratedTorque",
      label: "Rated Torque",
      value: "TODO",
      unit: "Nm",
      highlight: true,
      sortOrder: 10
    },
    {
      group: "Performance",
      key: "ratedSpeed",
      label: "Rated Speed",
      value: "TODO",
      unit: "rpm",
      highlight: true,
      sortOrder: 20
    },
    {
      group: "Electrical",
      key: "ratedVoltage",
      label: "Rated Voltage",
      value: "TODO",
      unit: "V",
      highlight: true,
      sortOrder: 30
    },
    {
      group: "Mechanical",
      key: "tubeDiameter",
      label: "Tube Diameter",
      value: "TODO",
      unit: "mm",
      sortOrder: 40
    },
    {
      group: "Control",
      key: "controlType",
      label: "Control Type",
      value: controlValue,
      highlight: true,
      sortOrder: 50
    },
    {
      group: "Environment",
      key: "ipRating",
      label: "IP Rating",
      value: "待补充",
      sortOrder: 60
    },
    {
      group: "Certification",
      key: "certifications",
      label: "Certifications",
      value: "待补充",
      sortOrder: 70
    }
  ] satisfies ProductSpec[];
}

function createSystemSpecs() {
  return [
    {
      group: "Control",
      key: "controlInterface",
      label: "Control Interface",
      value: "TODO",
      highlight: true,
      sortOrder: 10
    },
    {
      group: "Electrical",
      key: "inputVoltage",
      label: "Input Voltage",
      value: "TODO",
      unit: "V",
      sortOrder: 20
    },
    {
      group: "Control",
      key: "supportedProtocol",
      label: "Supported Protocol",
      value: "待补充",
      sortOrder: 30
    },
    {
      group: "Environment",
      key: "ipRating",
      label: "IP Rating",
      value: "待补充",
      sortOrder: 40
    },
    {
      group: "Certification",
      key: "certifications",
      label: "Certifications",
      value: "待补充",
      sortOrder: 50
    }
  ] satisfies ProductSpec[];
}

function createAccessorySpecs() {
  return [
    {
      group: "Mechanical",
      key: "compatibleTube",
      label: "Compatible Tube",
      value: "TODO",
      unit: "mm",
      highlight: true,
      sortOrder: 10
    },
    {
      group: "Mechanical",
      key: "mountingType",
      label: "Mounting Type",
      value: "待补充",
      sortOrder: 20
    },
    {
      group: "Mechanical",
      key: "material",
      label: "Material",
      value: "待补充",
      sortOrder: 30
    },
    {
      group: "Certification",
      key: "certifications",
      label: "Certifications",
      value: "待补充",
      sortOrder: 40
    }
  ] satisfies ProductSpec[];
}

const motorHighlights: ProductHighlight[] = [
  {
    title: "Application Direction",
    description:
      "Placeholder highlight for matching this product direction with the right opening system.",
    status: "placeholder"
  },
  {
    title: "Structured Specs",
    description:
      "Specification fields are prepared for verified factory data in a later stage.",
    status: "placeholder"
  },
  {
    title: "Viewer Ready",
    description:
      "A poster fallback is available while 3D and 360 assets remain TODO.",
    status: "placeholder"
  }
];

const commonMotorHotspots: ProductHotspot[] = [
  {
    id: "motor-head",
    title: "Motor Head",
    description:
      "Placeholder hotspot for the motor head area. Verified structural details are TODO.",
    position: { x: 24, y: 38 },
    status: "placeholder"
  },
  {
    id: "power-cable",
    title: "Power Cable",
    description:
      "Placeholder hotspot for the cable area. Wiring details are TODO.",
    position: { x: 78, y: 42 },
    status: "placeholder"
  },
  {
    id: "tube-adapter",
    title: "Tube Adapter",
    description:
      "Placeholder hotspot for tube adapter matching. Compatibility data is TODO.",
    position: { x: 45, y: 58 },
    status: "placeholder"
  },
  {
    id: "mounting-bracket",
    title: "Mounting Bracket",
    description:
      "Placeholder hotspot for mounting support. Installation dimensions are TODO.",
    position: { x: 18, y: 68 },
    status: "placeholder"
  },
  {
    id: "limit-adjustment",
    title: "Limit Adjustment",
    description:
      "Placeholder hotspot for limit adjustment area. Verified control details are TODO.",
    position: { x: 64, y: 30 },
    status: "placeholder"
  }
];

function createProduct({
  slug,
  name,
  series,
  category,
  applications,
  shortDescription,
  image,
  specs,
  highlights,
  hotspots,
  relatedProducts
}: {
  slug: string;
  name: string;
  series: string;
  category: ProductCategory;
  applications: string[];
  shortDescription: string;
  image: string;
  specs: ProductSpec[];
  highlights: ProductHighlight[];
  hotspots: ProductHotspot[];
  relatedProducts?: string[];
}) {
  return {
    slug,
    name,
    modelNumber: "TODO",
    series,
    category,
    applications,
    shortDescription,
    heroImage: createImage(image, `${name} hero placeholder`, "hero"),
    gallery: [createImage(image, `${name} gallery placeholder`, "gallery")],
    modelPoster: createImage(image, `${name} model poster placeholder`, "poster"),
    model3d: null,
    specs,
    highlights,
    hotspots,
    downloads: createPlaceholderDownloads(name),
    relatedProducts,
    status: "placeholder"
  } satisfies Product;
}

export const mockProducts: Product[] = [
  createProduct({
    slug: "small-tubular-motor-placeholder",
    name: "Small Tubular Motor Placeholder",
    series: "small-tubular-motors",
    category: "motor",
    applications: ["sunshade-and-blinds", "curtains"],
    shortDescription:
      "Compact tubular motor placeholder for shading, blinds and curtain applications.",
    image: images.small,
    specs: createMotorSpecs(),
    highlights: motorHighlights,
    hotspots: commonMotorHotspots,
    relatedProducts: ["control-system-placeholder", "accessory-placeholder"]
  }),
  createProduct({
    slug: "series-59-motor-placeholder",
    name: "59 Series Motor Placeholder",
    series: "59-series-motors",
    category: "motor",
    applications: ["small-rolling-shutters"],
    shortDescription:
      "59 Series tubular motor placeholder for compact rolling shutter applications.",
    image: images.series59,
    specs: createMotorSpecs(),
    highlights: motorHighlights,
    hotspots: commonMotorHotspots,
    relatedProducts: ["control-system-placeholder", "accessory-placeholder"]
  }),
  createProduct({
    slug: "series-92-motor-placeholder",
    name: "92 Series Motor Placeholder",
    series: "92-series-motors",
    category: "motor",
    applications: ["garage-doors", "industrial-doors"],
    shortDescription:
      "92 Series tubular motor placeholder for garage doors and large shutter applications.",
    image: images.series92,
    specs: createMotorSpecs(),
    highlights: motorHighlights,
    hotspots: commonMotorHotspots,
    relatedProducts: [
      "series-92-servo-motor-placeholder",
      "accessory-placeholder"
    ]
  }),
  createProduct({
    slug: "series-92-servo-motor-placeholder",
    name: "92 Servo Motor Placeholder",
    series: "92-servo-motors",
    category: "motor",
    applications: ["garage-doors", "industrial-doors"],
    shortDescription:
      "92 Servo tubular motor placeholder for precise control applications.",
    image: images.series92Servo,
    specs: createMotorSpecs(),
    highlights: motorHighlights,
    hotspots: [
      ...commonMotorHotspots,
      {
        id: "servo-encoder",
        title: "Servo Encoder",
        description:
          "Placeholder hotspot for servo feedback area. Verified encoder details are TODO.",
        position: { x: 72, y: 62 },
        status: "placeholder"
      }
    ],
    relatedProducts: ["series-92-motor-placeholder", "control-system-placeholder"]
  }),
  createProduct({
    slug: "control-system-placeholder",
    name: "Control System Placeholder",
    series: "control-system",
    category: "control-system",
    applications: [
      "sunshade-and-blinds",
      "curtains",
      "small-rolling-shutters",
      "industrial-doors"
    ],
    shortDescription:
      "Control system placeholder for tubular motor application planning.",
    image: images.controlSystem,
    specs: createSystemSpecs(),
    highlights: [
      {
        title: "Control Planning",
        description:
          "Placeholder highlight for future control interface options and system matching.",
        status: "placeholder"
      },
      {
        title: "Integration Ready Structure",
        description:
          "Data fields are prepared for verified protocol and wiring information later.",
        status: "placeholder"
      }
    ],
    hotspots: [
      {
        id: "control-interface",
        title: "Control Interface",
        description:
          "Placeholder hotspot for control interface area. Verified protocol details are TODO.",
        position: { x: 50, y: 45 },
        status: "placeholder"
      }
    ],
    relatedProducts: [
      "small-tubular-motor-placeholder",
      "series-92-servo-motor-placeholder"
    ]
  }),
  createProduct({
    slug: "accessory-placeholder",
    name: "Accessory Placeholder",
    series: "accessory",
    category: "accessory",
    applications: [
      "sunshade-and-blinds",
      "small-rolling-shutters",
      "garage-doors"
    ],
    shortDescription:
      "Accessory category placeholder for mounting, adapter and installation planning.",
    image: images.accessory,
    specs: createAccessorySpecs(),
    highlights: [
      {
        title: "Installation Support",
        description:
          "Placeholder highlight for future mounting and adapter documentation.",
        status: "placeholder"
      },
      {
        title: "Compatibility Fields",
        description:
          "Data fields are prepared for verified compatibility information later.",
        status: "placeholder"
      }
    ],
    hotspots: [
      {
        id: "adapter-part",
        title: "Adapter Part",
        description:
          "Placeholder hotspot for adapter part area. Verified fitment data is TODO.",
        position: { x: 52, y: 52 },
        status: "placeholder"
      }
    ],
    relatedProducts: [
      "small-tubular-motor-placeholder",
      "series-59-motor-placeholder",
      "series-92-motor-placeholder"
    ]
  })
];
