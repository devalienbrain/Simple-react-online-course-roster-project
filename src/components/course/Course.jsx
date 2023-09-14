import React from "react";
import dollar from "../../assets/dollar-sign.svg";
import book from "../../assets/book-frame.svg";

const Course = ({ course, showDetailsOnCart }) => {
  const { image, title, description, price, credit } = course;
  return (
    <div className="p-3 rounded-xl drop-shadow-lg bg-[#FFF] w-72">
      <img src={image} alt="" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-xs font-normal">{description}</p>
      <div className="flex gap-2 text-base font-normal">
        <img className="w-5" src={dollar} alt="" />
        <span>Price : {price}</span>
        <img className="ml-2 w-5" src={book} alt="" />
        <span>Credit : {credit}hr</span>
      </div>
      <button
        onClick={() => showDetailsOnCart(course)}
        className="bg-[#2F80ED] text-white rounded-md w-full text-center p-2"
      >
        Select
      </button>
    </div>
  );
};

export default Course;
