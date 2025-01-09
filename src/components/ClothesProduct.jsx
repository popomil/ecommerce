import { useDispatch } from "react-redux"
import { addToProduct } from "./ProductSlice"
import { clothesProduct } from "./ProductAll"



const ClothesProduct = () => {
    const dispatch = useDispatch()
  return (
        <section>
          <h1 className="py-[20px] pl-[20px] font-bold text-[22px] sm:text-[30px] md:text-[30px] lg:text-[40px] relative underline decoration-blue-700 underline-offset-[15px] decoration-[4px]">Best Clothes</h1>
          <div className="overflow-hidden relative w-full group p-[50px]">
            <div className="flex gap-[30px] animate-marquee">
              {
                clothesProduct.map((item) => (
                  <div
                    key={item.title}
                    className="shadow-lg shadow-slate-300  w-[400px] flex-shrink-0 rounded-[20px] hover:scale-105 transition-transform duration-300"
                  >
                    <img className="h-[450px] w-full object-cover rounded-t-[20px]" src={item.img} alt={item.title} />
                    <h1 className="px-[20px] pt-[20px] font-bold text-[18px]">{item.name}</h1>
                    <p className="px-[20px] py-[10px] font-bold text-[16px]">{item.title}</p>
                    <div className="text-right pr-[20px] pb-[20px]">
                      <button onClick={() => dispatch(addToProduct(item))} className="bg-green-600 font-bold w-[150px] p-[10px] rounded-[20px]">Add To Card</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
  )
}

export default ClothesProduct
