import { useState } from "react";

const CardService = ({ icon, title, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-11/12 h-[400px] max-w-sm py-10 pl-8 rounded-lg hover:shadow-xl hover:cursor-pointer"
    >
      <div
        className={`w-16 h-16 rounded-2xl flex justify-center items-center ${color}`}
      >
        <span className="material-symbols-outlined text-4xl text-white">
          {icon}
        </span>
      </div>

      <h3 className="mt-8 text-[#333333] font-bold text-2xl">{title}</h3>

      <p className="mt-6 text-[#4F4F4F] font-normal text-base w-11/12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
        nulla consequat aliquet id quis turpis.
      </p>

      <button className={`${isHovered ? "bg-[#2D9CDB] text-white": "bg-[#E0E0E0] text-[#828282]"} mt-8 w-28 h-10 rounded-xl hover:bg-[#3a83ad] text-base font-medium`}>
        Get started
      </button>
    </article>
  );
};

export default CardService;
