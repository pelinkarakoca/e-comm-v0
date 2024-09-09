export default function ShopPageHeaderRunner() {
  const items = [
    {
      id: 1,
      title: "CLOTHS",
      itemCount: 5,
      imageUrl: "public/assets/homepage/hero1.jpg",
    },
    { id: 2, title: "CLOTHS", itemCount: 5, imageUrl: "image2.jpg" },
    { id: 3, title: "CLOTHS", itemCount: 5, imageUrl: "image3.jpg" },
    { id: 4, title: "CLOTHS", itemCount: 5, imageUrl: "image4.jpg" },
    { id: 5, title: "CLOTHS", itemCount: 5, imageUrl: "image5.jpg" },
  ];

  return (
    <div className="flex flex-col justify-center p-4 lg:flex-row lg:space-x-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative mb-2 h-64 w-full overflow-hidden rounded lg:mb-0 lg:h-56 lg:w-52"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.itemCount} Items</p>
          </div>
        </div>
      ))}
    </div>
  );
}
