import './App.css';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';

import 'aos/dist/aos.css';
import AOS from 'aos';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedCursor from "react-animated-cursor"
import VideoDetailsPage from "./pages/detailsPage/video"
import TwoDAnimation from './pages/detailsPage/2dAnimator';
import ThreeDAnimation from './pages/detailsPage/3dAnimator';
import MotionGraphic from './pages/detailsPage/motionGraphic';
import { Routes, Route } from 'react-router-dom';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <div style={{ cursor: 'default', overflowX: "hidden" }}>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video-details" element={<VideoDetailsPage />} />
        <Route path="/2danimation-details" element={<TwoDAnimation />} />
        <Route path="/3danimation-details" element={<ThreeDAnimation />} />
        <Route path="/motiongraphic-details" element={<MotionGraphic />} />
        
      </Routes>
    </div>

  );
}

export default App;
