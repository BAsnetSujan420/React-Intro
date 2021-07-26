import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onClick(index)} style={style}>
          {rating > index ? (
            <AiFillStar fontSize="16px" />
          ) : (
            <AiOutlineStar fontSize="16px" />
          )}
        </span>
      ))}
    </>
  );
};
export default Ratings;
