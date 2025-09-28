import Marquee from "react-fast-marquee";

function Brand() {
  // I can replace these logo img src's with my real brand logos
  const logosRow1 = [
    "/brand_1.svg",
    "/brand_2.svg",
    "/brand_3.svg",
    "/brand_4.svg",
    "/brand_5.svg",
    "/brand_6.svg",
  ];

  const logosRow2 = [
    "/brand_7.svg",
    "/brand_8.svg",
    "/brand_9.svg",
    "/brand_10.svg",
    "/brand_11.svg",
    "/brand_12.svg",
  ];

//   // dummy logos (replace later with real ones)
//   // const logosRow1 = [
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+1",
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+2",
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+3",
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+4",
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+5",
//   // ];

//   // const logosRow2 = [
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+6",
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+7",
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+8",
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+9",
//   //   "https://dummyimage.com/200x80/fff/aaa.png&text=Brand+10",
//   // ];

  return (
    <section className="relative bg-black text-white py-12 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-gray-400 text-lg mb-10">
        Millions of users use my designs
      </h2>

      {/* Logos container */}
      <div className="space-y-10">
        {/* Row 1 - scrolls right */}
        <Marquee pauseOnHover={true} direction="right" speed={40}>
          <div className="flex items-center">
            {logosRow1.concat(logosRow1).map((logo, idx) => (
              <div key={idx} className="px-10"> {/* More spacing */}
                <img
                  src={logo}
                  alt="brand"
                  className="h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Row 2 - scrolls left */}
        <Marquee pauseOnHover={true} speed={40}>
          <div className="flex items-center">
            {logosRow2.concat(logosRow2).map((logo, idx) => (
              <div key={idx} className="px-10"> {/* More spacing */}
                <img
                  src={logo}
                  alt="brand"
                  className="h-12 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Brand;
