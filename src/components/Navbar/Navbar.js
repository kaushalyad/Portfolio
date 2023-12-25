import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Expertise from "../Expertise";
import Education from "../Education";
import Work from "../Work";
import Contact from "../Contact";
import Profile from "../Profile";
import Home from "../Home";
const Navbar = () => {
  return (
    <>
      <nav className=" bg-slate-100 h-20 flex items-center justify-between w-[100%]">
        <div className="flex gap-x-11 items-center ">
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink to="/education">Education</NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink to="/expertise">Expertise</NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink to="/work">Work</NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink to="/profile">Profile</NavLink>
          </div>
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink to="/contact">Contact</NavLink>
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
        <Route path="/" element={<Home />} />
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
