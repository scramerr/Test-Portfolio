"use client";
import React, { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import CanvasRevealEffect from "./ui/CanvasRevealEffect";


function MyApproach() {
  return (
    <section className="mt-[12rem]">
      <div className="flex justify-center">
        <h1 className="sm:text-3xl lg:text-5xl md:text-4xl font-extrabold">
          My {"  "}
          <span className="text-purple">
            Approach
          </span>
        </h1>
      </div>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center dark:bg-black-100 w-full gap-4 mx-auto px-8">
        <Card
          title="Planning And Hello"
          icon={<AceternityIcon
            order="Phase 1" />}
          description=" First things first, I do a big hello after carefully planning out necessary hello and hellos and then execute neatly the big hello while taking into account the actual hello world concepts "
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Helloing the World"
          icon={<AceternityIcon order="Phase 2" />}
          description=" First things first, I do a big hello after carefully planning out necessary hello and hellos and then execute neatly the big hello while taking into account the actual hello world concepts "

        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Helloing The World Pt2 ANd dna amd"
          icon={<AceternityIcon
            order="Phase 3" />}
          description=" First things first, I do a big hello after carefully planning out necessary hello and hellos and then execute neatly the big hello while taking into account the actual hello world concepts "
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className=" flex flex-col justify-center items-center">

          <div className="flex flex-col items-center justify-center dark:text-white opacity-0 group-hover/canvas-card:opacity-100 z-10 text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            <div className="flex justify-center items-center text-center font-extrabold lg:text-3xl text-2xl">
              <h1>
                {title}
              </h1>
            </div>

            <div className="flex justify-center items-center align-middle font-bold text-center mt-10">
              {description}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const AceternityIcon = ({ order, }: { order: string, }) => {
  return (
    <div className="absolute top-20">
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-bold text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-8 px-10 lg:text-3xl text-2xl">
        {order}
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


export default MyApproach