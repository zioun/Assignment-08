import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 py-[85px] rounded-[24px]">
      <div className="hero-content flex-col lg:flex-row-reverse px-[120px]">
        <img
          src="https://i.ibb.co/PmTPNmR/pngwing-1.png"
        />
        <div>
          <h1 className="text-5xl font-bold pd leading-[70px] max-w-[526px]">Books to freshen up your bookshelf</h1>
          <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white ws mt-[40px]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;