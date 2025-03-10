// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { AiOutlineDownload } from "react-icons/ai";
// import Particle from "../../Particle";
// import pdf from "../../assets/Naser_Resume_2.pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import Zoom from "react-reveal/Zoom";
// import React, { useState, useEffect } from "react";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://github.com/Naser768/MdNaserPf/blob/main/Naser_Resume_2.pdf";

// function Resume() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <section className="home-section">
//         <Container fluid id="home">
//           <Particle />
//           <Container className="home-content">
//             <div
//               className="d-flex justify-content-center"
//               width="100%"
//               style={{ backgroundColor: "#fbd9ad" }}
//             >
//               <Zoom left cascade>
//                 <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
//               </Zoom>
//               {/* <Link to="/ranking">
//       <li className="socialicons">
//         <a
//           href="https://test-app-portfolio.web.app/"
//           target="_blank"
//           rel="noreferrer"
//           className="iconcolour homesocialicons"
//         >
         
//         </a>
//       </li>
//     </Link> */}
//             </div>
//             <div fluid className="certificate-section" id="about">
//               <div className="d-flex justify-content-center mt-4">
//                 <Button variant="primary" href={pdf} target="_blank">
//                   <AiOutlineDownload />
//                   &nbsp;Resume
//                 </Button>
//               </div>
//               <div className="resume d-flex justify-content-center">
//                 <Document file={resumeLink}>
//                   <Page pageNumber={2} scale={width > 786 ? 1.6 : 0.4} />
//                 </Document>
//               </div>
//               <div className="d-flex justify-content-center">
//                 <Button variant="primary" href={pdf} target="_blank">
//                   <AiOutlineDownload />
//                   &nbsp;Resume
//                 </Button>
//               </div>
//             </div>
//           </Container>
//         </Container>
//       </section>
//     </div>
//   );
// }

// export default Resume;

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
// import pdf from "../../assets/RMS-Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";
import React, { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
      "https://raw.githubusercontent.com/SofenChowdhury/rms-resume/main/RMS_Resume.pdf";


function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
              {/* <Link to="/ranking">
      <li className="socialicons">
        <a
          href="https://test-app-portfolio.web.app/"
          target="_blank"
          rel="noreferrer"
          className="iconcolour homesocialicons"
        >
         
        </a>
      </li>
    </Link> */}
            </div>
            <div fluid className="certificate-section" id="about">
              <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" href={resumeLink} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Resume
                </Button>
              </div>
              <div className="resume d-flex justify-content-center">
              <Document file={resumeLink}>
            <div style={{ marginBottom: '20px' }}> {/* Adjust the margin-bottom for the desired gap */}
              <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.4} />
            </div>
            <Page pageNumber={2} scale={width > 786 ? 1.6 : 0.4} />
          </Document>

              </div>
              <div className="d-flex justify-content-center">
                <Button variant="primary" href={resumeLink} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Resume
                </Button>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;

