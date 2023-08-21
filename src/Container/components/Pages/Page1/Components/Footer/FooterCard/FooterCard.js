import React from "react";

const FooterCard = ({ header, children }) => {
  return (
    <div>
      <p className="mb-3 fw-medium">{header}</p>
      <div>
        <ul className="list-unstyled">
          {children.map((element, index) => {
            return (
              <li key={index} className="text-muted mb-2">
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterCard;
