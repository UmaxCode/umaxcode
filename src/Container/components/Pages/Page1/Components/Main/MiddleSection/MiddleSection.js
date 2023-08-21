import React from "react";
import Card from "./Cards/Card";
import book from "../../../../../../assets/Pages/boook.svg";
import laptop from "../../../../../../assets/Pages/laptop.svg";
import girls from "../../../../../../assets/Pages/girls.svg";
import reats from "../../../../../../assets/Pages/react.svg";
import CourseCard from "./Cards/CourseCard";

const MiddleSection = () => {
  const cardDetails = [
    {
      title: "This is the website ",
      description:
        "looking for only the best resources to supplement your learning and present them in a logical order.",
      image: book,
    },
    {
      title: "This is the website ",
      description:
        " looking for only the best resources to supplement your learning and present them in a logical order.",
      image: laptop,
    },
    {
      title: "This is the website ",
      description:
        "looking for only the best resources to supplement your learning and present them in a logical order.",
      image: girls,
    },
  ];

  const cards = [
    {
      image: reats,
      title: "This is a card",
    },
    {
      image: reats,
      title: "This is a card",
    },
    {
      image: reats,
      title: "This is a card",
    },
    {
      image: reats,
      title: "This is a card",
    },
    {
      image: reats,
      title: "This is a card",
    },
    {
      image: reats,
      title: "This is a card",
    },
    {
      image: reats,
      title: "This is a card",
    },
    {
      image: reats,
      title: "This is a card",
    },
    {
      image: reats,
      title: "This is a card",
    },
  ];
  return (
    <div className="my-5">
      <div>
        <div className="text-center py-3 mb-3">
          <h3 className="display-6 fw-medium text-dark">How it works</h3>
          <div
            className="m-auto fs-4 pt-3 text-muted"
            style={{ width: "min(970px, 90%)" }}
          >
            <p>
              This is the website we wish we had when we were learning on our
              own. We scour the internet looking for only the best resources to
              supplement your learning and present them in a logical order.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 row-cols-1 row-cols-lg-3">
            {cardDetails.map((element, index) => {
              return (
                <div className="col">
                  <Card
                    title={element.title}
                    description={element.description}
                    key={index}
                    image={element.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-light my-5 py-5">
        <div
          className="display-6 fw-medium text-dark text-center m-auto"
          style={{ width: "min(600px, 90%)" }}
        >
          <p>Learn everything you need to know</p>
        </div>
        <div className="m-auto mt-5" style={{ width: "min(900px, 90%)" }}>
          <div className="row row-cols-1 row-cols-lg-3">
            {cards.map((element, index) => {
              return (
                <div className="col text-center">
                  <CourseCard image={element.image} title={element.title} />;
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="/" className="btn btn-outline-secondary py-2 px-3 fs-5">
            Explore Curriculum
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
