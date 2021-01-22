import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HomeListings from "./components/HomeListings";
import ExhibitionSection from "./components/ExhibitionSection";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ArchivePage from "./pages/ArchivePage";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header></Header> */}
        <Hero />
        <AboutSection />
        <HomeListings />
        <ExhibitionSection />
        <ProfileSection />
        <Footer />
        {/* <AboutPage />
        <ArchivePage /> */}
      </div>
    </Router>
  );
}

export default App;
