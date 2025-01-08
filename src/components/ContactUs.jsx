import Lottie from "lottie-react";
import contact from "../../public/anmation/contact.json";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xdkkgjpw");
  return (
    <section className="flex justify-center items-center  py-[20px] relative">
      <h1 className="font-bold absolute top-[25px] text-[20px] md:text-[25px] text-center">
        Let's Get in Contact
      </h1>
      <div className="flex flex-col md:flex-row items-center w-[90%] md:w-[80%] lg:w-[60%] border-[2px] shadow-lg shadow-slate-700 rounded-[20px] gap-[20px] md:gap-[50px] py-[20px] px-[20px]">
        <div className="contact w-full md:w-[40%] flex justify-center">
          <Lottie
            className="contact-animation"
            style={{ height: "300px", maxWidth: "300px" }}
            animationData={contact}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-[10px] w-full md:w-[50%] pt-[20px]"
        >
          <label className="font-bold text-[16px] md:text-[18px]">Your Name</label>
          <input
            className="p-[8px] rounded-[10px] text-[14px] md:text-[17px] border border-gray-300"
            type="text"
            placeholder="Enter Your Name"
          />
          <label className="font-bold text-[16px] md:text-[18px]">Your Email</label>
          <input
            name="email"
            className="p-[8px] rounded-[10px] text-[14px] md:text-[17px] border border-gray-300"
            type="email"
            placeholder="Enter Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="font-bold text-[16px] md:text-[18px]">Message</label>
          <textarea
            name="message"
            className="p-[10px] text-[14px] md:text-[17px] rounded-[10px] border border-gray-300 resize-none"
            rows="3"
            placeholder="Enter Your Message"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-600 text-[16px] md:text-[20px] font-bold rounded-[40px] p-[10px] text-white mt-[10px]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
