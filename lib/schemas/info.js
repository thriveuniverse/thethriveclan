export function createInfoSchema({ title, description, url, image = null, pageType = "WebPage" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": pageType, // Allows flexibility for AboutPage, ContactPage, etc.
    name: title,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: "The Thrive Clan",
      url: "https://thethriveclan.com",
      logo: "https://thethriveclan.com/images/logo.png", // Fixed: consistent with organization.js
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://thethriveclan.com" }, // Fixed domain
        { "@type": "ListItem", position: 2, name: title, item: url },
      ],
    },
  };

  if (image) schema.image = image;
  return schema;
}
