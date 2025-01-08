import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("User created successfully:", authUser);
        if (authUser) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error during signup:", error.message);
        alert(error.message);
      });
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <form className="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] bg-white shadow-lg shadow-slate-900 p-6 rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={signUp}
            className="bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </div>
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 font-bold">
            Sign in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
