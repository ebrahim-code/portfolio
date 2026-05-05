import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";
import Loading  from "./components/Loading";
import CursorFollower from "./components/CursorFollower";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Match loading animation duration (≈ 2.2 s)
    const t = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App">
      <CursorFollower />

      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;