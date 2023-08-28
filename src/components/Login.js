import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Movie-logo"
        />
      </div>
      <form className="w-[27%] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-semibold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-600 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-600 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-1 w-full bg-gray-600 rounded-md"
        />
        <button className="p-3 my-8 w-full bg-red-700 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <p className="py-2 mx-1">
            New to Netflix?{" "}
            <span
              className="hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {" "}
              Sign up now
            </span>
          </p>
        )}
        {!isSignInForm && (
          <p className="py-2 mx-1">
            Already Registered?{" "}
            <span
              className="hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {" "}
              Sign In Now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
