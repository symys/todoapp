import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // eslint-disable-next-line no-console
        console.log(user)
        setEmail("");
        setPassword("");
        // eslint-disable-next-line no-alert
        alert("Sign up successfully!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
        // eslint-disable-next-line no-console
        console.log(errorMessage);
      });
  };

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // eslint-disable-next-line no-console
        console.log(user)
        setEmail("");
        setPassword("");
        navigate("/todo")
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
         // eslint-disable-next-line no-console
         console.log(errorMessage);
      });
  };

  return (
    <div className="flex flex-col w-full p-10 bg-gradient-to-tl from-green-300 to-purple-400 font-secular lg:gap-6 gap-4 items-center text-center justify-center h-screen">
      <div className=" lg:text-3xl text-xl text-white font-bold lg:mb-10 mb-4">
        Let's Start with Your Personal Account
      </div>

      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type={"email"}
          placeholder="Please enter email"
          className="lg:w-[30em] w-[14em] lg:p-4 p-2 ml-2 rounded-xl shadow-md flex flex-row  text-blue-800 text-opacity-80 cursor-pointer"
        />
      </div>

      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          placeholder="Please enter password"
          className="lg:w-[30em] w-[14em] lg:p-4 p-2 ml-2 rounded-xl shadow-md flex flex-row  text-blue-800 text-opacity-80 cursor-pointer"
        />
      </div>

      <div className="flex lg:flex-row flex-col">
        <button
          onClick={signup}
          className="text-sm text-white lg:mb-8 mb-2 rounded-xl box-border lg:p-3 p-2 transition-all duration-250 bg-[#ff8500] hover:bg-[#fca016] lg:text-xl lg:m-2 lg:w-40 w-28"
        >
          Create Account
        </button>
        <button
          onClick={signin}
          className="text-sm text-white lg:mb-8 rounded-xl box-border lg:p-3 p-2 transition-all duration-250 bg-[#ff8500] hover:bg-[#fca016] lg:text-xl lg:m-2 lg:w-40 w-28"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
