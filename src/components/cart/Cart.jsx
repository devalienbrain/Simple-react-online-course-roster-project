import React from "react";

const Cart = ({ courseDetails }) => {
  // console.log("Hello");
  console.log(courseDetails);

  return (
    <div>
      <div className="p-3 rounded-xl drop-shadow-lg bg-[#FFF] text-left">
        <p className="text-[#2F80ED] font-semibold mb-2">
          Credit Hour Remaining <span> 20 </span> hr
        </p>
        <hr />
        <div className="mt-2 mb-3">
          <p className="font-bold mb-3">Course Name</p>
          {courseDetails.map((detailCourse) => {
            return (
              <li
                className="list-decimal text-xs font-normal mt-1 mb-1"
                key={detailCourse.title}
              >
                {detailCourse.title}
              </li>
            );
          })}
        </div>
        <hr />
        <span className="mt-5 mb-5">
          {" "}
          Total Credit Hour : <span> 0 </span>{" "}
        </span>
        <hr />
        <span className="mt-5 mb-5">
          {" "}
          Total Price : <span> 0 </span> USD{" "}
        </span>
      </div>
    </div>
  );
};

export default Cart;
