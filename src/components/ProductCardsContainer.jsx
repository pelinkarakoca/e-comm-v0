import ProductCard from "./ProductCard";

export default function ProductCardsContainer({ products, children }) {
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 font-mono">
      {children}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
