import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HomeListings from "./components/HomeListings";
import ExhibitionSection from "./components/ExhibitionSection";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ArchivePage from "./pages/ArchivePage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header></Header> */}
        <Hero />
        <AboutSection />
        <HomeListings />
        <ExhibitionSection />
        {/* <AboutPage />
        <ArchivePage /> */}
      </div>
    </Router>
  );
}

export default App;
