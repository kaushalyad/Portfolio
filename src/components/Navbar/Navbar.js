import React, { useState, useEffect, createContext } from "react";
import { NavLink } from "react-router-dom";
import Home from "../Home";

export const context = createContext();
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
    <div
      id="home"
      className={`" image-blurred-edge smallMobile:w-[full] " ${
        mode === "dark"
          ? "bg-neutral-950 shadow-first bg-[url('../public/images/kaushalbg.jpeg')]"
          : "bg-[#fb7185] shadow-second  bg-[url('../public/images/kaushalbgtwook.jpeg')]"
      }`}
    >
      <div
        className={`" fixed top-0 z-50 h-20 flex items-center w-screen mobile:justify-center smallMobile:justify-center largeTablet:justify-between laptop:justify-between laptop:px-5 smallMobile:w-full mobile:w-full  " ${
          mode === "dark" ? "bg-slate-200" : "bg-amber-100"
        }`}
      >
        <div className="flex justify-center items-center w-screen largeTablet:justify-between largeTablet:gap-x-11 laptop:justify-between">
          <div className="flex gap-x-11 items-center tablet:gap-x-5 largeTablet:gap-x-4  mobile:hidden smallMobile:hidden    ">
            <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg tablet:px-0  ">
              <NavLink
                to=""
                onClick={() => {
                  highLight(0);
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                style={{ color: highLightColor[0] }}
                className="tablet:text-sm"
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
                className="tablet:text-sm"
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
                className="tablet:text-sm"
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
                className="tablet:text-sm"
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
                className="tablet:text-sm"
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
                className="tablet:text-sm"
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="flex items-center mobile:justify-center">
            <div className="mr-40 flex items-center mobile:mr-0 mobile:justify-center largeTablet:justify-between largeTablet:w-[100vw]">
              <NavLink to="/">
                <div className=" content font-serif text-violet-700 mobile:w-96 mobile:flex justify-between text-lg">
                  <div className="line mt-5 tablet:mt-5 ml-6 mobile:ml-0 largeTablet:ml-0">
                    <div className="pop-outin italic tablet:text-[10px] largeTablet:text-[15px] medium:text-[15px] smallMobile:text-[10px]">
                      Full Stack Developer
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0  h-40 text-center pt-[6.6rem] flex justify-between px-10 opacity-55">
        <div>
          <a
            href="https://drive.google.com/file/d/1jE6Q9NJM44KPuft1XwHBhZlBEYiJTXju/view?usp=sharing"
            className=" text-red-600 bold p-4 border rounded-md text-xl bg-white "
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
            <label for="checkbox" className="checkbox-label bg-violet-300">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <span className="ball"></span>
            </label>
          </div>
        </div>
      </div>
      <context.Provider value={mode}>
        <Home />
      </context.Provider>
    </div>
  );
};

export default Navbar;
