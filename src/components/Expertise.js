import React from "react";

const Expertise = () => {
  return (
    <div>
      <div>
        <p className="comic text-white text-center text-7xl font-bold" id="expertise">
          My Project
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-24 gap-x-4 place-items-center my-20 mx-16  ">
        <div className=" bg-gray-700 rounded-md pb-20 mt-7 update">
          <div className="imgParent">
            <img
              src="/Portfolio/images/weatherPic.png"
              alt="project-1"
              className="imgIncrement incrementOne"
            ></img>
          </div>
          <div className="mt-8 slightly slightlyOne">
            <div className="my-3">
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
              <a href="https://github.com/kaushalyad/weather_using_api">
                <p className="text-white">Check it out</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 pt-7 rounded-md pb-20 update">
          <div className="imgParent">
            <img
              src="/Portfolio/images/newsPic.png"
              alt="project-2"
              className="imgIncrement incrementTwo"
            ></img>
          </div>
          <div className="mt-8 slightly slightlyTwo">
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
              <a href="https://github.com/kaushalyad/news_using_api">
                {" "}
                <p className="text-white font-mono">Check it out</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 rounded-md mt-7 pb-20 update">
          <div className="imgParent">
            <img
              src="/Portfolio/images/kaushal.png"
              alt="project-3"
              className="imgIncrement incrementThree"
            ></img>
          </div>
          <div className="mt-8 slightly slightlyThree">
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
              <a href="https://kaushalyad.github.io/Portfolio/">
                <p className="text-white">Check it out</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 col-start-2 rounded-md pb-20  update">
          <div className="imgParent">
            <img
              src="/Portfolio/images/spotifyPic.png"
              alt="project-4"
              className="imgIncrement incrementFour"
            ></img>
          </div>
          <div className="mt-8 slightly slightlyFour">
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
              <a href="google.com">
                {" "}
                <p className="text-white">Check it out</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
