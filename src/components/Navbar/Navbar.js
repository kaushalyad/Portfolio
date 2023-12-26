import React, { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";
import Home from "../Home";
const Navbar = () => {
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
      <nav className=" fixed top-0 z-50 bg-slate-200 h-20 flex items-center justify-between w-[100%]">
        <div className="flex gap-x-11 items-center ">
          <div className="cursor-pointer py-1 px-2 text-blue-600 hover:underline font-semibold text-lg">
            <NavLink
              to=""
              onClick={() => {
                highLight(0);
                document.getElementById("home").scrollIntoView({ behavior: "smooth" });
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
                document.getElementById("education").scrollIntoView({ behavior: "smooth" });
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
                document.getElementById("expertise").scrollIntoView({ behavior: "smooth" });
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
                document.getElementById("work").scrollIntoView({ behavior: "smooth" });

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
                document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
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
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

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
      <div  className=" bg-black h-40" ></div>
      <Home />
    </div>
  );
};

export default Navbar;
