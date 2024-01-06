import React, { useContext } from "react";
import WordFlick from "./WordFlick";
import Work from "./Work";
import Profile from "./Profile";
import Expertise from "./Expertise";
import Education from "./Education";
import Contact from "./Contact";
import { context } from "./Navbar/Navbar";
const Home = () => {
  const mode = useContext(context);
  return (
    <div>
      <div className="h-28 bg-gradient-to-r from-violet-500 to-fuchsia-500 z-10 smallMobile:w-full ">
        <p
          className={`=" text-center my-auto font-serif text-7xl font-bold tablet:text-5xl pt-3 largeTablet:pb-5 mobile:text-4xl mobile:pt-4 smallMobile:text-4xl pt-4 " ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Kaushal Kumar Yadav
        </p>
      </div>
      <div className="h-11 mobile:text-[15px]">
        <WordFlick />
      </div>
      <div className="mt-80">
        <Work id="work" />
      </div>
      <Profile />
      <Expertise />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
