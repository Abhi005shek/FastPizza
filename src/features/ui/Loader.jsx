import React from "react";

const Loader = () => {
  return (
    <div className="absolute bg-slate-50/20 backdrop-blur-sm flex inset-0 items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
