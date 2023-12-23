import React from "react";
import styles from "./Footer.module.css";
import { Col, Container, Row } from "react-bootstrap";
import BackgroundLogo from "../../Assets/footer-image.png";
const Footer = () => {
  return (
    <Container className={styles.container} fluid>
      <div className={styles.form_container}>
        <div
          className={`border mx-auto p-4 ${styles.form_background}`}
          style={{ width: "fit-content" }}>
          <form action="" className="border">
            <input type="text" className={styles.input_layout} />
            <button className={styles.sub_btn}>subscribe</button>
          </form>
        </div>
      </div>
      <Row className={styles.footer_content}>
        <Col>
          <img src={BackgroundLogo} alt="" />
          <div className={styles.footer_content_items}>
            <div>
              <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div>
            <ul>
                <li>About us</li>
                <li>Our Internship</li>
                <li>News letter</li>
              </ul>
            </div>
            <div></div>
          </div>
          <div></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
