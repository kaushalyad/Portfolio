import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Expertise from "../Expertise";
import Education from "../Education";
import Work from "../Work";
import Contact from "../Contact";
import Profile from "../Profile";
import Home from "../Home";
const Navbar = () => {
  const [highLightColor, setHighLightColor] = useState([
    "#fc0388",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
  ]);
  const highLight = (index) => {
    const arr = ["blue", "blue", "blue", "blue", "blue", "blue"];
    arr[index] = "#fc0388";
    setHighLightColor(arr);
  };
  return (
    <>
      <nav className=" bg-slate-200 h-20 flex items-center justify-between w-[100%]">
        <div className="flex gap-x-11 items-center ">
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink
              to=""
              onClick={() => {
                highLight(0);
              }}
              style={{ color: highLightColor[0] }}
            >
              Home
            </NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink
              to="/education"
              onClick={() => {
                highLight(1);
              }}
              style={{ color: highLightColor[1] }}
            >
              Education
            </NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink
              to="/expertise"
              onClick={() => {
                highLight(2);
              }}
              style={{ color: highLightColor[2] }}
            >
              Expertise
            </NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink
              to="/work"
              onClick={() => {
                highLight(3);
              }}
              style={{ color: highLightColor[3] }}
            >
              Work
            </NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink
              to="/profile"
              onClick={() => {
                highLight(4);
              }}
              style={{ color: highLightColor[4] }}
            >
              Profile
            </NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink
              to="/contact"
              on={() => {
                highLight(5);
              }}
              style={{ color: highLightColor[5] }}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-40 flex items-center">
            <NavLink to="/">
              <div className=" content font-serif text-violet-700">
                <div className="line mt-5">
                  <div className="pop-outin italic">Full Stack Developer</div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
};

export default Navbar;
