// Import other components and libraries as needed
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import Contactus from "./components/contactus/Contactus";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/about/About";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ExperienceJourney from "./components/aboutme/journey/ExperienceJourney";
import CertificatePage from "./pages/certificate_page/CertificatePage";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import Contactus_page from "./pages/contact_page/Contactus_page";
// import Connect_Page from "./pages/connect_page/Connect_Page";
import Ranking from "./components/aboutme/ranking/Ranking" ; // Import the Ranking component
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
import Toolkit from "./components/aboutme/skills/Toolkit";
// import Ranking from "./components/aboutme/ranking/Ranking";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
          <Route path="/portfolio-me" element={<Home />}>
            <Route path="/portfolio-me" element={<About />} />
            <Route path="/portfolio-me/personalskill" element={<PersonalSkill />} />
            <Route path="/portfolio-me/technicalskill" element={<TechnicalSkill />} />
            <Route path="/portfolio-me/technicaljourney" element={<TechnicalJourney />} />
            <Route path="/portfolio-me/projectjourney" element={<ProjectJourney />} />
            <Route path="/portfolio-me/educationjourney" element={<EducationJourney />} />
            <Route path="/portfolio-me/experiencejourney" element={<ExperienceJourney />} />
            <Route path="/portfolio-me/socialmedia" element={<SocialMedia />} />
            <Route path="/portfolio-me/toolkit" element={<Toolkit />} />
            {/* <Route path="ranking" element={<Ranking />} /> Add this line */}
            
            {/* <Route path="ranking" element={<Ranking />} />  */}
          </Route>
          <Route path="/portfolio-me/projectspage" element={<ProjectPage />} />
          {/* <Route path="/certificatepage" element={<CertificatePage />} /> */}
          <Route path="/portfolio-me/resume" element={<Resume />} />
          <Route path="/portfolio-me/contact_page" element={<Contactus_page />} /> {/* Add this line */}
          <Route path="/portfolio-me/contactus" element={<Contactus />} /> 
          {/* <Route path="/ranking" element={<Ranking />} />  */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
