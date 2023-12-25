import React from "react";
import WordFlick from "./WordFlick";
import Work from "./Work";
import Profile from "./Profile";
import Expertise from "./Expertise";
import Education from "./Education";
import Contact from "./Contact";
const Home = () => {
  return (
    <div className=" mt-40">
      <div className="h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 z-10 my-auto">
        <p className="text-white text-center my-auto font-serif text-7xl font-bold">
          Kaushal Kumar Yadav
        </p>
      </div>
      <div className="h-11">
        <WordFlick />
      </div>
      <div className="mt-80">
        <Work />
      </div>
      <Profile />
      <Expertise />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;