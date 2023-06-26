import './index.css'
import About from "./components/About";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Header />
      <div className="main-content container mx-auto md:px-12">
        <Hero />
        <About />
        <Expertise />
        <FeaturedProjects />
        <AllProjects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
