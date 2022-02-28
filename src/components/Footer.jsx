import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  return (
    <footer
      style={{ backgroundColor: "#000", color: "#fff" }}
      className="mt-auto py-5 text-center "
    >
      <div id="stars2"></div>
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          target="__blank"
          href="https://github.com/Shaheryar123"
          aria-label="My GitHub"
        >
          Shaheryar Haider
        </a>{" "}
        using <i className="fab fa-react" />
      </Container>
    </footer>
  );
};

export default Footer;
