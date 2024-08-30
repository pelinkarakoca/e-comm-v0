import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full bg-white">
      <div className="container mx-auto flex items-center justify-between border-2">
        <h1 className="inline-block bg-gradient-to-r from-secondary to-secondary-foreground bg-clip-text font-mono text-xl font-extrabold text-transparent">
          novamart
        </h1>
        {/* desktop view */}
        <NavLinks className="hidden space-x-6 self-center lg:flex" />
        <nav className="w-1/4">
          <div className="flex justify-between text-secondary-foreground">
            <div className="hidden space-x-2 lg:inline-flex">
              <FontAwesomeIcon icon={faUser} />
              <span>Login/Register</span>
            </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faHeart} className="hidden lg:inline" />
            {/* mobile view */}
            <div className="flex cursor-pointer flex-col lg:hidden">
              <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
              {!isOpen && (
                <div className="fixed left-0 top-16 z-10 flex h-full w-full flex-col items-center justify-start border-2 border-red-500 bg-gray-300 opacity-50">
                  <NavLinks className="flex w-3/4 flex-col space-y-2 text-center" />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLinks({ className }) {
  return (
    <div className={className}>
      <Link to="#">Home</Link>
      <Link to="#">Shop</Link>
      <Link to="#">About</Link>
      <Link to="#">Blog</Link>
      <Link to="#">Contact</Link>
      <Link to="#">Pages</Link>
      {/*    <Link to="#">Product</Link>
      <Link to="#">Pricing</Link>
      <Link to="#">Contact</Link> */}
    </div>
  );
}
