// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "#work" },
  { name: "Research", path: "#research" },
  { name: "Experience", path: "#experience" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // Removed all "dark:" classes. Forces white background and gray borders.
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-2 backdrop-blur-md shadow-sm"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-black ${
                isActive ? "text-black" : "text-neutral-500"
              }`}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="bubble"
                  // Forces a light gray bubble
                  className="absolute inset-0 -z-10 rounded-full bg-neutral-100"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}