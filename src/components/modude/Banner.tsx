import React from "react";

const Banner = () => {
  return (
    <div className="">
      <section className="relative bg-main-banner-mobile md:bg-main-banner min-h-screen bg-cover bg-center bg-no-repeat">
        <div
          className="h-screen w-full bg-transparent bg-g bg-gradient-to-r from-[#d5c4b591] to-[#ffffffba] flex items-center justify-center">
          <div>
            <h1 className="w-full text-[100px] lg:text-[120px] text-white tracking-widest text-center font-corinthia"> Mình là Snow Đây</h1>
            <p className="text-[20px] text-white">Thứ 4 | 27-12-2023 | 11:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
