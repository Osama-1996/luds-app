import './App.css';
import { useEffect } from 'react';
import Header from './components/header';
import HomePage from './pages/HomePage';
import OurTeamPage from './pages/ourTeamPage';
import 'aos/dist/aos.css';
import AOS from 'aos';
import CreativeHiring from './pages/creativeHiring';
import PricingModel from './pages/pricingmodal';
import ProblemSolution from './pages/problemSolution';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsCarousel from './pages/testimonials';
import TechnologyStacks from "./pages/technologyStack"
import MeetingDate from './pages/meetingDate';
import Contactus from './pages/contactUs';
import Footer from './components/footer';
import AnimatedCursor from "react-animated-cursor"
function App() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <div style={{ cursor: 'default',overflowX:"hidden" }}>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5} />
      <Header />
      <HomePage />
      <CreativeHiring />
      <OurTeamPage />
      <PricingModel />
      <ProblemSolution />
      <TestimonialsCarousel />
      <TechnologyStacks />
      <MeetingDate />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
