export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Thrive Clan",
    url: "https://thethriveclan.com",
    logo: "https://thethriveclan.com/images/logo.png",
    sameAs: ["https://x.com/thethriveclan"],
    description: "Sector-specific resources curated by The Thrive Clan",
  };
}