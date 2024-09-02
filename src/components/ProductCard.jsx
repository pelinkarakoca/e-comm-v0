import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faClock,
  faPersonChalkboard,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

import { useHistory } from "react-router-dom";
import { Badge } from "./ui/badge";
import { ChevronRight, Heart, ShoppingCart, Eye } from "lucide-react";
export default function ProductCard() {
  const history = useHistory();
  function handleClick(location) {
    history.push(`/${location}`);
  }
  return (
    <div className="h-auto w-96 rounded-2xl border-2 border-blue-800">
      <section className="upperside">
        <div className="relative">
          <Badge variant="destructive" className="absolute left-4 top-4">
            Sale
          </Badge>
          <img
            className="h-1/2 w-full rounded-t-2xl"
            src="../public/assets/headphone.jpg"
          ></img>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFFFF] text-black">
              <Heart />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFFFF] text-black">
              <ShoppingCart />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFFFF] text-black">
              <Eye />
            </button>
          </div>
        </div>
      </section>
      <section className="lowerside flex flex-col justify-between space-y-4 p-6">
        <h2 className="font-bold text-primary">English Department</h2>
        <div className="space-y-4">
          <h1 className="font-bold">Graphic design</h1>
          <p className="text-sm">
            We focus on ergonomics and meeting you where you work. Its only a
            keystroke away.
          </p>
          <p className="space-x-1">
            <FontAwesomeIcon icon={faDownload} />
            <span>15 sales</span>
          </p>
          <p className="space-x-4">
            <span className="font-bold text-gray-400">$16.48</span>
            <span className="font-bold text-secondary">$6.48</span>
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
              <span>22 hr 30 min</span>
            </p>
            <p className="space-x-2">
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className="text-primary-red"
              />
              <span>64 Lessons</span>
            </p>
            <p className="space-x-2">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="text-secondary"
              />
              <span>Progress</span>
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
