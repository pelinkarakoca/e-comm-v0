export default function ProductCardsContainer({ products }) {
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
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <img
              className="h-64 w-full object-cover"
              src={product.image}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-600">{product.department}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-400 line-through">
                  {product.price}
                </span>
                <span className="font-bold text-teal-500">
                  {product.salePrice}
                </span>
              </div>
              <div className="mt-4 flex space-x-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
