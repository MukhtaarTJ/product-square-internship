import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Mentorship.module.css";
import FirstMentor from "../../../Assets/first-mentor.png";
import SecondMentor from "../../../Assets/secod-mentor.png";
import ThirdMentor from "../../../Assets/third-mentor.png";
import { FaArrowRight } from "react-icons/fa6";


const Mentorship = () => {
  return (
    <Container className={styles.container}>
      <Col>
        <div className={styles.header_text_layout}>
          <p className={styles.top_text}>
            Looking for a Mentor{" "}
            <span style={{ color: "black", fontWeight: "500" }}>?</span>
          </p>
          <p className={styles.bottom_text}>
            <span style={{ color: "#B57CD8" }}> 501K </span>is the easiest
            platform to find a mentor. free for a lifetime of guided assistance
          </p>
        </div>
      </Col>
      <Row className="mx-3">
        <Col className="d-flex flex-row">
          <div style={{  }}>
            <img src={FirstMentor} alt="" />
            <p className={styles.mentor_text}>
              The 501k Startup/Entrepreneurs program really helped me master the
              art of team building and management. Today i have a successful
              startup.<br/> <span className="fw-bold"> Joe fox, Canada.</span>
            </p>
          </div>
        </Col>
        <Col>
          <div style={{ }}>
            <img src={SecondMentor} alt="" />
            <p className={styles.mentor_text}>
              The 501k Startup/Entrepreneurs program really helped me master the
              art of team building and management. Today i have a successful
              startup.<br/> <span className="fw-bold"> Joe fox, Canada.</span>
            </p>
          </div>
        </Col>
        <Col>
          <div style={{  }}>
            <img src={ThirdMentor} alt="" />
            <p className={styles.mentor_text}>
              The 501k Startup/Entrepreneurs program really helped me master the
              art of team building and management. Today i have a successful
              startup.<br/> <span className="fw-bold"> Joe fox, Canada.</span>
            </p>
          </div>
        </Col>
        <div className={styles.meet_mentor}>
          <span className={styles.meet_mentor_text}>meet a mentor <FaArrowRight/></span>
        </div>
      </Row>
    </Container>
  );
};

export default Mentorship;
