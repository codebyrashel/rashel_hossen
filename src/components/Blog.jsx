const BlogSection = () => {
  const posts = [
    {
      id: 1,
      type: "linkedin",
      embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7172289658981113856?collapsed=1",
      link: "https://www.linkedin.com/posts/example",
    },
    {
      id: 2,
      type: "twitter",
      embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7171512970936508418?collapsed=1",
      link: "https://twitter.com/example/status/1234567890",
    },
    {
      id: 3,
      type: "facebook",
      embedLink: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fcodebyrashel%2Fposts%2Fpfbid02NVJrxATHmmy5SNNk58eZZDHv3XgYWAqGSLzqHnejg9yh5RyYaqBAFttMHDubjetl&show_text=true&width=500",
      link: "https://www.facebook.com/facebook/posts/1234567890",
    },
    {
      id: 4,
      type: "linkedin",
      embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7132007310633160704?collapsed=1",
      link: "https://www.linkedin.com/posts/example",
    },
  ];

  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Latest Posts
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {/* Embedded Post */}
              <iframe
                src={post.embedLink}
                title={`post-${post.id}`}
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                className="w-full h-[400px] object-cover"
              ></iframe>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center cursor-pointer">
                <span className="text-white font-semibold text-lg tracking-wide">
                  View Post
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
