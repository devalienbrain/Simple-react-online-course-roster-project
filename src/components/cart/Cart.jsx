import React from "react";

const Cart = ({ courseDetails }) => {
  // console.log("Hello");
  console.log(courseDetails);


  
  return (
    <div>
      <div className="p-3 rounded-xl drop-shadow-lg bg-[#FFF] text-left">
        <p>
          Credit Hour Remaining <span> 20 </span> hr
        </p>
        <hr />
        <div>
          <p>Course Name</p>
          {courseDetails.map((detailCourse) => {
            return (
              <li className="list-decimal" key={detailCourse.title}>
                {detailCourse.title}
              </li>
            );
          })}
        </div>
        <hr />
        <span>
          {" "}
          Total Credit Hour : <span> 0 </span>{" "}
        </span>
        <hr />
        <span>
          {" "}
          Total Price : <span> 0 </span> USD{" "}
        </span>
      </div>
    </div>
  );
};

export default Cart;
