import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="p-2">
      <div className="text-center mb-4">
        <img src={image} height="155px" />
      </div>
      <div className=" text-center fs-4 text-muted">
        <h3 className="mb-4 fw-medium">{title}</h3>
        <p className="fs-5">{description}</p>
      </div>
    </div>
  );
};

export default Card;
