import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaStackOverflow, FaHackerrank } from "react-icons/fa";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiPhp,
  DiJava,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
  DiAndroid,
  DiFirebase,
} from "react-icons/di";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>CHOWDHURY MD. RABBY MAHMUD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SofenChowdhury"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/u/0/?hl=en#inbox"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgMail />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/chowdhury-rabby-mahamud-a02831180/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="socialicons">
              <a
                href="https://stackoverflow.com/users/5293336/sofen-chowdhury"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
                
              >
              <FaStackOverflow/>
              </a>
            </li>
            <li className="socialicons">
              <a
                style={{ color: "white" }}
                href="https://www.hackerrank.com/profile/sofen_aiub"
                rel="noreferrer"
              >
              <FaHackerrank />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>E-mail address: md.rabby.mahmud@gmail.com</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
