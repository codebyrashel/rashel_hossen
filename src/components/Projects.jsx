import Masonry from "react-masonry-css";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Portfolio Website",
    type: "Web App",
    mainImage:
      "https://cdn.dribbble.com/userupload/44536661/file/b654206caafa3de8132f49b0b7e44251.jpg?resize=1024x768&vertical=center",
    images: [
      "https://cdn.dribbble.com/userupload/44536661/file/b654206caafa3de8132f49b0b7e44251.jpg?resize=1024x768&vertical=center",
      "https://cdn.dribbble.com/userupload/44536661/file/b654206caafa3de8132f49b0b7e44251.jpg?resize=1024x768&vertical=center",
      "https://cdn.dribbble.com/userupload/44536661/file/b654206caafa3de8132f49b0b7e44251.jpg?resize=1024x768&vertical=center"
    ],
    link: "https://github.com/username/portfolio",
  },
  {
    name: "E-commerce App",
    type: "Mobile App",
    mainImage: "https://themewagon.com/wp-content/uploads/2019/08/top-gym-1.jpg",
    images: [
      "https://themewagon.com/wp-content/uploads/2019/08/top-gym-1.jpg",
      "https://themewagon.com/wp-content/uploads/2019/08/top-gym-1.jpg",
    ],
    link: "https://github.com/username/ecommerce-app",
  },
  {
    name: "Blog Platform",
    type: "Web App",
    mainImage:
      "https://cdn.dribbble.com/userupload/2950458/file/original-59bd67536a12884e595becbdef2d4450.jpg?resize=400x0",
    images: [
      "https://hasthemes.com/blog/wp-content/uploads/2022/07/koshrot-gym-fitness-html-template-with-page-builder.webp",
      "https://hasthemes.com/blog/wp-content/uploads/2022/07/koshrot-gym-fitness-html-template-with-page-builder.webp",
      "https://hasthemes.com/blog/wp-content/uploads/2022/07/koshrot-gym-fitness-html-template-with-page-builder.webp",
    ],
    link: "https://github.com/username/blog-platform",
  },
];

const breakpointColumnsObj = {
  default: 3,  // desktop 3
  1100: 2,     // tablet 2
  700: 1,      // mobile 1
};

const ProjectCard = ({ project }) => {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg bg-neutral-900">
      {/* Main Image */}
      <div className="relative group">
        <img
          src={project.mainImage}
          alt={project.name}
          className="w-full h-auto rounded-t-xl object-cover"
        />
        {/* Hover Overlay */}
        <div
          onClick={() => window.open(project.link, "_blank")}
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold text-xl transition duration-300 cursor-pointer rounded-t-xl"
        >
          Preview
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 p-2 overflow-x-auto">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.name}-${idx}`}
            className="w-16 h-16 object-cover rounded-md flex-shrink-0"
          />
        ))}
      </div>

      {/* Text */}
      <div className="flex justify-between items-center p-4">
        <div>
          <p className="text-sm text-gray-400">{project.type}</p>
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        </div>
        <div className="bg-yellow-400 p-3 rounded-full">
          <ArrowRight className="text-white" size={20} />
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section className="bg-black py-16 px-0 sm:px-4">
      {/* Container like other sections */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="flex flex-col gap-6"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default ProjectSection;