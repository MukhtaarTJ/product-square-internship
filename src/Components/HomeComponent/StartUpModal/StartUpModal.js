import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./StartUpModal.module.css";
import { Container, Row, Col } from "react-bootstrap";
import StartupImg from "../../../Assets/StartupImg.png";

const StartUpModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={styles.learn_button}>
        Learn More
      </button>

      <Modal show={show} onHide={handleClose} size="xl">
        <div className={styles.modal}>
          <Modal.Header closeButton></Modal.Header>
          <Container className="px-5">
            <Row className="px-3">
              <Col>
                <div>
                  <p className={styles.intro_header}>
                    STARTUPS/ ENTREPRENEURSHIP{" "}
                    <span style={{ fontWeight: "500" }}> Programs.</span>
                  </p>
                  <p className={styles.intro_advert}>
                    ($150 Offered at $130 through Bistrapay)
                  </p>
                  <p className={styles.intro_text}>
                    The 501k Internship startups/ Entrepreneurs Bootcamp is
                    aimed at innovative tech-stars looking to startup and launch
                    products.
                  </p>
                </div>
              </Col>
              <Col>
                <img src={StartupImg} alt="" />
                <div className={styles.startup_bar}></div>
                
              </Col>
            </Row>
            <Row>
              <Col>
                <ul className={styles.startup_list}>
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
              </Col>
            </Row>
          </Container>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default StartUpModal;
