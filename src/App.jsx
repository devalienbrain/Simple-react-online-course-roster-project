import { useState } from "react";
import "./App.css";
import Courses from "./components/courses/Courses";

function App() {
  return (
    <>
      <h1 className="font-bold text-3xl">Course Registration</h1>
      <div className="mt-10 flex flex-col md:flex-row text-left">
        <div className="flex-1">
          <Courses></Courses>
        </div>

        <div className="ml-4 w-80">
          <div className="p-3 rounded-xl drop-shadow-lg bg-[#FFF] text-left">
            <p>Credit Hour Remaining 7 hr</p>
            <hr />
            <div>
              <p>Course Name</p>
            </div>
            <hr />
            <span> Total Credit Hour : 13 </span>
            <hr />
            <span> Total Price : 48000 USD </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
