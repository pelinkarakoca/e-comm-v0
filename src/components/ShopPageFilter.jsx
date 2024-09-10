import { useState } from "react";
import { Grip, List } from "lucide-react";

export default function ShopPageFilter({ onDirection, numResult = 12 }) {
  const [filter, setFilter] = useState("popularity");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-between space-y-6 text-sm font-bold text-accent lg:flex-row lg:py-9">
      <p className="">Showing {numResult} results </p>
      <div className="flex items-center space-x-2">
        <span className="">Views:</span>
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
