import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

const navbarLinks = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" },
  { name: "Contact", url: "/contact" },
  { name: "About Us", url: "/aboutus" },
];

const Navbar: React.FC = () => {
  return (
    <>
      <section className="sticky shadow-md">
        <div className="m-auto flex w-[80%] justify-between py-2">
          <img src={Logo} alt="" className="w-10" />
          <nav className="flex items-center">
            <ul className="font-poppins flex text-lg">
              {navbarLinks.map((link) => (
                <Link
                  to={link.url}
                  key={link.name}
                  className="text-and-hover mr-8 text-base last:mr-0"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default React.memo(Navbar);
