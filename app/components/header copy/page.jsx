import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
// import { useEffect } from "react";

let tabs = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "service", label: "Service" },
  { id: "blogs", label: "Blogs" },
];

function useBoundedScroll(threshold) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1]
  );

  // useEffect(() => {
  //   return scrollY.on("change", (current) => {
  //     let previous = scrollY.getPrevious();
  //     let diff = current - previous;
  //     let newScrollYBounded = scrollYBounded.get() + diff;

  //     scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
  //   });
  // }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  let { scrollYBoundedProgress } = useBoundedScroll(400);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <div className="flex w-screen flex-1 overflow-hidden text-slate-600 absolute z-[1002]">
      <div className="z-0 flex-1 overflow-y-scroll">
        <motion.header
          // style={{
          //   height: useTransform(
          //     scrollYBoundedProgressDelayed,
          //     [0, 1],
          //     [80, 50]
          //   ),
          //   backgroundColor: "transparent",
          // }}
          className="fixed inset-x-0 flex h-20 shadow backdrop-blur-md"
        >
          <div className="flex w-full items-center justify-between px-8">
            <motion.p
              // style={{
              //   scale: useTransform(
              //     scrollYBoundedProgressDelayed,
              //     [0, 1],
              //     [1, 0.9]
              //   ),
              // }}
              className="flex origin-left items-center text-xl text-white font-semibold uppercase"
            >
              <span className="w-6 h-6 rounded-full bg-white mr-2"></span>
              <span className="flex flex-col justify-center items-start">
                <span
                  style={{ lineHeight: "18px" }}
                  className="text-lg tracking-[-.075em]"
                >
                  DOTS
                </span>
                <span
                  style={{ lineHeight: "18px" }}
                  className="text-lg tracking-[-.075em]"
                >
                  AGENCY
                </span>
              </span>
            </motion.p>
            <motion.nav
              // style={{
              //   opacity: useTransform(
              //     scrollYBoundedProgressDelayed,
              //     [0, 1],
              //     [1, 0]
              //   ),
              // }}
              className="flex space-x-4 text-sm font-medium text-slate-400"
            >
              <div className="flex items-center">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    style={{
                      backgroundColor: "#ffffff",
                      width: "80px",
                      height: "36px",
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
                  width: "80px",
                  height: "36px",
                  marginLeft: "12px",
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

let clamp = (number, min, max) => Math.min(Math.max(number, min), max);