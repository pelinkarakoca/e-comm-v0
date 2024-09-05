import Header from "../layout/Header";
import Carousel from "../components/Carousel";
import EditorsPick from "../layout/EditorsPick";
import ProductCardsContainer from "../layout/ProductCardsContainer";
import ContentCardsContainer from "../layout/ContentCardsContainer";
import Footer from "../layout/Footer";
export default function HomePage() {
  const slidesHero = [
    "public/assets/homepage/hero1.jpg",
    "public/assets/homepage/hero2.jpg",
  ];
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-1.jpg",
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-2.jpg",
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-3.jpg",
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-4.jpg",
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "iassets/homepage/product-8.jpg",
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-5.jpg",
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-6.jpg",
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["#6B7280", "#374151", "#111827", "#F59E0B"],
      image: "assets/homepage/product-7.jpg",
    },
  ];

  const carousel2Slide = [
    "assets/homepage/carousel-2.jpg",
    "assets/homepage/carousel-2.jpg",
  ];

  const contents = [
    {
      id: 1,
      imageUrl: "assets/homepage/content-card-1.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      subtitle: "Google Trending New",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      cta: "Learn More",
    },
    {
      id: 2,
      imageUrl: "assets/homepage/content-card-2.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      subtitle: "Google Trending New",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      cta: "Learn More",
    },
    {
      id: 3,
      imageUrl: "assets/homepage/content-card-3.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      subtitle: "Google Trending New",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      cta: "Learn More",
    },
  ];

  return (
    <div>
      <Header />
      <Carousel slides={slidesHero} />
      <EditorsPick />
      <ProductCardsContainer products={products} />
      <Carousel slides={carousel2Slide} />
      <ContentCardsContainer contents={contents} />
      <Footer />
    </div>
  );
}
