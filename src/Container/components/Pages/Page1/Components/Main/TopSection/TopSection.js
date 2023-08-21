import React from "react";

import styles from "./TopSection.module.css";
import image from "../../../../../../assets/Pages/bigImage.svg";

const TopSection = () => {
  return (
    <div className="my-3">
      <div className="container px-3 pt-3 pt-lg-5 text-center">
        <div className="display-2 fw-medium">
          <p className={styles.bigText}>
            <span className={styles.span}>Your </span>
            Career in Web Development
            <span className={styles.span}> Starts Here</span>
          </p>
        </div>
        <p
          className="my-4 fs-4 m-auto text-muted"
          style={{ width: "min(600px, 90%)" }}
        >
          Our full stack curriculum is free and supported by a passionate open
          source community
        </p>
        <div className="py-4">
          <a href="/" className="btn btn-outline-secondary fs-4 px-3 py-2">
            View Full Curriculum
          </a>
        </div>
      </div>
      <div>
        <img src={image} alt="Odin castle" width="100%" height="auto" />
      </div>
      e
    </div>
  );
};

export default TopSection;
