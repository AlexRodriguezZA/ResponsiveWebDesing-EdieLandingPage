import { useState, useEffect } from "react";

const Navbar = () => {
  const navItems = [
    { label: "Home", route: "#Home" },
    { label: "Services", route: "#Services" },
    { label: "Our Works", route: "#OurWorks" },
    { label: "Clients", route: "#Clients" },
    { label: "Contact", route: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [])
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-11/12 md:w-full max-w-5xl h-16 flex flex-row md:flex-nowrap md:h-20 justify-between items-center text-[#333] static bg-white">
      <div className="flex items-center  md:w-auto mb-4 md:mb-0">
        <ul className="h-full flex justify-center items-center mt-4 md:mt-0">
          <li className="text-2xl md:text-3xl font-extrabold">Edie</li>
        </ul>
      </div>
      <div className="md:flex md:flex-col items-center gap-10">
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>
        <ul
          className={`${
            isMobileMenuOpen ? "md:block" : "hidden md:flex"
          } flex-col gap-7 md:flex-row md:items-center absolute md:static top-16 w-full flex justify-center items-center left-0 md:top-0 md:left-auto bg-white md:bg-transparent`}
        >
          {navItems.map((item) => (
            <li
              className="font-medium text-xl hover:cursor-pointer"
              key={item.label}
            >
              <a href={item.route}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

