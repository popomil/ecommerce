import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteToCard,
  incrementQuantity,
} from "./ProductSlice";
import { Link } from "react-router-dom";

const Card = () => {
  const { product } = useSelector((state) => state.Products);
  console.log(product);
  const dispatch = useDispatch();
  const TotalPrice = product.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="relative p-4">
      <div className="flex flex-wrap md:flex-nowrap font-semibold text-[20px] mb-[50px] gap-4">
        <img
          className="w-full md:w-[70%] max-w-full rounded-lg"
          src="/src/assets/images/checkoutAd.jpg"
          alt=""
        />
        <div className="border-[3px] w-full md:w-[30%] p-[10px] py-[12px] text-[16px]">
          <h1 className="py-[10px]">
            SubTotal ({product.length} items): {TotalPrice}$
          </h1>
          <p>
            <input type="checkbox" className="mr-2" />
            This order contains a gift
          </p>
          <div className="w-full text-center">
            <Link to="/checkout">
              <button className="bg-[#7f5119] rounded-[25px] mt-[12px] text-[15px] p-[14px] text-center font-bold text-white py-[5px] w-full">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      {product.length > 0 && (
        <h1 className="font-bold text-[22px] border-b-[3px]">
          Your Shopping Basket
        </h1>
      )}
      {product.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap md:flex-nowrap border-[1px] relative rounded-[10px] text-[20px] my-[10px] shadow-lg shadow-slate-100"
        >
          <img
            className="h-[150px] w-full md:w-[300px] pr-[60px] pl-[60px] mt-[40px] object-contain"
            src={item.img}
            alt={item.name}
          />
          <div className="pt-[40px] flex-1">
            <div className="font-semibold text-[16px] ml-[13px] pb-[5px]">
              <p className="w-full">{item.name}</p>
              <div className="flex justify-between items-center">
                <p>Price: {item.price}$</p>
              </div>
              <div>
                
                <p className="line-through text-red-500 text-[16px] font-semibold my-[10px]">
                  Old_Price-{item.old_price}$
                </p>
                <div className="flex py-[10px] text-[20px] items-center gap-4">
                  <span>Count:</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="w-[40px] h-[40px] bg-[#7f5119] rounded-full mx-[20px]"
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="w-[40px] h-[40px] bg-[#7f5119] rounded-full mx-[20px]"
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => dispatch(deleteToCard(item.id))}
                  className="bg-[#008ECC] w-[200px] rounded-[25px] text-center font-bold text-white py-[5px] my-[10px]"
                >
                  Delete To Card
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
