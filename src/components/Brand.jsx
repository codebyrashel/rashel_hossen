import Marquee from "react-fast-marquee";

function Brand() {


// You can replace these logo img srcs with your real brand logos
//   const logosRow1 = [
//     "/brands/riyadhmetro.png",
//     "/brands/ibm.png",
//     "/brands/tamm.png",
//     "/brands/sapaad.png",
//     "/brands/hobbyking.png",
//     "/brands/omantel.png",
//   ];

//   const logosRow2 = [
//     "/brands/mobily.png",
//     "/brands/causalcapital.png",
//     "/brands/advendio.png",
//     "/brands/arabic1.png",
//     "/brands/opensoog.png",
//     "/brands/mawdoo3.png",
//   ];




  // dummy logos (replace later with real ones)
  const logosRow1 = [
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+1",
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+2",
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+3",
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+4",
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+5",
  ];

  const logosRow2 = [
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+6",
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+7",
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+8",
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+9",
    "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+10",
  ];

  return (
    <section className="relative bg-black text-white py-12 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-gray-400 text-lg mb-10">
        Millions of users use my designs
      </h2>

      {/* Logos container */}
      <div className="space-y-6">
        {/* Row 1 - scrolls right */}
        <Marquee pauseOnHover="true" direction="right">
        <div className="overflow-hidden">
          <div className="marquee-right flex space-x-12 items-center">
            {logosRow1.concat(logosRow1).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="brand"
                className="h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
        </Marquee>

        {/* Row 2 - scrolls left */}

        <Marquee pauseOnHover="true">
            <div className="overflow-hidden">
          <div className="marquee-left flex space-x-12 items-center">
            {logosRow2.concat(logosRow2).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="brand"
                className="h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
        </Marquee>
      </div>

    </section>
  );
}

export default Brand;