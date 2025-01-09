import { MdOutlineFavoriteBorder } from "react-icons/md";
// import { pro } from "../../data/ProductAll";
import { useDispatch } from "react-redux";
import { addToProduct } from "./ProductSlice";
import { products } from "./ProductAll";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <section className="relative">
            <img
        src="/public/images/home.jpg"
        alt="Background"
        className="w-full  object-cover"
      />
            <h1 className="py-[30px] pl-[20px] font-bold text-[22px] sm:text-[30px] md:text-[30px] lg:text-[40px] relative underline decoration-blue-700 underline-offset-[15px] decoration-[4px]">
  Best Products
</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[40px] justify-center items-center">
        {products.map((item) => (
          <div
            key={item.id}
            className="border-[1px] relative rounded-[10px] text-[20px] shadow-lg shadow-slate-300"
          >
            <div className="absolute right-[0] top-0 bg-[#008ECC] w-[50px] h-[60px] text-[18px] font-semibold text-center rounded-[7px]">
              <p>{item.discount}%</p>
              <p>OFF</p>
            </div>
            <img
              className="bg-[#F5F5F5] h-[200px] w-full object-contain p-[10px]"
              src={item.img}
              alt={item.name}
            />
            <div className="font-semibold text-[16px] p-[10px]">
              <p>{item.name}</p>
              <div className="flex justify-between items-center">
                <p>Price: {item.price}$</p>
                <MdOutlineFavoriteBorder className="fill-red-700" />
              </div>
              <div className="text-center py-[10px]">
                <button
                  onClick={() => dispatch(addToProduct(item))}
                  className="bg-[#008ECC] rounded-[25px] w-[80%] font-bold text-white p-[5px]"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div>
              <hr className="m-[5px]" />
              <p className="line-through text-red-500 text-[16px] font-semibold m-[10px]">
                Old Price - {item.old_price}$
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hover:bg-[#131921] hover:text-white font-bold rounded-[20px] shadow-lg shadow-slate-300 p-[20px] mt-[40px]">
        <h1 className="pb-[20px] text-[15px]">
          SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android
          Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen,
          Long Battery Life, Fast 4nm Processor, US Version, Phantom Black
        </h1>
        <p>Price: $142</p>
        <img
          className="w-[180px] mx-auto my-[20px]"
          src="/src/assets/images/phone.png"
          alt="Samsung Galaxy S22 Ultra"
        />
        <div className="text-center">
          <button className="bg-[#008ECC] rounded-[25px] w-[300px] font-bold text-[18px] text-white py-[5px]">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
