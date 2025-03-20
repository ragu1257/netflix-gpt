import { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="netflix-home"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/ES-en-20250310-TRIFECTA-perspective_3d6fec3b-833a-415d-ad70-312e72703cce_large.jpg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl pb-4">
          {isSignedIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            className="p-2 my-2 w-full"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full"
        />
        <button className="p-4 my-4 bg-red-500 w-full">
          {isSignedIn ? "Sign In" : "sign up"}
        </button>
        <p
          onClick={() => setIsSignedIn(!isSignedIn)}
          className="cursor-pointer"
        >
          {isSignedIn ? "Not registered? Sign Up now" : "Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login;
