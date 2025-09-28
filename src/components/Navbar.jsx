import React, { useState } from "react";
import { X, Menu } from "lucide-react";

// Desktop + Mobile nav items
const navItems = [
  { id: "all", label: "All" }, // desktop shows "All" as default
  { id: "ux-achievements", label: "UX Achievements" },
  { id: "testimonials", label: "Testimonials" },
  { id: "designs", label: "Designs" },
  { id: "case-studies", label: "UX Case Studies" },
  { id: "testimonial-videos", label: "Testimonial Videos" },
  { id: "blog", label: "Blog" },
];

// Mobile-only nav items (we don’t clutter with "All")
const mobileNavItems = navItems.filter((item) => item.id !== "all");

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Default active: "all" for desktop, "ux-achievements" for mobile
  const getDefaultNav = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return "ux-achievements";
    }
    return "all";
  };

  const [activeNav, setActiveNav] = useState(getDefaultNav);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section && id !== "all") {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveNav(id); 
    setMobileOpen(false); // close overlay after selecting
  };

  return (
    <nav className="w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`cursor-pointer hover:text-yellow-400 transition ${
                activeNav === item.id ? "text-yellow-400" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Nav Button */}
        <div className="md:hidden w-full">
          <button
            onClick={() => setMobileOpen(true)}
            className="w-full flex items-center justify-between px-4 py-2 bg-black border border-white rounded-lg text-sm font-medium"
          >
            <span>
              {mobileNavItems.find((i) => i.id === activeNav)?.label ||
                "UX Achievements"}
            </span>
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-start px-6 pt-12 space-y-6">
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-yellow-400"
          >
            <X size={28} />
          </button>

          {/* Nav Items (Mobile Overlay) */}
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-2xl font-semibold ${
                activeNav === item.id ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 transition`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;