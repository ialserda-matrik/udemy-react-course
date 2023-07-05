import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
// import App from "./App";
import StarRating from "./components/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={10}
        color="blue"
        defaultRating={3}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      defaultRating={3}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      size={24}
      color="#fcc419"
      className="test"
    />
    <Test />
  </React.StrictMode>
);

function Star() {}

