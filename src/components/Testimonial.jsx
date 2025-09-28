import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { Linkedin, Twitter, Github, X } from "lucide-react";

const testimonials = [
  {
    name: "Joseph Ryan",
    role: "Web Designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `Working with Rashel Hossen in HobbyKing is what I call "Out of the box" experience.`,
    social: { platform: "linkedin", url: "https://linkedin.com/in/josephryan" },
  },
  {
    name: "Mohammad Karim",
    role: "DevOps Expert",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: `Rashel Hossen is a Hacker 😎. No matter the product quality, a salesperson can shape perception...
           but Rashel as a UX designer gently hacks our minds using psychology, and it works wonders!`,
    social: { platform: "twitter", url: "https://twitter.com/mohammadkarim" },
  },
  {
    name: "Israa Ahmed",
    role: "UX Researcher",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `The most important qualities a team member must possess are honesty, achievement, commitment,
            and teamwork. Thank you Rashel Hossen for the opportunity to work with you and I hope to repeat it soon.`,
    social: { platform: "twitter", url: "https://twitter.com/israaahmed" },
  },
  {
    name: "Yasir Nabi",
    role: "Product Designer",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: `He is profound, and Rashel’s ability to tackle problems with a smile is remarkable.`,
    social: { platform: "linkedin", url: "https://linkedin.com/in/yasirnabi" },
  },
];

// Social icon helper
const getSocialIcon = (platform) => {
  switch (platform) {
    case "linkedin":
      return <Linkedin size={18} className="text-blue-400" />;
    case "twitter":
      return <Twitter size={18} className="text-sky-400" />;
    case "github":
      return <Github size={18} className="text-gray-300" />;
    default:
      return null;
  }
};

// Testimonial Card
const TestimonialCard = ({ item, onReadMore }) => {
  const textRef = useRef(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      if (el.scrollHeight > el.clientHeight + 2) {
        setIsClamped(true);
      }
    }
  }, []);

  return (
    <div className="bg-zinc-900 rounded-lg p-4 w-72 h-48 flex flex-col justify-start mx-3">
      {/* Profile row */}
      <div className="flex items-center gap-4 mb-2 relative">
        <div className="relative w-12 h-12">
          <img
            src={item.img}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition">
            <a
              href={item.social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.social.platform}
            >
              {getSocialIcon(item.social.platform)}
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-400">{item.role}</p>
        </div>
      </div>

      {/* Review text */}
      <p ref={textRef} className="text-gray-300 text-sm leading-relaxed line-clamp-3">
        {item.text}
      </p>

      {/* Read More only if clamped */}
      {isClamped && (
        <button
          onClick={() => onReadMore(item)}
          className="text-yellow-400 text-xs mt-1 hover:underline self-start"
        >
          Read more
        </button>
      )}
    </div>
  );
};

// Modal
const Modal = ({ item, onClose }) => (
  <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
    <div className="bg-zinc-800 text-white rounded-lg p-6 w-96 relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        <X size={20} />
      </button>
      <div className="flex items-center gap-4 mb-4">
        <img
          src={item.img}
          alt={item.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-400">{item.role}</p>
        </div>
      </div>
      <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
        {item.text}
      </p>
    </div>
  </div>
);

// One Marquee row with overlays only visible on md+
const MarqueeRow = ({ direction, testimonials, onReadMore }) => (
  <div className="relative">
    {/* Black gradient overlays (hidden on mobile, visible md+) */}
    <div className="hidden md:block absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
    <div className="hidden md:block absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

    <Marquee
      direction={direction}
      pauseOnHover
      gradient={false} // disable built-in
      speed={40}
      className="flex"
    >
      <div className="flex gap-6">
        {testimonials.map((itm, idx) => (
          <TestimonialCard
            key={idx}
            item={itm}
            onReadMore={(item) => onReadMore(item)}
          />
        ))}
      </div>
    </Marquee>
  </div>
);

const Testimonial = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-black text-white py-16 px-0 sm:px-4">
      {/* Responsive container: full width on mobile, max 1440 on larger screens */}
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>

        <div className="space-y-6">
          <MarqueeRow
            direction="left"
            testimonials={testimonials}
            onReadMore={setSelected}
          />
          <MarqueeRow
            direction="right"
            testimonials={testimonials}
            onReadMore={setSelected}
          />
        </div>
      </div>

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Testimonial;