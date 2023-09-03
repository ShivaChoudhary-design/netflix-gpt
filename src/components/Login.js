import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BAC_IMG } from "../constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const changeToSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User Already Exists. Please Sign In");
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            "Sorry, we can't find an account with this email address. Please try again or create a new account."
          );
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={BAC_IMG} alt="bac-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-4/12 p-12 mx-auto my-24 right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
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
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="px-4 py-2 my-4 w-full rounded-sm bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-4 py-2 my-4 w-full rounded-sm bg-gray-600"
        />
        <p className="text-red-600 font-semibold text-lg ">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 my-6 mb-2 bg-red-600 rounded-md w-full"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <ul className="flex justify-between text-xs">
          <li>Remember me</li>
          <li>Need help?</li>
        </ul>
        {isSignIn ? (
          <p onClick={changeToSignUp} className="py-6 cursor-pointer">
            {" "}
            <span className="text-gray-600 ">New to Netflix?</span> Sign Up now.
          </p>
        ) : (
          <p onClick={changeToSignUp} className="py-6 cursor-pointer">
            {" "}
            <span className="text-gray-600 ">Already registered</span> Sign In
            now.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
