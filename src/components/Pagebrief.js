import React from "react";

const Pagebrief = () => {
  return (
    <div className="h-[160px] text-center">
      <div className="mt-3 font-serif text-sm text-gray-500">MEN'S</div>
      <h1 className="font-serif text-4xl font-thin">Jackets & Coats</h1>
      <div className="w-[70%] m-auto">
      <p className="text-sm text-start text-gray-600 mt-2">
        Versatile and sophisticated, AJIO brings to you a wide range of coats
        and jackets for men. Be it printed, embroidered, ripped or distressed –
        we have everything. Browse through cool gilets, quilted bombers and
        winter jackets to keep your fashion game on fleek this cold season. Let
        the bad boy out to play with leather jackets or  <span className="text-blue-700 cursor-pointer">Read More</span>
      </p>
      </div>
    </div>
  );
};

export default Pagebrief;
