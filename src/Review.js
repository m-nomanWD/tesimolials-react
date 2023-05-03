import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [counter, setCounter] = useState(0);

  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>testimonials</h2>
          <div className="underline"></div>
        </div>

        <div className="review">
          <div className="img-container">
            <img className="person-img" src={people[counter].image} alt="" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <div className="author">{people[counter].name}</div>
          <div className="job">{people[counter].job}</div>
          <div className="info">{people[counter].text}</div>

          <FaChevronLeft
            className="prev-btn"
            onClick={() => {
              if (counter === 0) {
                setCounter((counter += 3));
              } else {
                setCounter((counter = counter - 1));
              }
            }}
          />

          <FaChevronRight
            className="next-btn"
            onClick={() => {
              if (counter >= people.length - 1) {
                counter = 0;
                setCounter(0);
              } else {
                setCounter((counter = counter + 1));
              }
            }}
          />
          <div>
            <button
              className="random-btn"
              onClick={() => {
                counter = Math.floor(Math.random() * people.length);
                setCounter(counter);
              }}
            >
              Surprise me
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Review;
