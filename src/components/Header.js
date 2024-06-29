import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../constants";
import { USER_ICON } from "../constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import configSlice, { updateLanguage } from "../utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isProfileVisible, setIsProfileVisible] = useState(false);
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
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
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

  const handleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };
  return (
    <div
      className={`absolute px-8 py-2  from-black z-10 flex flex-col md:flex-row justify-between w-full ${
        location.pathname === "/browse" ? "bg-black" : "bg-gradient-to-b"
      } `}
    >
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-4 text-white justify-center">
          {showGptSearch && (
            <select
              className="py-2 px-2 rounded-lg bg-gray-700"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => {
                return (
                  <option key={language.identifer} value={language.identifer}>
                    {language.name}
                  </option>
                );
              })}

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
            onClick={handleProfile}
            className="block w-10 h-10 cursor-pointer"
            alt="user-icon"
            src={USER_ICON}
          />

          {isProfileVisible ? (
            <div
              onClick={handleSignOut}
              className="font-semibold absolute bg-purple-800 py-2 px-11 rounded-lg text-white top-36 md:top-20 cursor-pointer"
            >
              Sign Out
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Header;
