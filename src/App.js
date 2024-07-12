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
function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    < >
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
      <Footer/>
    </>
  );
}

export default App;
