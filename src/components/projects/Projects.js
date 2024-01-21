import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Live Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    // backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    FairMart e-Commerce
                    </h5>
                    <img src={"https://fairgroup.s3.ap-southeast-1.amazonaws.com/public/assets/front/images/fairmartLogo.png"} alt={"https://fairgroup.s3.ap-southeast-1.amazonaws.com/public/assets/front/images/fairmartLogo.png"} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://www.fairmart.com.bd/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    // backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                               <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Learning Management Sys
                    </h5>
                    <img src={"https://www.nsric.ca/./uploads/home/borologo.png"} alt={"https://www.nsric.ca/./uploads/home/borologo.png"} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://www.nsric.ca/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  {/* <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A Machine Learning based project on “ Twitter Sentimental Analysis .
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Python
                  </div> */}
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    // backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Leave Management Sys
                    </h5>
                    <img src={"https://app.ntrcaleave.xyz/assets/images/logo.jpg"} alt={"https://app.ntrcaleave.xyz/assets/images/logo.jpg"} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://app.ntrcaleave.xyz/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  {/* <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Cisco and Routing Protocol in Data Communications and
                      Networking Analysis.
                    </p>
                  </h6> */}
                  {/* <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                   Networking
                  </div> */}
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    // backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Shah Cement
                    </h5>
                    <img src={"https://www.shahcement.com/assets/images/logo.png"} alt={"https://www.shahcement.com/assets/images/logo.png"} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://www.shahcement.com/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  {/* <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                     A portfolio based on React.
                    </p>
                  </h6> */}
                  {/* <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Javascript, Firebase
                  </div> */}
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
          <Link to="/projectspage">
            <button className="btn btn-primary">
              View All
              <HiArrowRight className="viewArr" />
            </button>
          </Link>
        </div>
        </Container>
      </Container>
    </div>
  );
}
