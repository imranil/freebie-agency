import './App.css';
import Header from './components/Sections/Header/Header';
import ServicesSection from './components/Sections/ServicesSection/ServicesSection';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import WorksSection from './components/Sections/WorksSection/WorksSection';
import TeamSection from './components/Sections/TeamSection/TeamSection';
import TestimonialSection from './components/Sections/TestimonialSection/TestimonialSection';
import ContactSection from './components/Sections/ContactSection/ContactSection';
import Footer from './components/Sections/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
