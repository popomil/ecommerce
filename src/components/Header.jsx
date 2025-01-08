import { BiMenuAltLeft } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { product } = useSelector((state) => state.Products);
  const exitFoodIncard = useSelector((state) => state.Products.exitFoodInCard);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-4">
          <BiMenuAltLeft className="w-[35px] h-[35px] text-[#008ECC] bg-[#F3F9FB] border border-[#000000] rounded-[5px]" />
          <h1 className="text-[#008ECC] font-bold text-[25px] hover:scale-110 transition-transform duration-300">
            MegaMart
          </h1>
        </div>
        <ul className="hidden sm:flex gap-8 font-bold text-[18px]">
          <li>
            <Link className="hover:text-[#008ECC]" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#008ECC]" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#008ECC]" to="/contactus">
              Contact Us
            </Link>
          </li>
        </ul>
        <form className="hidden sm:flex items-center bg-[#F3F9FB] border border-[#008ECC] rounded-[50px] px-2 w-full max-w-[400px] ">
          <CiSearch className="text-[#008ECC] mx-2 text-[20px] " />
          <input
            type="search"
            placeholder="Search essentials, groceries, and more..."
            className="outline-none text-[14px] w-full bg-[#F3F9FB] px-2 py-[5px] "
          />
          <TfiMenuAlt className="text-[#008ECC] mx-2 text-[20px]" />
        </form>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <div className="flex items-center gap-2">
            <RxPerson className="text-[#008ECC] text-[24px]" />
            <Link to="/signup" className="text-[16px] font-bold">
              Sign Up
            </Link>
          </div>
          <h1>|</h1>
          <div className="flex items-center gap-2">
            <Link to="/card" className="relative">
              <TiShoppingCart className="text-[#008ECC] text-[29px]" />
              {exitFoodIncard && (
                <div className="w-[12px] h-[12px] rounded-full bg-blue-600 absolute top-[-5px] right-0" />
              )}
            </Link>
            <Link to="/card" className="text-[16px] font-bold">
              Cart-{product.length}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;