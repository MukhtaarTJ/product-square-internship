import React from "react";
import styles from "./MainNav.module.css";
import { Nav, Navbar, Container,  } from "react-bootstrap";
import NavImg from "../../Assets/image 2.png"

const MainNav = () => {
  return (
    <>
      <Navbar expand="lg"   className={styles.navbar}>
        <Container  className="">
          <Navbar.Brand className={styles.navbrand}>
            <img src={NavImg} alt="" className={styles.nav_img}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"#fff"}} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll></Nav>
            <Nav className={styles.nav_links}>
              <Nav.Link className={styles.link}>Home</Nav.Link>
              <Nav.Link className={styles.link}>About Us</Nav.Link>
              <Nav.Link className={styles.link}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
