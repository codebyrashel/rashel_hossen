import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Navbar from "./components/Navbar";
import Achievement from "./components/Achievement";
import Testimonial from "./components/Testimonial";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import VideoTestimonials from "./components/VideoTestimonials";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-black text-white">
      {/* Top sections */}
      <Hero />
      <Brand />
      <Navbar />

      {/* Main organized content */}
      <main className="flex-1">
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
    </div>
  );
}

export default App;