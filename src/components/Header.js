import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" alt="logo" src={NETFLIX_LOGO} />
      {user && (
        <div className="flex items-center bg-gradient-to-r from-black">
          <button
            onClick={handleGptSearch}
            className="bg-purple-600 text-white font-bold p-2 rounded-xl"
          >
            {!gptView ? "GPT search" : "Home page"}
          </button>
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="usericon"
            className="w-12 h-12 mx-2"
          />
          <p className="px-3 text-white">Hello {user?.displayName}</p>
          <button onClick={handleSignOut} className="font-bold text-white">
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
