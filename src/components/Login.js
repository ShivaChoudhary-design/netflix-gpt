import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const changeToSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bac-img"
        />
      </div>
      <form className="absolute bg-black w-4/12 p-12 mx-auto my-24 right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 my-4 w-full rounded-sm bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="px-4 py-2 my-4 w-full rounded-sm bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 my-4 w-full rounded-sm bg-gray-600"
        />
        <button className="px-4 py-2 my-6 mb-2 bg-red-600 rounded-md w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <ul className="flex justify-between text-xs">
          <li>Remember me</li>
          <li>Need help?</li>
        </ul>
        <p onClick={changeToSignUp} className="py-6 cursor-pointer">
          {" "}
          <span className="text-gray-600 ">New to Netflix?</span> Sign up now.
        </p>
      </form>
    </div>
  );
};

export default Login;
