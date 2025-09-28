import React, { useState } from "react";
import Masonry from "react-masonry-css";

// Import images
import post1 from "../assets/post.png";
import post2 from "../assets/post_2.png";
import post3 from "../assets/post_3.png";

const posts = [
  {
    id: 1,
    image: post1,
    title: "Sales increased through a change I made on a page",
    description: `By making a strategic UX change on a key page, I was able 
      to improve the flow of information, reduce user hesitation, 
      and guide more visitors toward conversion. This change directly 
      contributed to a $250k+ increase in monthly sales, proving the 
      impact of thoughtful design decisions on business outcomes.`,
    videoUrl: "",
  },
  {
    id: 2,
    image: post2,
    title: "I decreased the bounce rate for a SaaS website",
    description: `Through a combination of layout improvements, clearer CTAs, 
      and simplified forms, I significantly reduced bounce rates across 
      the homepage, pricing page, and demo request form. The result was 
      more engaged users who explored deeper into the platform.`,
    videoUrl: "",
  },
  {
    id: 3,
    image: post3,
    title: "I increased conversions for specific goals",
    description: `By running A/B tests and optimizing page hierarchy, 
      I was able to dramatically increase conversions across three 
      critical metrics: free trial sign-ups, demo scheduling, and 
      product trials. Each optimization step was based on user behavior 
      analysis and iterative testing.`,
    videoUrl: "",
  },
];

const UxAchievements = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const breakpointColumnsObj = {
    default: 3, // Desktop
    1100: 2,    // Tablet
    700: 1,     // Mobile
  };

  return (
    <section className="bg-black text-white py-12 px-0 sm:px-4">
      {/* Responsive container like Testimonial section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-10">UX Achievements</h2>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="flex flex-col gap-6"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:scale-[1.02] transition w-full"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <p className="text-gray-400 text-sm">Achievement</p>
                <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 text-white rounded-2xl shadow-xl max-w-2xl w-full relative overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
              onClick={() => setSelectedPost(null)}
            >
              ✕
            </button>

            {/* Media */}
            <div className="flex items-center justify-center bg-black">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="p-6">
              <p className="text-yellow-400 text-sm font-medium">Achievement</p>
              <h3 className="text-2xl font-bold mt-2">{selectedPost.title}</h3>
              <p className="text-gray-300 mt-3 whitespace-pre-line">
                {selectedPost.description}
              </p>

              {/* Optional video button */}
              {selectedPost.videoUrl && (
                <a
                  href={selectedPost.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                  ▶ Watch video
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UxAchievements;