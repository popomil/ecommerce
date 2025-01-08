

import { FaBusinessTime } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { SlBasket } from 'react-icons/sl'
import { TbTruckDelivery } from 'react-icons/tb';
const itms = [
    { title: "Wide Product Range", logo: <SlBasket className='text-[80px]'/> },
    { title: "Fast Delivery", logo: <TbTruckDelivery className='text-[80px]'/> },
    { title: "Competitive Pricing", logo: <FaBusinessTime className='text-[80px]'/> },
    { title: "24/7 Customer Support", logo: <MdOutlineSupportAgent className='text-[80px]'/> },
    { title: "Secure Transactions", logo: <RiSecurePaymentFill className='text-[80px]'/> },
];
const WhyUs = () => {
  return (
    <section className="w-[90%] mx-auto pt-[100px] pb-[50px]">
      <h1 className="font-bold text-[40px] text-center mb-[50px]">Why Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
        {itms.map((item) => (
          <div
            key={item.title}
            className="bg-green-800 rounded-[20px] text-center p-[20px] text-white shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="mb-[20px] w-[70px] mx-auto">{item.logo}</div>
            <h1 className="font-bold text-[20px]">{item.title}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs
