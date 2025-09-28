import { useState } from "react";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Navbar from "./components/Navbar";
import Achievement from "./components/Achievement";
import Testimonial from "./components/Testimonial";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import VideoTestimonials from "./components/VideoTestimonials";
import Blog from "./components/Blog";
import MasonryGrid from "./components/MasonryGrid"; // new component for mixed view

function App() {
  const [organizeMode, setOrganizeMode] = useState(false);

  return (
    <div className="font-sans">
      <Hero />
      <Brand />
      <Navbar organizeMode={organizeMode} setOrganizeMode={setOrganizeMode} />

      {organizeMode ? (
        <>
        <main>
          <section id="ux-achievements">
            <Achievement />
          </section>
          <section id="testimonials">
            <Testimonial />
          </section>
          <section id="designs">
            <Projects />
          </section>
          <section id="case-studies">
            <CaseStudies />
          </section>
          <section id="testimonial-videos">
            <VideoTestimonials />
          </section>
          <section id="blog">
            <Blog />
          </section>
        </main>
        </>
      ) : (
        <MasonryGrid />
      )}
    </div>
  );
}

export default App;

