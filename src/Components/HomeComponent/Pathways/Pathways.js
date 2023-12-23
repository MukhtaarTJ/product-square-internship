import React from "react";
import styles from "./Pathways.module.css";
import { Container, Row, Col } from "react-bootstrap";
import CareerModal from "../StartUpModal/StartUpModal";
import StartUpModal from "../StartUpModal/StartUpModal";

const Pathways = () => {
  return (
    <Container className={styles.container}>
      <Row >
        <Col lg={1}></Col>
        <Col lg={4} style={{marginRight:"140px"}}>
          <div className={styles.pathway_container}>
            <div className={styles.header_layout}>
              <p className={styles.header_text}>
                PROFESSIONAL PATHWAY
                <br /> <span style={{ fontWeight: "500" }}> Internships.</span>
                <br />{" "}
                <span className="fs-6 text-capitalize fw-medium pt-0">
                  ($20 Offered at $15 through Bistrapay)
                </span>
              </p>
            </div>
            <div className={styles.advert_layout}>
              <p className={styles.advert_text}>
                The 501k Professional pathway Internship Bootcamp is aimed at
                tech professionals looking to gain experience working with teams
              </p>
            </div>
            <div className={`${styles.advert_list_layout}`}>
              <ul>
                <li>3 weekly mentor-ship Live classes</li>
                <li>weekly project/portfolio development</li>
                <li>Real-time-teams & product-led projects</li>
                <li>Opportunities for real-time job placements</li>
                <li>Recomendation letter</li>
              </ul>
            </div>
            <div className={styles.learn_button_layout}>
              <button className={styles.learn_button}>Learn more</button>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.entrepreneurship_container}>
            <div className={styles.header_layout}>
              <p className={styles.header_text}>
                STARTUP/ <br />
                ENTREPENEURSHIP
                <br /> PROGRAM.
                <br />{" "}
                <p className="fs-6 text-capitalize fw-medium pt-0">
                  (<span style={{ textDecoration: "line-through" }}>$150</span>{" "}
                  offered At $130 Through Bistrapay)
                </p>
              </p>
            </div>
            <div className={styles.advert_layout}>
              <p className={styles.advert_text}>
                The 501k Internship startups/Entrepreneurs Bootcamp is aimed at
                innovative tech-stars looking to startup and launch products.
              </p>
            </div>
            <div className={`${styles.advert_list_entre_layout}`}>
              <ul>
                <li>Idea/innovation assistance(documentation)</li>
                <li>Software development guidance & training.</li>
                <li>Free MVP development for entrepreneurs.</li>
                <li>Free Legal, financial & product management expertise.</li>
                <li>Guided assistance through pitch and Launch phase.</li>
                <li>Technical team building & recruiting phase.</li>
                <li>
                  Open opportunities to partner with co-founders startups and
                  other startup leaders.
                </li>
              </ul>
            </div>
            <div className={styles.learn_button_layout}>
              <StartUpModal/>
            </div>
          </div>
        </Col>
        <Col lg={1}></Col>

      </Row>
    </Container>
  );
};

export default Pathways;
