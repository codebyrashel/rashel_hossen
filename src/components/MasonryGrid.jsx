import Achievement from "./Achievement";
import Testimonial from "./Testimonial";
import Projects from "./Projects";
import CaseStudies from "./CaseStudies";
import VideoTestimonials from "./VideoTestimonials";
import Blog from "./Blog";

const MasonryGrid = () => {
  return (
    <div className="px-4 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Achievement />
      <Testimonial />
      <Projects />
      <CaseStudies />
      <VideoTestimonials />
      <Blog />
    </div>
  );
};

export default MasonryGrid;
