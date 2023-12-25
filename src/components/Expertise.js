import React from "react";

const Expertise = () => {
  return (
    <div>
      <div>
        <p className="comic text-white text-center text-7xl font-bold">
          My Project
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-24 gap-x-11 place-items-center my-20 mx-24  ">
        <div className="bg-slate-500 ">
          <div>
            <img src="/Portfolio/images/kaushal.jpeg" alt="project-1"></img>
          </div>
          <div className="mt-8">
            <div  className="my-3">
              <p className="font-bold text-2xl px-5 text-white comic">
                Weather Web Application
              </p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p className="px-5 text-white comic text-xl">
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
              <p className="text-white">Check it out</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-500">
          <div className="-mt-20">
            <img src="/Portfolio/images/kaushal.jpeg" alt="project-2"></img>
          </div>
          <div className="mt-8">
            <div className="my-3">
              <p className="font-bold text-2xl px-5 text-white comic">
                News Bulletin Web Application
              </p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p className="px-5 text-white comic text-xl">
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
              <p className="text-white font-mono">Check it out</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-500">
          <div>
            <img src="/Portfolio/images/kaushal.jpeg" alt="project-3"></img>
          </div>
          <div className="mt-8">
            <div className="my-3">
              <p className="font-bold text-3xl px-5 text-white comic">
                Personal Portfolio
              </p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p className="px-5 text-white comic text-xl">
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
              <p className="text-white">Check it out</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-500 col-start-2">
          <div>
            <img src="/Portfolio/images/kaushal.jpeg" alt="project-4"></img>
          </div>
          <div className="mt-8">
            <div className="my-3">
              <p className="font-bold text-3xl px-5 text-white comic">
                Spotify Clone
              </p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <p className="px-5 text-white comic text-xl">
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
              <p className="text-white">Check it out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
