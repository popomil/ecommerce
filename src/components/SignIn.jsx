import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <form className="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <div className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 border rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full py-3 px-4 border rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={signIn}
            className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </div>
        <div className="mt-6 text-center text-sm font-semibold">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
        <hr className="my-6" />
        <div className="text-center text-sm font-semibold">
          Forgot Password?{" "}
          <Link to="/forgetpassword" className="text-blue-600 hover:underline">
            Reset Password
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
