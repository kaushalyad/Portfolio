import React from "react";
import { useContext } from "react";
import { context } from "./Navbar/Navbar";
const Expertise = () => {
  const mode = useContext(context);
  return (
    <div id="expertise">
      <div className="pt-24">
        <p
          className={`" comic  text-center text-7xl font-bold smallMobile:text-5xl " ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          My Project
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-24 gap-x-4 place-items-center my-20 mx-16 mobile:grid-cols-1 smallMobile:grid-cols-1">
        <div
          className={`" rounded-md pb-16 update " ${
            mode === "dark" ? "bg-slate-700" : "bg-gray-400"
          }`}
        >
          <div className="imgParent">
            <img
              src="/Portfolio/images/weatherPic.png"
              alt="project-1"
              className="imgIncrement incrementOne"
            ></img>
          </div>
          <div className="mt-8 slightly slightlyOne">
            <div className="my-3">
              <p
                className={` " font-bold text-2xl px-5 comic " ${
                  mode === "dark" ? "text-white" : "text-slate-950"
                } `}
              >
                Weather Web Application
              </p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p
                    className={` " px-5  comic text-xl "  ${
                      mode === "dark" ? "text-white" : "text-slate-950"
                    } `}
                  >
                    Web Development
                  </p>
                </div>
                <div>
                  <img
                    src="/Portfolio/logos/downArrow.svg "
                    alt="down-arrow"
                    className="w-5"
                  ></img>
                </div>
              </div>
            </div>
            <div className="bg-yellow-600 p-3 cursor-pointer hover:bg-orange-500 mx-4 my-5 rounded-lg">
              <a href="https://github.com/kaushalyad/weather_using_api">
                <p
                  className={`${
                    mode === "dark" ? " text-white " : " text-slate-950 "
                  } `}
                >
                  Check it out
                </p>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`" rounded-md pb-16 update pt-7 " ${
            mode === "dark" ? "bg-slate-700" : "bg-gray-400"
          }`}
        >
          <div className="imgParent">
            <img
              src="/Portfolio/images/newsPic.png"
              alt="project-2"
              className="imgIncrement incrementTwo"
            ></img>
          </div>
          <div className="mt-8 slightly slightlyTwo">
            <div className="my-3">
              <p
                className={` " font-bold text-2xl px-5 comic " ${
                  mode === "dark" ? "text-white" : "text-slate-950"
                } `}
              >
                News Bulletin Web Application
              </p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p
                    className={` " px-5  comic text-xl "  ${
                      mode === "dark" ? "text-white" : "text-slate-950"
                    } `}
                  >
                    Web Development
                  </p>
                </div>
                <div>
                  <img
                    src="/Portfolio/logos/downArrow.svg "
                    alt="down-arrow"
                    className="w-5"
                  ></img>
                </div>
              </div>
            </div>
            <div className="bg-yellow-600 p-3 cursor-pointer hover:bg-orange-500 mx-4 my-5 rounded-lg">
              <a href="https://github.com/kaushalyad/news_using_api">
                {" "}
                <p
                  className={`${
                    mode === "dark" ? " text-white " : " text-slate-950 "
                  } `}
                >
                  Check it out
                </p>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`" rounded-md pb-16 update " ${
            mode === "dark" ? "bg-slate-700" : "bg-gray-400"
          }`}
        >
          <div className="imgParent">
            <img
              src="/Portfolio/images/kaushal.png"
              alt="project-3"
              className="imgIncrement incrementThree"
            ></img>
          </div>
          <div className="mt-8 slightly slightlyThree">
            <div className="my-3">
              <p
                className={` " font-bold text-2xl px-5 comic " ${
                  mode === "dark" ? "text-white" : "text-slate-950"
                } `}
              >
                Personal Portfolio
              </p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p
                    className={` " px-5  comic text-xl "  ${
                      mode === "dark" ? "text-white" : "text-slate-950"
                    } `}
                  >
                    Web Development
                  </p>
                </div>
                <div>
                  <img
                    src="/Portfolio/logos/downArrow.svg "
                    alt="down-arrow"
                    className="w-5"
                  ></img>
                </div>
              </div>{" "}
            </div>
            <div className="bg-yellow-600 p-3 cursor-pointer hover:bg-orange-500 mx-4 my-5 rounded-lg">
              <a href="https://kaushalyad.github.io/Portfolio/">
                <p
                  className={`${
                    mode === "dark" ? " text-white " : " text-slate-950 "
                  } `}
                >
                  Check it out
                </p>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`" col-start-2 rounded-md pb-16  update mobile:col-start-1 smallMobile:col-start-1 " ${
            mode === "dark" ? "bg-slate-700" : "bg-gray-400"
          }`}
        >
          <div className="imgParent">
            <img
              src="/Portfolio/images/task-management-app-main.png"
              alt="project-4"
              className="imgIncrement incrementFour"
            ></img>
          </div>
          <div className="mt-8 slightly slightlyFour">
            <div className="my-3">
              <p
                className={` " font-bold text-2xl px-5  comic  " ${
                  mode === "dark" ? "text-white" : "text-slate-950"
                } `}
              >
                Task Management Application
              </p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p
                    className={` " px-5  comic text-xl "  ${
                      mode === "dark" ? "text-white" : "text-slate-950"
                    } `}
                  >
                    Web Development
                  </p>
                </div>
                <div>
                  <img
                    src="/Portfolio/logos/downArrow.svg "
                    alt="down-arrow"
                    className="w-5"
                  ></img>
                </div>
              </div>{" "}
            </div>
            <div className="bg-yellow-600 p-3 cursor-pointer hover:bg-orange-500 mx-4 my-5 rounded-lg">
              <a href="https://kaushalyad.github.io/task-management-app/">
                <p
                  className={`${
                    mode === "dark" ? " text-white " : " text-slate-950 "
                  } `}
                >
                  Check it out
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
