import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Home from "../Home";
const Navbar = () => {
  const [mode, setMode] = useState("dark");
  console.log(mode);
  const [highLightColor, setHighLightColor] = useState([
    "#f56942",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
  ]);
  useEffect(() => {
    const storedColor = window.sessionStorage.getItem("color");
    if (storedColor) {
      try {
        setHighLightColor(JSON.parse(storedColor));
      } catch (error) {
        setHighLightColor(["#f56942", "blue", "blue", "blue", "blue", "blue"]);
      }
    }
  }, []);

  const highLight = (index) => {
    const arr = ["blue", "blue", "blue", "blue", "blue", "blue"];
    arr[index] = "#f56942";
    setHighLightColor(arr);
    window.sessionStorage.setItem("color", JSON.stringify(arr));
  };
  return (
    <div id="home">
      <div className=" fixed top-0 z-50 bg-slate-200 h-20 flex items-center w-screen mobile:justify-center smallMobile:justify-center largeTablet:justify-between laptop:justify-between laptop:px-5 smallMobile:w-full mobile:w-full">
        <div className="flex justify-center items-center w-screen largeTablet:justify-between largeTablet:gap-x-11 laptop:justify-between">
          <div className="flex gap-x-11 items-center tablet:gap-x-5 largeTablet:gap-x-4  mobile:hidden smallMobile:hidden  ">
            <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg ">
              <NavLink
                to=""
                onClick={() => {
                  highLight(0);
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                style={{ color: highLightColor[0] }}
              >
                Home
              </NavLink>
            </div>
            <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
              <NavLink
                to="#education"
                onClick={() => {
                  highLight(1);
                  document
                    .getElementById("education")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                style={{ color: highLightColor[1] }}
              >
                Education
              </NavLink>
            </div>
            <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
              <NavLink
                to="#expertise"
                onClick={() => {
                  highLight(2);
                  document
                    .getElementById("expertise")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                style={{ color: highLightColor[2] }}
              >
                Expertise
              </NavLink>
            </div>
            <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
              <NavLink
                to="#work"
                onClick={() => {
                  highLight(3);
                  document
                    .getElementById("work")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                style={{ color: highLightColor[3] }}
              >
                Work
              </NavLink>
            </div>
            <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
              <NavLink
                to="#profile"
                onClick={() => {
                  highLight(4);
                  document
                    .getElementById("profile")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                style={{ color: highLightColor[4] }}
              >
                Profile
              </NavLink>
            </div>
            <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
              <NavLink
                to="#contact"
                onClick={() => {
                  highLight(5);
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                style={{ color: highLightColor[5] }}
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="flex items-center mobile:justify-center">
            <div className="mr-40 flex items-center mobile:mr-0 mobile:justify-center largeTablet:justify-between largeTablet:w-[100vw]">
              <NavLink to="/">
                <div className=" content font-serif text-violet-700 mobile:w-96 mobile:flex justify-between text-lg">
                  <div className="line mt-5 tablet:mt-5 ml-6 mobile:ml-0">
                    <div className="pop-outin italic tablet:text-[9px]">
                      Full Stack Developer
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 bg-black h-40 text-center pt-[6.6rem] flex justify-between px-10 opacity-55">
        <div>
          <a
            href="https://drive.google.com/file/d/1jE6Q9NJM44KPuft1XwHBhZlBEYiJTXju/view?usp=sharing"
            className="text-white bold p-4 border rounded-md text-xl bg-gray-700 hover:bg-slate-500 hover:text-gray-100 font-serif "
          >
            Resume
          </a>
        </div>
        <div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onClick={() => {
                mode === "dark" ? setMode("clear") : setMode("dark");
              }}
            />
            <label for="checkbox" className="checkbox-label">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <span className="ball"></span>
            </label>
          </div>
        </div>
      </div>
      </div>
      <div className=" bg-black h-40"></div>
      <Home />
    </div>
  );
};

export default Navbar;
