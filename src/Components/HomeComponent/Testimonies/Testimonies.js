import React from "react";
import styles from "./Testimonies.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Brendan from "../../../Assets/Brendan-starl.png";
import Orezi from "../../../Assets/orezi-brown.png";
import Deneal from "../../../Assets/deneal-martins.png"
const Testimonies = () => {
  return (
    <Container className={styles.container}>
      <Row className="mt-5">
        <Col lg={4} className="">
          <div className={`h-100  d-flex flex-column justify-content-between ${styles.cheers_text_layout}`}>
            <p className={styles.cheers_text}>
              Cheers ! to our amazing Interns who love what we do !
            </p>
            <div className=" w-100">
              <div
                className=" ml-auto d-block"
                style={{ width: "fit-content", marginLeft: "auto" }}>
                <img src={Brendan} alt="" />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <div>
            <div className=" w-100">
              <div
                className=" ml-auto d-block"
                style={{ width: "fit-content", marginLeft: "auto" }}>
                <img src={Brendan} alt="" />
              </div>
            </div>
            <div className=" w-100">
              <div
                className=" ml-auto d-block"
                style={{ width: "fit-content", }}>
                <img src={Orezi} alt="" />
              </div>
            </div>
            <div className=" w-100">
              <div
                className=" ml-auto d-block"
                style={{ width: "fit-content", marginLeft: "auto" }}>
                <img src={Deneal} alt="" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonies;
