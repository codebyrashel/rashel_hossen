import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Achievement from "./components/Achievement";
import Testimonial from "./components/Testimonial";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import VideoTestimonials from "./components/VideoTestimonials";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Brand />
      <Achievement />
      <Testimonial />
      <Projects />
      <CaseStudies />
      <VideoTestimonials />
      <Blog />
    </div>
  );
}

export default App;