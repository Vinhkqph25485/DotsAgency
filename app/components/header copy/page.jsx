"use client";

import { motion } from "framer-motion";

let tabs = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "service", label: "Service" },
  { id: "blogs", label: "Blogs" },
];

export default function Header() {
  return (
    <div className="flex w-screen flex-1 overflow-hidden text-slate-600 px-[42px] absolute z-[1002]">
      <div className="z-0 flex-1 overflow-y-scroll">
        <motion.header
          style={{
            backgroundColor: "transparent",
          }}
          className="fixed inset-x-0 flex h-20 py-[42px]"
        >
          <div className="flex w-screen items-center justify-between px-8 py-[42px]">
            <motion.p className="flex origin-left items-center text-xl text-white font-semibold uppercase">
              <span className="w-[55px] h-[55px] rounded-full bg-white mr-2"></span>
              <span className="flex flex-col justify-center items-start">
                <span
                  style={{ lineHeight: "24px" }}
                  className="text-[24px] tracking-[-.075em]"
                >
                  DOTS
                </span>
                <span
                  style={{ lineHeight: "24px" }}
                  className="text-[24px] tracking-[-.075em]"
                >
                  AGENCY
                </span>
              </span>
            </motion.p>
            <motion.nav className="flex space-x-4 text-sm font-medium text-slate-400">
              <div className="flex items-center">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    style={{
                      backgroundColor: "#ffffff",
                      width: "106px",
                      height: "69px",
                      fontSize: "21px",
                      color: "#000000",
                      borderRadius:
                        index === 0
                          ? "10px 0 0 10px"
                          : index === 3
                          ? "0 10px 10px 0"
                          : "0",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <button
                style={{
                  backgroundColor: "#C8D5BB",
                  borderRadius: "10px",
                  width: "106px",
                  height: "69px",
                  fontSize: "21px",
                  marginLeft: "8px",
                  color: "#000000",
                }}
              >
                Lets Talk
              </button>
            </motion.nav>
          </div>
        </motion.header>
      </div>
    </div>
  );
}

// let clamp = (number, min, max) => Math.min(Math.max(number, min), max);
