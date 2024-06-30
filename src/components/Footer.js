import React from "react";

const Footer = () => {
  return (
    <div className="w-screen hidden md:flex bg-gray-950 text-gray-300  justify-center gap-20 py-6">
      <ul className="flex flex-col gap-4">
        <li>Audio Description</li>
        <li>Invester Relations</li>
        <li>Legal Notices</li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li>Media Centre</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Footer;
