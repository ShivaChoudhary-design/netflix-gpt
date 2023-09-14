import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../constants";
import { USER_ICON } from "../constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import configSlice, { updateLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.

        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptOnClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(updateLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between w-full">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-4 text-white justify-center">
          {showGptSearch && (
            <select
              className="py-2 px-2 rounded-lg bg-gray-700"
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
            </select>
          )}

          <button
            onClick={handleGptOnClick}
            className="py-2 px-4 mx-2  bg-purple-800 rounded-lg"
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-10 h-10"
            alt="user-icon"
            src={USER_ICON}
          />

          <button onClick={handleSignOut} className="font-semibold">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
