import React from "react";

const CourseCard = ({ image, title }) => {
  return (
    <div className="bg-white py-4 rounded" role="button">
      <img src={image} alt="" style={{ width: "144px", height: "160px" }} />
      <div>
        <p className="fs-4 fw-medium mt-3">{title}</p>
      </div>
    </div>
  );
};

export default CourseCard;
