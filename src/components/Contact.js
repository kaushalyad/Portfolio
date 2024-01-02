import React from "react";
const Contact = () => {
  return (
    <div
      className="text-white text-center mt-10 bg-slate-700 smallMobile:px-3"
      id="contact"
    >
      <div>
        <p className="comic text-5xl text-center font-bold  smallMobile:text-4xl">
          Available for select opportunities
        </p>
      </div>
      <div className="mt-5 ">
        <p className="text-xl text-center font-bold smallMobile:text-lg">
          Have an exciting project you need help with? Send me an
        </p>
        <p className="text-xl text-center font-bold smallMobile:text-lg">
          email or contact me via instant message!
        </p>
      </div>
      <div className="mt-3">
        <div className="text-3xl font-bold smallMobile:text-2xl">
          <a
            href="mailto:kaushalsoftwareengineer@gmail.com?subject = Feedback&body = Message"
            className="hover:text-slate-300"
          >
            kaushalsoftwareengineer@gmail.com
          </a>
        </div>
        <div className="text-lg mt-3">
          <a
            href="https://www.linkedin.com/in/kaushal-kumar-yadav-ba2ba6192/"
            className="hover:text-slate-400"
          >
            LinkedIn
          </a>
        </div>
        <div className=" text-lg">
          <a
            href="https://github.com/kaushalyad?tab=repositories"
            className="hover:text-slate-400"
          >
            Github
          </a>
        </div>
        <div className="text-lg">
          <a
            href="https://twitter.com/Kaushal86924849"
            className="hover:text-slate-400"
          >
            Twitter
          </a>
        </div>
        <div className=" text-lg">
          <a
            href="https://www.instagram.com/kaushakrlyadav/"
            className=" hover:text-slate-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
