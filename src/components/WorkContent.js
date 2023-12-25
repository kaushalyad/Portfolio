import React from "react";

const WorkContent = (props) => {
  return (
    <>
      <div className="flex px-6 justify-between pt-3">
        <div className="text-white text-2xl">
          {props.companyName}
          <inline className="text-slate-300">{props.require}</inline>
        </div>
        <div className="text-white text-xl">{props.time}</div>
      </div>
      <div className="flex justify-between">
        <div className="mt-2 text-slate-300 text-lg px-6 ">{props.content}</div>
        <div>
          <p className="text-slate-300 px-6 mt-2">~{props.from}</p>
        </div>
      </div>
    </>
  );
};

export default WorkContent;
