export function createProductSchema({ 
  name, 
  description, 
  image, 
  url, 
  price = null, 
  sku = null, 
  category = null,
  aggregateRating = null,
  brand = "The Thrive Clan"
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    url,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url,
      seller: {
        "@type": "Organization",
        name: "The Thrive Clan",
        url: "https://thethriveclan.com"
      }
    },
    brand: {
      "@type": "Brand", 
      name: brand,
    },
    // For digital products
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Product Type",
        value: "Digital Download"
      },
      {
        "@type": "PropertyValue", 
        name: "Delivery Method",
        value: "Instant Download"
      }
    ]
  };

  if (price) schema.offers.price = price;
  if (sku) schema.sku = sku;
  if (category) schema.category = category;
  if (aggregateRating) schema.aggregateRating = aggregateRating;

  return schema;
}
