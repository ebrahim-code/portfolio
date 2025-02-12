import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import FollowMe from "./components/FollowMe";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading /> : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Testimonials /> */}
          <FollowMe />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;