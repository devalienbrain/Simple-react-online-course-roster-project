import React from "react";

const Cart = ({ courseDetails }) => {
  // console.log("Hello");
  console.log(courseDetails);
  return (
    <div>
      <div className="p-3 rounded-xl drop-shadow-lg bg-[#FFF] text-left">
        <p>Credit Hour Remaining 7 hr</p>
        <hr />
        <div>
          <p>Course Name</p>
          {courseDetails.map((detailCourse) => {
            return <li key={detailCourse.title}>{detailCourse.title}</li>;
          })}
        </div>
        <hr />
        <span> Total Credit Hour : 13 </span>
        <hr />
        <span> Total Price : 48000 USD </span>
      </div>
    </div>
  );
};

export default Cart;
