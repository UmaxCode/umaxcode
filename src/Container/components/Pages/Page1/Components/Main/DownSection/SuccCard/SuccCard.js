import React from "react";

const SuccCard = ({ image, link, description }) => {
  return (
    <div className="d-flex">
      <div className="py-2 px-3">
        <img
          src={image}
          width="50px"
          height="50px"
          className="rounded-circle"
        />
      </div>
      <div className="flex-grow-1 fs-5 text-muted">
        <a href="/" className="text-dark">
          {link}
        </a>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccCard;
