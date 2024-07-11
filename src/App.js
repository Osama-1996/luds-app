import './App.css';
import { useEffect } from 'react';
import Header from './components/header';
import HomePage from './pages/HomePage';
import OurTeamPage from './pages/ourTeamPage';
import 'aos/dist/aos.css';
import AOS from 'aos';
import CreativeHiring from './pages/creativeHiring';
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
    
    </>
  );
}

export default App;
