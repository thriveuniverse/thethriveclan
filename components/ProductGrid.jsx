import Image from "next/image";
import Link from "next/link";

export default function ProductGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/products/${item.slug}`}
          className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative w-full h-40">
            <Image
              src={item.img}
              alt={item.alt}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-base font-medium">{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
