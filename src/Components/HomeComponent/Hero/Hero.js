import React from "react";
import styles from "./Hero.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ImageFive from "../../../Assets/5.png";
import ImageZero from "../../../Assets/0.png";
import ImageOne from "../../../Assets/1.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <Container fluid>
      <Row>
        <Row className={styles.hero_container}>
          <Col
            lg={7}
            className={`mx-auto mt-3 d-flex justify-content-center align-items-center ${styles.hero_content}`}>
            <div className="mt-5">
              <img src={ImageFive} alt="" />
              <img src={ImageZero} alt="" />
              <img src={ImageOne} alt="" />
              <span className={` ${styles.letter_k}`}>K</span>
              <div className={styles.hero_text_layout}>
                <h1 className={styles.hero_text}>GLOBAL INTERNSHIPS</h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-column ">
          <Col className={styles.advert_text_layout}>
            <p className={styles.advert_text}>
              The <span style={{ color: "#bb86db" }}>NEED</span> for online
              education <br />
              is continuously growing, but there's <br /> a need for{" "}
              <span style={{ color: "#bb86db" }}>
                {" "}
                practical, job-ready skills.{" "}
              </span>
              <br /> the 501k Global Internships, offer a variety
              <br /> of courses, with hands-on experience/projects
            </p>
          </Col>
          <Col className={styles.second_advert_layout}>
            <p className={styles.second_advert_text}>
              The 501k Internship Bootcamp aims to bridge the gap between
              traditional education and practical knowledge by providing
              product-led hands on trainings for our diverse group of
              participants, including students, self-learners, and aspiring
              entrepreneurs. This intensive work-lab program prepares them for
              the evolving job market.
            </p>
          </Col>
          <Col className={styles.apply_section}>
            <button className={styles.apply_button}>APPLY NOW</button>
            <span className={styles.mentor_text}>
              MEET A MENTOR
              <FaArrowRight />
            </span>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Hero;
