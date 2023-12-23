import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Intro.module.css";
import Bistrapay from "../../../Assets/bistrapay-icon.png";
import FlutterWave from "../../../Assets/Flutterwave_Logo 1.png";
import MoniPoint from "../../../Assets/moniepoint 1.png";
import CareerModal from "../CareerModal/CareerModal";

const Intro = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <p className={styles.intro_head_text}>Sponsored by</p>
        <Col lg={12} className="d-flex align-items-center flex-row mx-auto">
          <div className="mx-auto d-flex justify-content-center align-items-center">
            <img src={Bistrapay} alt="" />
            <span className={styles.bistrapay_text}>Bistrapay</span>
          </div>
          <img src={FlutterWave} alt="" />
          <img src={MoniPoint} alt="" />
        </Col>
        <Row className={`mt-5 d-flex flex-wrap ${styles.advert_container}`}>
          <Col></Col>
          <Col lg={5} className="mt-5 ">
            <div className={styles.intro_text_layout}>
              <p className={styles.intro_text}>
                <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                  Over 1000{" "}
                </span>
                + interns apply monthly.{" "}
                <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                  80%
                </span>{" "}
                are employed upon completion, while{" "}
                <span style={{ fontWeight: "bolder", color: "#b57cd8" }}>
                  20%
                </span>{" "}
                launch their startups.{" "}
              </p>
            </div>
            <div className={styles.bottom_text_layout}>
              <p className={styles.bottom_text}>
                The 501k Internship Bootcamp provides a core technical platform
                for skill development, through concentrated internships, focused
                on product-led; user-first curriculum's and work-lab models.
              </p>
            </div>
            <div>
              <button className={styles.join_button}>JOIN NOW</button>
            </div>
          </Col>

          <Col lg={4}>
            <div className={styles.career_starter_card}>
              <div className={styles.header_layout}>
                <p className={styles.header_text}>
                  {" "}
                  CAREER-
                  <br /> STARTER
                  <br /> Internships. <br />
                  <span className="fs-6 text-uppercase fw-medium pt-0">
                    (free)
                  </span>
                </p>
              </div>
              <div className={styles.advert_layout}>
                <p className={styles.advert_text}>
                  The 501k Internship Bootcamp is aimed at tech starters looking
                  to gain experience working with teams and gaining practical
                  experience.
                </p>
              </div>
              <div className={`${styles.advert_list_layout}`}>
                <ul>
                  <li>1 real-time-team project</li>
                  <li>weekly mentor-ship (Once every week)</li>
                  <li>Certification of perticipation</li>
                  <li>Team Building & individual networking</li>
                </ul>
              </div>
              <div className={styles.learn_button_layout}>
                <CareerModal />
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Intro;
