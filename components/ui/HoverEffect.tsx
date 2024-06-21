"use client"

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./MovingBorders";

const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title?: string;
    desc?: string;
    link?: Url;
    id?: number;
    thumbnail?: string

  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2  py-10 gap-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-center gap-x-8">
              <div items-center justify-center align-middle text-center>
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="text-2xl font-bold md:font-extrabold">{item.title}</div>
                <div>{item.desc}</div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-900/[0.4] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};


export default HoverEffect