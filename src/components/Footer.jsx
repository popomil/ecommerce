import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-wrap justify-between px-5 sm:px-[50px] md:px-[150px] pt-[30px] text-[17px] gap-y-[30px]">
        <div className="w-full sm:w-[45%] md:w-[30%]">
          <h1 className="text-[25px] font-bold text-orange-500">E-Commerce</h1>
          <p className="p-[8px] text-[12px] leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil
            nemo dicta incidunt, iste a.
          </p>
          <div className="flex p-[8px] gap-[10px]">
            <img src="/src/assets/images/facebook_icon.png" alt="Facebook" />
            <img src="/src/assets/images/twitter_icon.png" alt="Twitter" />
            <img src="/src/assets/images/linkedin_icon.png" alt="LinkedIn" />
          </div>
        </div>
        <div className="w-full sm:w-[45%] md:w-[30%]">
          <h1 className="p-[12px] text-[20px] font-bold">Company</h1>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-orange-500 transition duration-300">Home</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500 transition duration-300">About</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500 transition duration-300">Contact Us</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500 transition duration-300">Delivery</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500 transition duration-300">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-[45%] md:w-[30%]">
          <h1 className="p-[12px] text-[20px] font-bold">Get In Touch</h1>
          <p className="p-[8px]">+20-1097-927-518</p>
          <p className="p-[8px]">+20-1099-214-6-98</p>
        </div>
      </div>
      <hr className="max-w-[80%] mx-auto my-5 border-gray-600" />
      <h1 className="text-center py-[10px] font-bold text-[14px] sm:text-[16px]">
        Copyright 2024-2025 ® Ecommerce.com All Rights Reserved.
      </h1>
    </footer>
  );
};

export default Footer;
