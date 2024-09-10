import { useState } from "react";
import { Grip, List } from "lucide-react";

export default function ShopPageFilter({ onDirection, numResult = 12 }) {
  const [filter, setFilter] = useState("popularity");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="flex items-center justify-between py-9">
      <p>Showing {numResult} results </p>
      <div className="flex items-center space-x-2">
        <span className="font-bold text-accent">Views:</span>
        <button
          className="rounded-md border-2 border-[#ECECEC] p-3.5"
          onClick={() => onDirection(true)}
        >
          {" "}
          <Grip />
        </button>
        <button
          className="rounded-md border-2 border-[#ECECEC] p-3.5"
          onClick={() => onDirection(false)}
        >
          {" "}
          <List />
        </button>
      </div>
      <select value={filter} onChange={handleChange} className="mx-4">
        <option value="popularity">Popularity</option>
        <option value="ascending">Price ascending</option>
        <option value="descending">Price descending</option>
      </select>
    </div>
  );
}
