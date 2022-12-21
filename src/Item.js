import React from "react";

const Item = ({title, price, img, desc}) => {
  return (
    <div className="item grid grid-cols-[225px_1fr] gap-x-5 max-w-2xl	mx-auto">
      <img src={img} alt={title} className="w-full h-40 object-cover border-4 border-[#c59d5f] rounded"/>
      <div className="info">
        <div className="header flex justify-between border-b-2 border-dotted border-[#617d98] font-bold tracking-widest ">
          <h3 className="mb-2	text-base capitalize text-[#102a42]" >{title}</h3>
          <h3 className="text-[#c59d5f]">$ {price}</h3>
        </div>
        <p className="pt-4 text-[#617d98]">{desc}</p>
      </div>
    </div>
  );
};

export default Item;
