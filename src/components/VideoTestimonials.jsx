import React, { useState } from "react";
import { Play, X } from "lucide-react";

// Example video data
const videos = [
  {
    id: 1,
    title: "How our platform helped scale business",
    subtitle: "Video Testimony",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 2,
    title: "Client shares their experience",
    subtitle: "Video Testimony",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    id: 3,
    title: "Testimonial from our community",
    subtitle: "Video Testimony",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Video Testimonials
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedVideo(video.embedUrl)}
            >
              {/* Thumbnail with hover overlay */}
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-white flex items-center justify-center h-56 md:h-64">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-yellow-400" />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-gray-400 mt-4 text-sm">{video.subtitle}</p>

              {/* Title */}
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedVideo(null)} // Close when clicking outside
        >
          <div
            className="bg-black rounded-lg overflow-hidden shadow-lg max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute left-1/2 transform -translate-x-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-2xl z-50"
            >
              <X className="w-7 h-7" /> {/* Bigger close icon */}
            </button>

            {/* Embedded video */}
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                src={selectedVideo}
                title="Video Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
