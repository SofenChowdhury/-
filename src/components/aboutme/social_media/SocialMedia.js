import React from "react";
import {
  // AiOutlineInstagram,
  // AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillCode,
} from "react-icons/ai";
import { FaHackerrank, FaStackOverflow } from "react-icons/fa";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { CgMail } from "react-icons/cg";
import { FaMobile } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          {/* <Col md={3}>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <CgMail />
              </Zoom>
            </a>
          </Col> */}
          <Col md={3}>
            <a
              href="https://stackoverflow.com/users/5293336/sofen-chowdhury"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaStackOverflow />
              </Zoom>
            </a>
          </Col>
          
          <Col md={3}>
            <a
              href="https://github.com/SofenChowdhury"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          {/* <Col md={3}>
            <a
              href="01749051692"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaMobile />
              </Zoom>
            </a>
          </Col> */}
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/chowdhury-rabby-mahamud-a02831180/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.hackerrank.com/profile/sofen_aiub"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaHackerrank />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
