export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Thrive Clan",
    url: "https://thethriveclan.com",
    logo: "https://thethriveclan.com/images/logo.png",
    sameAs: [
      "https://x.com/thethriveclan",
      "https://last-prompt.com",
      "https://lastprompt.io",
      "https://ukoilwatch.com",
      "https://eurooilwatch.com",
      "https://americasoilwatch.com",
    ],
    description: "Independent research at the intersection of decision intelligence and systemic resilience. Two projects: Last Prompt (consequence-bearing reasoning environment) and Compound Cascade Systems Modelling (probabilistic risk analysis of systemic crises).",
  };
}