import { addressLine, company } from "@/lib/company";

const data = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  legalName: company.legalName,
  alternateName: company.shortName,
  url: company.website,
  email: company.email,
  telephone: company.phoneDisplay,
  foundingDate: "2024-08-12",
  duns: company.duns,
  identifier: company.companyNumber,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.building}, ${company.address.street}`,
    addressLocality: company.address.locality,
    addressRegion: company.address.county,
    postalCode: company.address.postalCode,
    addressCountry: "KE",
  },
  location: addressLine,
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
