import ProductCard from "./ProductCard";
import ProductCardDetail from "./ProductCardDetail";
export default function ProductCardsContainer({ products }) {
  const product = products[0];
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 font-mono">
      <div className="mb-8 text-center">
        <h2 className="text-lg text-gray-500">Featured Products</h2>
        <h1 className="text-xl font-semibold uppercase">Bestseller Products</h1>
        <p className="text-gray-400">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/*products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))*/}
        <ProductCard product={product} />
      </div>
    </div>
  );
}
