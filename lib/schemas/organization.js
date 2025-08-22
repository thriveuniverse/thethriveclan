// lib/schemas/organization.js
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Thrive Clan",
    url: "https://thethriveclan.com", // Replace with your actual domain
    logo: "https://thethriveclan.com/images/logo.jpg",
    sameAs: [
      "https://x.com/thethriveclan",
    ],
  };
}