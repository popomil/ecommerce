import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Basket from './components/Basket'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Signup from './components/Signup'
import SignIn from './components/SignIn'
import {  Route, Routes, useLocation,  } from 'react-router-dom'
import { IoIosArrowUp } from 'react-icons/io'
import { useEffect, useState } from 'react'
import "../firebase";
import Payment from './components/Payment'


function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBTN(window.scrollY >= 4400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div id="up" className="mx-[12px] sm:mx-[20px] relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Basket />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/checkout" element={<Payment />} />
          </Routes>
        </div>
      </div>
      {!['/signup', '/signin'].includes(location.pathname) && <Footer />}
      <a
        style={{
          opacity: showScrollBTN ? 1 : 0,
          transition: "0.3s",
        }}
        href="#up"
        className="w-[45px] h-[45px] bg-blue-600 rounded-full flex justify-center items-center fixed bottom-[390px] right-[30px]"
      >
        <IoIosArrowUp className="text-[28px]" />
      </a>
    </div>
  );
}


export default App;

