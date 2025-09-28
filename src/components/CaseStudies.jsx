import { ArrowRight, FileText } from "lucide-react";

// Import images
import Case1 from "../assets/Case_1.png";
import Case2 from "../assets/Case_2.png";
import Case3 from "../assets/Case_3.png";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "HobbyKing",
      subtitle: "Case studies",
      image: Case1,
      button: { label: "View case study", link: "#", active: true },
    },
    {
      id: 2,
      title: "Sapaad",
      subtitle: "Case studies",
      image: Case2,
      button: { label: "Coming Soon", link: "#", active: false },
    },
    {
      id: 3,
      title: "Salalem",
      subtitle: "Case studies",
      image: Case3,
      button: { label: "Coming Soon", link: "#", active: false },
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      {/* Container with max width 1440px */}
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          UX Case Studies
        </h2>

        {/* Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="flex flex-col group">
              {/* Image wrapper with hover overlay */}
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-white flex items-center justify-center h-56 md:h-64">
                <img
                  src={study.image}
                  alt={study.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {study.button.active ? (
                    <span className="text-yellow-400 font-semibold text-sm md:text-base flex items-center gap-1 cursor-pointer">
                      <ArrowRight className="w-4 h-4" />
                      {study.button.label}
                    </span>
                  ) : (
                    <span className="text-gray-300 text-sm md:text-base flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {study.button.label}
                    </span>
                  )}
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-gray-400 mt-4 text-sm">{study.subtitle}</p>

              {/* Title */}
              <h3 className="text-lg font-semibold">{study.title}</h3>

              {/* Button (outside overlay for consistency) */}
              <div className="mt-3">
                {study.button.active ? (
                  <a
                    href={study.button.link}
                    className="inline-flex items-center text-yellow-400 font-medium hover:underline"
                  >
                    <ArrowRight className="w-4 h-4 mr-1" />
                    {study.button.label}
                  </a>
                ) : (
                  <span className="inline-flex items-center text-gray-500 text-sm">
                    <FileText className="w-4 h-4 mr-1" />
                    {study.button.label}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
