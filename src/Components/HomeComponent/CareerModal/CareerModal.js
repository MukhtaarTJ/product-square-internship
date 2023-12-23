import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./CareerModal.module.css";
import { Col, Container, Row } from "react-bootstrap";
import CareerImg from "../../../Assets/career-start-img.png"

const CareerModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={styles.learn_button} onClick={handleShow}>
        Learn more
      </button>

      <Modal show={show} onHide={handleClose} size="xl">
        <div className={styles.modal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Container className="px-5">
              <Row>
                <Col className="px-5 " lg={6}>
                  <div className={styles.header_text_layout}>
                    <p className={styles.header_text}>
                      CAREER-STARTER{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {" "}
                        Internships (Free)
                      </span>
                    </p>
                  </div>
                  <div className={styles.intro_text_layout}>
                    <p className={styles.intro_text}>
                      The 501k Internship Bootcamp is aimed at tech starters
                      looking to gain experience working with teams and gaining
                      practical experience.
                    </p>
                  </div>
                  <div className={styles.list_layout}>
                  <ul>
                  <li>1 real-time-team project</li>
                  <li>weekly mentor-ship (Once every week)</li>
                  <li>Certification of perticipation</li>
                  <li>Team Building & individual networking</li>
                  <li>Discount to join the next level internship automatically</li>
                </ul>
                  </div>
                </Col>
                <Col className="px-5 " lg={6}>
                    <div className="">
                        <img src={CareerImg} alt="" className="mx-auto" />
                    </div>
                    <div className={styles.career_bar}></div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
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

export default CareerModal;
