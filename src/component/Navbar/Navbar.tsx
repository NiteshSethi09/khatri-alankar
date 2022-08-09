import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { GrMenu, GrFormClose } from "react-icons/gr";

const navbarLinks = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" },
  { name: "Contact", url: "/contact" },
  { name: "About Us", url: "/aboutus" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <section className="sticky shadow-md">
        <div className="py-2 md:m-auto md:flex md:w-[80%] md:justify-between">
          <div className="m-auto flex w-[80%] items-center justify-between md:m-0 md:w-auto">
            <img src={Logo} alt="" className="w-10" />
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="block md:hidden"
            >
              {open ? <GrFormClose size={20} /> : <GrMenu size={20} />}
            </div>
          </div>
          <nav className="relative flex items-center ">
            <ul
              className={`font-poppins absolute top-0 block w-full bg-white text-lg shadow-lg md:static md:flex md:shadow-none ${
                open ? "block" : "hidden"
              }`}
            >
              {navbarLinks.map((link) => (
                <Link
                  to={link.url}
                  key={link.name}
                  onClick={() => setOpen(false)}
                  className="text-and-hover m-auto block w-[80%] py-3 text-base md:mr-8 md:w-auto md:py-0 md:last:mr-0"
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
