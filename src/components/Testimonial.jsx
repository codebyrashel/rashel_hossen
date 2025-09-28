import React from "react";
import Masonry from "react-masonry-css";
import { Linkedin, Twitter, Github } from "lucide-react";

const testimonials = [
  {
    name: "Joseph Ryan",
    role: "Web Designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `Working with Rashel Hossen in HobbyKing is what I call "Out of the box" experience.`,
    social: {
      platform: "linkedin",
      url: "https://linkedin.com/in/josephryan",
    },
  },
  {
    name: "Mohammad Karim",
    role: "DevOps Expert",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: `Rashel Hossen is a Hacker 😎 No matter the quality of the product, a smart salesperson always knows how to win customer's mind. A salesperson hacks our minds by saying a few common like “last offer”, “only for me” but a UX designer hacks our minds in many unknown ways based on psychology.`,
    social: {
      platform: "twitter",
      url: "https://twitter.com/mohammadkarim",
    },
  },
  {
    name: "Ghassan Dadokh",
    role: "Marketing Director",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    text: `Rashel Hossen is a seasoned UX designer who enjoys a creative mindset and provides amazing design ideas to match different flavors.`,
    social: {
      platform: "linkedin",
      url: "https://linkedin.com/in/ghassandadokh",
    },
  },
  {
    name: "Israa Ahmed",
    role: "UX Researcher",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `The most important qualities that a member of his work team must possess are honesty, achievement, commitment at the time of delivery and teamwork. Thank you Rashel Hossen for the opportunity to work with you and I hope to repeat it as soon as possible.`,
    social: {
      platform: "twitter",
      url: "https://twitter.com/israaahmed",
    },
  },
  {
    name: "Yasir Nabi",
    role: "Product Designer",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: `He is the most profound person I have met, and Rashel Hossen's ability to tackle any problem is remarkable and with a warm smile.`,
    social: {
      platform: "linkedin",
      url: "https://linkedin.com/in/yasirnabi",
    },
  },
  {
    name: "Ahmad Mubideen",
    role: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    text: `He have got one of the rare unique personality, I am fortunate to have Rashel Hossen as friend more than anything else, working with him was also a pleasure of it’s own.`,
    social: {
      platform: "github",
      url: "https://github.com/ahmadmubideen",
    },
  },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

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

const Testimonial = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="bg-transparent space-y-10"
      >
        {testimonials.map((item, idx) => (
          <div key={idx} className="relative">
            {/* Profile and name/role in row */}
            <div className="flex items-center gap-4 mb-4">
              {/* Profile Image with hover social */}
              <div className="relative w-16 h-16">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
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

              {/* Name + Role */}
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-gray-200 text-sm leading-relaxed">{item.text}</p>
            <button className="mt-3 text-yellow-400 font-medium hover:underline">
              Continue reading
            </button>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Testimonial;
