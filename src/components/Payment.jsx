import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const  Payment = () => {
  const { product } = useSelector((state) => state.Products);
  const subTotal = product.reduce((acc, item) => acc + item.price, 0);
  const deliveryFee = 2;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-10 md:px-20 lg:px-40 py-10 bg-gray-50 ">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-center my-6 font-bold text-2xl">Delivery Information</h1>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="p-3 rounded-md border border-gray-300 focus:border-orange-500 outline-none"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-3 rounded-md border border-gray-300 focus:border-orange-500 outline-none"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="p-3 w-full rounded-md border border-gray-300 focus:border-orange-500 outline-none mt-4"
            type="email"
            placeholder="E-mail Address"
          />
          <input
            className="p-3 w-full rounded-md border border-gray-300 focus:border-orange-500 outline-none mt-4"
            type="text"
            placeholder="Street"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input
              className="p-3 rounded-md border border-gray-300 focus:border-orange-500 outline-none"
              type="text"
              placeholder="City"
            />
            <input
              className="p-3 rounded-md border border-gray-300 focus:border-orange-500 outline-none"
              type="text"
              placeholder="State/Governorate"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input
              className="p-3 rounded-md border border-gray-300 focus:border-orange-500 outline-none"
              type="text"
              placeholder="Zip Code"
            />
            <input
              className="p-3 rounded-md border border-gray-300 focus:border-orange-500 outline-none"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="p-3 w-full rounded-md border border-gray-300 focus:border-orange-500 outline-none mt-4"
            type="tel"
            placeholder="Phone"
          />
          <button className="bg-orange-500 text-white py-3 w-full rounded-full font-bold mt-6 hover:bg-orange-600">
            Submit
          </button>
        </form>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-center my-6 font-bold text-2xl">Order Summary</h1>
        <div className="flex justify-between text-lg mb-4">
          <p>Subtotal</p>
          <p>${subTotal.toFixed(2)}</p>
        </div>
        <hr />
        <div className="flex justify-between text-lg my-4">
          <p>Delivery Fee</p>
          <p>${deliveryFee.toFixed(2)}</p>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-bold my-4">
          <p>Total</p>
          <p>${(subTotal + deliveryFee).toFixed(2)}</p>
        </div>
        <Link to="/card">
          <button className="bg-orange-500 text-white py-3 w-full rounded-full font-bold hover:bg-orange-600">
            PROCEED TO Payment
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Payment;
