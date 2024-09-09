export default function ProductCard({ product }) {
  return (
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
        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
        <p className="text-gray-600">{product.department}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-400 line-through">{product.price}</span>
          <span className="font-bold text-teal-500">{product.salePrice}</span>
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
