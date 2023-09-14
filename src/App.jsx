import { useState } from "react";
import "./App.css";
import Courses from "./components/courses/Courses";
import Cart from "./components/cart/Cart";

function App() {
  const [courseDetails, setCourseDetails] = useState([]);

  const showDetailsOnCart = (course) => {
    const isClickedAlready = courseDetails.find(
      (targetCourse) => targetCourse.title == course.title
    );
    if (!isClickedAlready) {
      setCourseDetails([...courseDetails, course]);
    } else {
      return;
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl">Course Registration</h1>
      <div className="mt-10 flex flex-col md:flex-row text-left">
        <div className="flex-1">
          <Courses showDetailsOnCart={showDetailsOnCart}></Courses>
        </div>

        <div className="ml-4 w-80">
          <Cart courseDetails={courseDetails}></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
