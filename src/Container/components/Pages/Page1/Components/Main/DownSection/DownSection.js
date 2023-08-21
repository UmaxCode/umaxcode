import React from "react";
import SuccCard from "./SuccCard/SuccCard";
import image from "../../../../../../assets/Pages/profile.jpg";
import style from "./DownSection.module.css";

const DownSection = () => {
  const cards = [
    {
      link: "my link",
      description:
        "looking for only the best resources to supplement your learning and present them in a logical order. looking for only the best resources to supplement your learning and present them in a logical order.looking for only the best resources to supplement your learning and present them in a logical order.",
    },
    {
      link: "my link",
      description:
        "looking for only the best resources to supplement your learning and present them in a logical order. looking for only the best resources to supplement your learning and present them in a logical order.looking for only the best resources to supplement your learning and present them in a logical order.",
    },
    {
      link: "my link",
      description:
        "looking for only the best resources to supplement your learning and present them in a logical order. looking for only the best resources to supplement your learning and present them in a logical order.looking for only the best resources to supplement your learning and present them in a logical order.",
    },
    {
      link: "my link",
      description:
        "looking for only the best resources to supplement your learning and present them in a logical order. looking for only the best resources to supplement your learning and present them in a logical order.looking for only the best resources to supplement your learning and present them in a logical order.",
    },
  ];
  return (
    <div className={style.DownSection}>
      <div className="display-6 fw-medium text-dark text-center mb-5">
        <p>Success Stories</p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-3 ">
          {cards.map((element, index) => {
            return (
              <div className="col">
                <SuccCard
                  image={image}
                  link={element.link}
                  description={element.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-4 text-center">
        <a href="" className="text-dark fs-5 fw-medium">
          Read more success stories
        </a>
      </div>
    </div>
  );
};

export default DownSection;
