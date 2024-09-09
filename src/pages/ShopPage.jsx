import ProductCardsContainer from "../components/ProductCardsContainer";
import ShopPageHeader from "../components/ShopPageHeader";
import ShopPageFilter from "../components/ShopPageFilter";
import ShopPagePagination from "../components/ShopPagePagination";
export default function ShopPage() {
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      price: "$16.48",
      salePrice: "$6.48",
      numOfSales: 15,
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-1.jpg",
      duration: "22 hr 30 min",
      lessons: 64,
      progress: "Progress",
      sale: true,
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-2.jpg",
      numOfSales: 15,
      duration: "22 hr 30 min",
      lessons: 64,
      progress: "Progress",
      sale: true,
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-3.jpg",
      numOfSales: 15,
      duration: "22 hr 30 min",
      lessons: 64,
      progress: "Progress",
      sale: true,
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-4.jpg",
      numOfSales: 15,
      duration: "22 hr 30 min",
      lessons: 64,
      progress: "Progress",
      sale: true,
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "iassets/homepage/product-8.jpg",
      numOfSales: 15,
      duration: "22 hr 30 min",
      lessons: 64,
      progress: "Progress",
      sale: true,
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-5.jpg",
      numOfSales: 15,
      duration: "22 hr 30 min",
      lessons: 64,
      progress: "Progress",
      sale: true,
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-6.jpg",
      numOfSales: 15,
      duration: "22 hr 30 min",
      lessons: 64,
      progress: "Progress",
      sale: true,
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-7.jpg",
      numOfSales: 15,
      duration: "22 hr 30 min",
      lessons: 64,
      progress: "Progress",
      sale: true,
    },
  ];

  return (
    <div>
      <ShopPageHeader />
      <ShopPageFilter />
      <ProductCardsContainer products={products} />
      <ShopPagePagination />
    </div>
  );
}
