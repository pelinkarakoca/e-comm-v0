export default function ProductCard({ product, direction }) {
  //TODO- product card images- mobile view
  return (
    <div
      key={product.id}
      className={
        direction
          ? "flex-col overflow-hidden rounded-lg bg-white shadow-lg"
          : "flex overflow-hidden rounded-lg bg-white shadow-lg"
      }
    >
      <img
        className="object-fit h-64 w-full object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
        <p className="text-gray-600">{product.department}</p>
        <div className="mt-4 flex items-center justify-between">
          <span
            className={
              product.salePrice.length
                ? "text-gray-400 line-through"
                : "font-bold text-secondary"
            }
          >
            {product.price}
          </span>
          <span className="font-bold text-secondary-foreground">
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
  );
}
