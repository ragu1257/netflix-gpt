import { useState, useRef } from "react";

import Header from "./Header";
import { validateSignIn, validateSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BACKGROUND } from "../utils/constants";

function Login() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorSignIn, setErrorSignIn] = useState(null);
  const dispatch = useDispatch();
  const fullName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = () => {
    let result;
    if (isSignedIn) {
      result = validateSignIn(email.current.value, password.current.value);
      if (result !== null) {
        setErrorSignIn(result);
        return;
      }
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorSignIn(errorCode + " " + errorMessage);
        });
    } else {
      result = validateSignUp(
        fullName.current.value,
        email.current.value,
        password.current.value
      );
      if (result !== null) {
        setErrorSignIn(result);
        return;
      }
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorSignIn(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorSignIn(errorCode + " " + errorMessage);
        });
    }
    setErrorSignIn(result);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="netflix-home" src={NETFLIX_BACKGROUND} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0  bg-opacity-80"
      >
        <h1 className="font-bold text-3xl pb-4 text-white">
          {isSignedIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={fullName}
            type="text"
            className="p-2 my-2 w-full"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full"
        />
        <p className="text-red-700">{errorSignIn}</p>
        <button onClick={handleSubmit} className="p-4 my-4 bg-red-500 w-full">
          {isSignedIn ? "Sign In" : "sign up"}
        </button>
        <p
          onClick={() => setIsSignedIn(!isSignedIn)}
          className="cursor-pointer text-white"
        >
          {isSignedIn ? "Not registered? Sign Up now" : "Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login;
