
const data = [
    {image:"/src/assets/images/profile-1.jpg",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea iusto veniam minus perferendis necessitatibus"},
    {image:"/src/assets/images/profile-2.jpg",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea iusto veniam minus perferendis necessitatibus"},
    {image:"/src/assets/images/profile-3.jpg",title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea iusto veniam minus perferendis necessitatibus"},
]
const About = () => {
  return (
    <section>
    <div className="bg-neutral-200 py-[50px] pb-[100px]">
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] border-[1px] shadow-lg shadow-slate-700 px-[20px] md:px-[54px] py-[40px] md:py-[60px] mx-auto my-[50px] rounded-[10px]">
      <h1 className="font-bold py-[10px] text-[24px] md:text-[30px]">Our Story</h1>
      <p className="text-[16px] md:text-[18px]">
        In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.
      </p>
      <p className="text-[16px] md:text-[18px] mt-[20px]">
        Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.
      </p>
    </div>
    <div className="flex flex-col md:flex-row mx-auto my-[80px] w-full sm:w-[90%] lg:w-[950px] shadow-lg shadow-slate-700 rounded-[10px]">
      <img className="w-full md:w-[60%] h-auto rounded-t-[10px] md:rounded-l-[10px] md:rounded-tr-none" src="/src/assets/images/grow-better.webp" alt="" />
      <div className="w-full md:w-[50%] p-[20px] md:py-[20px] md:px-[30px]">
        <h1 className="font-bold text-[24px] md:text-[33px] py-[10px]">Our Mission: Helping Millions of Organizations Grow Better</h1>
        <p className="font-semibold text-[16px] md:text-[22px] py-[10px]">
          We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!
        </p>
      </div>
    </div>
  </div>
      <h1 className="text-center font-bold text-[45px] py-[50px] text-[#7f5119]">our founders</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[30px] py-[70px]">
  {
    data.map((item) => (
      <div
        key={item.image}
        className="relative mx-auto shadow-lg shadow-slate-700 rounded-[10px] mb-[30px] pt-[60px]"
      >
        <img
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full"
          src={item.image}
          alt=""
        />
        <p className="text-center font-bold text-[30px] py-[10px] text-[#7f5119] pt-[60px]">
          Lorem, ipsum.
        </p>
        <p className="text-[20px] px-[50px] py-[10px]">{item.title}</p>
      </div>
    ))
  }
</div>

    </section>
  )
}

export default About
