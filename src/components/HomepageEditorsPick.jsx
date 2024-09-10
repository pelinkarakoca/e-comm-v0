const EditorsPick = () => {
  const categories = [
    { name: "MEN", imageUrl: "public/assets/homepage/editor-men.jpg" },
    { name: "WOMEN", imageUrl: "public/assets/homepage/editor-women.jpg" },
    {
      name: "ACCESSORIES",
      imageUrl: "public/assets/homepage/editor-accessories.jpg",
    },
    { name: "KIDS", imageUrl: "public/assets/homepage/editor-kids.jpg" },
  ];

  return (
    <div className="mx-auto max-w-full p-4 md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
      <h2 className="mb-2 text-center text-xl font-semibold">EDITOR'S PICK</h2>
      <p className="mb-4 text-center text-sm text-gray-600">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <img
              src={category.imageUrl}
              alt={category.name}
              className="h-auto w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-sm font-semibold">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
