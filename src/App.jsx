import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import IntroSection from "./components/IntroSection";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './styles/intro.css';
import './styles/workExperience.css';
import './styles/education.css';
import './styles/projects.css'
import './styles/skills.css'
import SkillsV2 from "./components/SkillsV2";


function App() {
  const [showScrollButton, setShowScrollButton] = useState(false)
  useEffect(()=>{
    const handleScrollButtonVisibility = () =>{
      window.pageYOffset > 300 ? setShowScrollButton(true):setShowScrollButton(false)
    }
    window.addEventListener('scroll',handleScrollButtonVisibility);
    return () =>{
      window.addEventListener('scroll',handleScrollButtonVisibility);
    }
  },[])
  const handleScrollToTop = () =>{
    window.scrollTo({top:0, behavior:'smooth'})
  };
  return (
    <div className="app">
      <div className="intro">
        <IntroSection />
      </div>
      <div className="workExperience">
        <WorkExperience/>
      </div>
      <div className="education">
        <Education/>
      </div>
      <div className="projects">
        <Projects/>
      </div>
      {/* <div className="skills">
        <Skills/>
      </div> */}
      <div className="skills">
        <SkillsV2/>
      </div>
      {showScrollButton && <div className='scrollButton' onClick={handleScrollToTop}><Icon icon="material-symbols:arrow-upward-rounded" /></div>}
    </div>
  );
}

export default App;
