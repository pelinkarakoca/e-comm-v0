import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div className="flex">
      <h1 className="font-mono text-transparent inline-block bg-gradient-to-r from-customTallPoppy to-customAmaranth bg-clip-text text-xl font-extrabold">
        novamart
      </h1>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faCartShopping} />
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}
