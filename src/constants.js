export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON =
  "https://occ-0-6436-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTACKVCVgthvD-eh6ri8ySnqcc7W0t6hyFMiFPrJHXj7MQT6DAYiDE1hfngLDRl2_usDVGGh-vrclPzuYkUYgRBdx3p6anU.png?r=93c";

export const BAC_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const ING_API_URL = "https://image.tmdb.org/t/p/w500/";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;




export const SUPPORTED_LANGUAGES = [
  { identifer: "en", name: "English" },
  { identifer: "hindi", name: "Hindi" },
  { identifer: "es", name: "Spanish" },
];