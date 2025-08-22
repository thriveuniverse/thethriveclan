export function createBlogSchema({ title, author, datePublished, description, url, image, keywords = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    author: { "@type": "Person", name: author },
    datePublished: datePublished.toISOString(), // Ensure ISO format
    description,
    url,
    image,
    keywords,
    publisher: {
      "@type": "Organization",
      name: "The Thrive Clan",
      url: "https://thethriveclan.com",
      logo: "https://thethriveclan.com/images/logo.jpg",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}