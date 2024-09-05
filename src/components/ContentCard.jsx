import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Badge } from "./ui/badge";
import { ChevronRight } from "lucide-react";
export default function ContentCard({ content }) {
  const history = useHistory();
  function handleClick(loc) {
    history.push(`/${loc}`);
  }
  //TODO: mobile view
  return (
    <div className="h-1/2 w-96 rounded-2xl">
      <section className="upperside">
        <div className="relative">
          <Badge variant="destructive" className="absolute left-4 top-4">
            New
          </Badge>
          <img
            className="h-60 w-96 rounded-t-2xl object-cover"
            src={content.imageUrl}
          ></img>
        </div>
      </section>
      <section className="lowerside flex flex-col justify-between space-y-4 p-6">
        <div className="flex">
          {content.tags.map((tag) => (
            <Badge
              key={tag}
              className="bg-transparent text-secondary-foreground hover:text-secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h2 className="font-bold text-primary">{content.title}</h2>
        <div className="space-y-4">
          <h1 className="text-xs">{content.description}</h1>

          <div className="flex justify-between space-x-2 font-mono text-sm">
            <p className="space-x-2">
              <FontAwesomeIcon icon={faClock} className="text-primary" />
              <span>22 hr 30 min</span>
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
          className="rounded-3xl border-primary bg-transparent py-2 text-xs font-bold text-primary"
          onClick={() => handleClick("product-info")}
        >
          Learn More
          <ChevronRight className="inline-block" />
        </button>
      </section>
    </div>
  );
}
