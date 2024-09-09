import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faClock,
  faPersonChalkboard,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

//?? Burada progress'i prop olarak atarken aşağıda destruct edip default value gibi bi şey kullanmak iyi olur mu?

import { useHistory } from "react-router-dom";
import { Badge } from "./ui/badge";
import { ChevronRight, Heart, ShoppingCart, Eye } from "lucide-react";
/*  sale = true,
  numOfSales = 15,
  price = "$16.48",
  salePrice = "$6.48",*/
export default function ProductCardDetail({ product }) {
  const history = useHistory();
  function handleClick(loc) {
    history.push(`/${loc}`);
  }
  return (
    <div className="h-auto w-96 rounded-2xl">
      <section className="upperside">
        <div className="relative">
          {product.sale && (
            <Badge variant="destructive" className="absolute left-4 top-4">
              Sale
            </Badge>
          )}

          <img className="h-1/2 w-full rounded-t-2xl" src={product.image}></img>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-95">
              <Heart />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-95">
              <ShoppingCart />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-95">
              <Eye />
            </button>
          </div>
        </div>
      </section>
      <section className="lowerside flex flex-col justify-between space-y-4 bg-slate-50">
        <h2 className="font-bold text-primary">{product.title}</h2>
        <div className="space-y-4">
          <h1 className="font-bold">{product.department}</h1>
          <p className="text-sm">{product.description}</p>
          <p className="space-x-1">
            <FontAwesomeIcon icon={faDownload} />
            <span>{product.numOfSales} sales</span>
          </p>
          <p className="space-x-4">
            <span
              className={
                product.salePrice.length
                  ? "text-gray-400"
                  : "font-bold text-secondary"
              }
            >
              {product.price}
            </span>
            <span className="font-bold text-secondary">
              {product.salePrice}
            </span>
          </p>
          <div className="flex space-x-2">
            <div className="h-4 w-4 rounded-full bg-primary"></div>
            <div className="h-4 w-4 rounded-full bg-secondary"></div>
            <div className="h-4 w-4 rounded-full bg-primary-red"></div>
            <div className="h-4 w-4 rounded-full bg-secondary-foreground"></div>
          </div>
          <div className="flex justify-between space-x-2 font-mono text-sm">
            <p className="space-x-2">
              <FontAwesomeIcon icon={faClock} className="text-primary" />
              <span>{product.duration}</span>
            </p>
            <p className="space-x-2">
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className="text-primary-red"
              />
              <span>{product.lessons} lessons</span>
            </p>
            <p className="space-x-2">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="text-secondary"
              />
              <span>{product.progress}</span>
            </p>
          </div>
        </div>
        <button
          className="mr-40 rounded-3xl border-2 border-primary bg-transparent px-8 py-2 text-xs font-bold text-primary"
          onClick={() => handleClick("product-info")}
        >
          Learn More
          <ChevronRight className="inline-block" />
        </button>
      </section>
    </div>
  );
}
