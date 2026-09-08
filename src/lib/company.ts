export const company = {
  shortName: "SEETO",
  legalName: "SEETO COMMUNICATION LIMITED",
  companyNumber: "PVT-XYULAE8K",
  duns: "850393606",
  registered: "12 August 2024",
  act: "The Companies Act, 2015",
  structure: "Private limited company",
  shareCapital: "KES 1,000.00",
  shares: "1 ordinary share of KES 1,000.00",
  encumbrances: "None recorded",
  director: {
    name: "Zakaria Ali Osman",
    role: "Director & Shareholder",
    nationality: "Kenya",
  },
  email: "admin@seeto.app",
  phoneDisplay: "+254 757 848 189",
  phoneTel: "+254757848189",
  whatsapp: "https://wa.me/254757848189",
  website: "https://seeto.app",
  registry: "Business Registration Service, Nairobi",
  address: {
    street: "Kilimani Road",
    building: "House of Leather",
    locality: "Kilimani",
    district: "Westlands District",
    county: "Nairobi",
    country: "Kenya",
    poBox: "P.O. Box 1049",
    gpo: "G.P.O Nairobi",
    postalCode: "00100",
  },
} as const;

export const addressLine = [
  company.address.building,
  company.address.street,
  `${company.address.locality}, ${company.address.county}`,
  company.address.country,
].join(", ");

export const postalLine = `${company.address.poBox}, ${company.address.gpo} ${company.address.postalCode}`;
