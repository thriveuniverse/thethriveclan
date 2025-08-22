export function createProductSchema({ name, description, image, url, price = null, sku = null, category = null }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url,
    },
    brand: {
      "@type": "Brand",
      name: "The Thrive Clan",
    },
  };
  if (price) schema.offers.price = price;
  if (sku) schema.sku = sku;
  if (category) schema.category = category;
  return schema;
}