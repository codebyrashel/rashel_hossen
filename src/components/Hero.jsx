import { useEffect, useState } from "react";
import RotatingText from "./RotatingText";
import ShinyText from "./ShinyText";
import TextType from "./TextType";

function Hero() {
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState("");

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // // Format BD time
  // const options = {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: true,
  //   timeZone: "Asia/Dhaka",
  // };
  // const bangladeshTime = new Intl.DateTimeFormat("en-US", options).format(time);

  // // Availability
  // useEffect(() => {
  //   const hour24 = parseInt(
  //     new Date().toLocaleString("en-US", {
  //       timeZone: "Asia/Dhaka",
  //       hour: "2-digit",
  //       hour12: false,
  //     }),
  //     10
  //   );
  //   setStatus(
  //     hour24 >= 9 && hour24 < 24
  //       ? "🟢 At office now"
  //       : "🔴 Not available now, sleeping"
  //   );
  // }, [time]);




  // Format BD time
const options = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Dhaka",
};
const bangladeshTime = new Intl.DateTimeFormat("en-US", options).format(time);

// Availability
useEffect(() => {
  const now = new Date();

  // Get the hour in 24h format
  const hour24 = parseInt(
    now.toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      hour12: false,
    }),
    10
  );

  // Get minutes
  const minutes = parseInt(
    now.toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      minute: "2-digit",
    }),
    10
  );

  // Convert to absolute minutes since midnight
  const totalMinutes = hour24 * 60 + minutes;

  let newStatus = "";

  if (hour24 >= 9 && hour24 < 24) {
    // 9:00 → 23:59
    newStatus = "🟢 At office now";
  } else if (totalMinutes >= 290 && totalMinutes < 540) {
    // 4:50 (290 mins) → 8:59 (539 mins)
    newStatus = "🔴 Awake, but not available yet";
  } else {
    // Midnight → 4:49
    newStatus = "🔴 Not available now, sleeping";
  }

  setStatus(newStatus);
}, [time]);



  // Full social icons array (kept intact)
  const socialIcons = [
    {
      name: "X",
      href: "#",
      hoverClass: "hover:text-black",
      svg: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      hoverClass: "hover:text-blue-600",
      svg: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      hoverClass: "hover:text-blue-500",
      svg: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
        </svg>
      ),
    },
    {
      name: "Threads",
      href: "#",
      hoverClass: "hover:text-black",
      svg: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      hoverClass: "hover:text-pink-500",
      svg: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#",
      hoverClass: "hover:text-black",
      svg: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "#",
      hoverClass: "hover:text-indigo-600",
      svg: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.075.035c-.211.375-.447.864-.612 1.249-1.84-.276-3.68-.276-5.52 0-.165-.4-.4-.874-.612-1.249a.07.07 0 00-.075-.035A19.736 19.736 0 003.683 4.37a.066.066 0 00-.03.024C.533 9.045-.32 13.578.098 18.057a.082.082 0 00.031.055c2.052 1.5 4.04 2.422 5.992 3.03a.052.052 0 00.057-.02c.462-.63.874-1.295 1.226-1.992a.047.047 0 00-.026-.066c-.652-.247-1.27-.545-1.848-.886a.05.05 0 01-.01-.078c.125-.094.249-.19.37-.288a.048.048 0 01.05-.006c3.786 1.736 7.888 1.736 11.61 0a.048.048 0 01.052.003c.12.1.245.197.37.29a.05.05 0 01-.01.078 12.3 12.3 0 01-1.848.886.047.047 0 00-.026.066c.36.698.773 1.362 1.226 1.992a.052.052 0 00.057.02c1.952-.608 3.94-1.53 5.993-3.03a.08.08 0 00.03-.055c.5-5.177-.838-9.581-3.548-13.663a.06.06 0 00-.03-.023zM8.02 15.331c-1.183 0-2.138-1.085-2.138-2.422 0-1.336.95-2.42 2.138-2.42 1.21 0 2.174 1.098 2.138 2.42 0 1.337-.95 2.422-2.138 2.422zm7.956 0c-1.183 0-2.138-1.085-2.138-2.422 0-1.336.95-2.42 2.138-2.42 1.21 0 2.174 1.098 2.138 2.42 0 1.337-.93 2.422-2.138 2.422z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className={`
    relative h-screen w-full bg-cover bg-no-repeat text-white
  `}
      style={{
        backgroundImage: "url('./rashel.jpeg')",
        backgroundPosition: "77% 50%", // X% (horizontal), Y% (vertical)
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Container */}
      <div className="relative z-10 h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-center">
        {/* === Social Icons Top-right === */}
        <div className="absolute top-6 right-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 z-50 text-gray-300">
          {socialIcons.map((icon, idx) => (
            <a
              key={idx}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${icon.hoverClass}`}
            >
              {icon.svg}
            </a>
          ))}
        </div>

        {/* === Top-left Name & Role === */}
        <div className="absolute top-6 left-6 md:left-10">
          <h2 className="text-lg font-bold">
            <ShinyText
              text="Rashel Hossen"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h2>
          <p className="text-sm text-gray-300">
            Full-Stack Developer, Digital Marketer & Founder
          </p>
        </div>

        {/* === Hero Content === */}
        <div className="max-w-lg mt-35 sm:mt-16 md:mt-0 px-4">
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug sm:leading-tight mb-4 sm:mb-6">
            {/* Static text */}
            <span className="block">I build</span>

            {/* Rotating text below */}
            <RotatingText
              texts={[
                "modern web apps",
                "scalable products",
                "interactive UIs",
                "efficient code",
                "marketing plan",
                "content that sells",
                "brand identities",
              ]}
              mainClassName="inline-flex"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 inline-block"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2900}
            />
          </h1>

          {/* Subtext with fixed height */}
          <div className="relative h-12 sm:h-18 mb-6 sm:mb-8">
            <p className="absolute inset-0 text-gray-300 text-sm sm:text-base leading-snug">
              <TextType
                text={[
                  "Scalable web applications engineered for speed, reliability, and intuitive user experiences.",
                  "Data-driven digital marketing campaigns designed to boost visibility, engagement, and growth.",
                  "Integrated code-and-content solutions turning technical performance into real business results.",
                ]}
                typingSpeed={75}
                pauseDuration={850}
                showCursor={true}
                cursorCharacter="|"
              />
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-2 mt-4 w-full">
            <a
              href="https://your-calendar-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-yellow-400 text-black font-semibold 
                 px-2.5 py-1.5 text-xs 
                 sm:px-4 sm:py-2 sm:text-sm 
                 md:px-6 md:py-3 md:text-base
                 rounded border-2 border-yellow-400 
                 hover:bg-yellow-500 transition text-center whitespace-nowrap"
            >
              Book a Meeting
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center space-x-1 
                 px-2.5 py-1.5 text-xs 
                 sm:px-4 sm:py-2 sm:text-sm 
                 md:px-6 md:py-3 md:text-base
                 border-2 border-yellow-400 text-yellow-400 
                 rounded hover:bg-yellow-400 hover:text-black 
                 transition whitespace-nowrap"
            >
              <img
                src="/play.svg"
                alt="play"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              <span>Watch my CV</span>
            </a>
          </div>
        </div>

        {/* === Bottom-right Time/Location === */}
        <div
          className="
    absolute 
    bottom-4 right-4 text-right z-20    {/* mobile defaults */}
    sm:bottom-15 sm:right-10 sm:text-left {/* overrides from small screens up */}
  "
        >
          {/* Label */}
          <p className="text-[10px] sm:text-xs text-gray-300 mb-1">
            Current location & time:
          </p>

          {/* City + Time Row */}
          <div className="flex items-center justify-end sm:justify-between space-x-2">
            <h3 className="text-sm sm:text-xl font-bold">Cox&apos;s Bazar</h3>
            <p className="text-sm sm:text-lg">{bangladeshTime}</p>
          </div>

          {/* Status below */}
          <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm">
            <ShinyText
              text={status}
              disabled={false}
              speed={3}
              className="font-semibold"
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
