"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./backgroundGradient";
import { GlobeDemo } from "./GridGlobe";
import ShimmerButton from "./ShimmerButton";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import { useState } from "react";
import TestShimmer from "./TestShimmer";
import { IoCopyOutline } from "react-icons/io5";
import { gridGradient1 } from "@/data";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  titleClassName,
  img,
  imgClassName,
  spareImg

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number
  titleClassName?: string
  img?: string
  imgClassName?: string
  spareImg?: string
}) => {

  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('mohummadasadshaikh@gmail.com')
  }


  return (
    <div
      className={cn(
        "bg-slate-900/[0.3] row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2 border border-transparent justify-between space-y-2",
        className
      )}
      // style={{ background: `${gridGradient1}` }}
    >
      <div className={` ${id === 6 && ' lg:-mb-5 flex justify-center align-middle'} h-[50%]`}>
        <div className="w-full h-full absolute ">
          {img && (<img
            src={img}
            alt={img}
            className={cn(imgClassName)}
          >
          </img>)}
        </div>

        <div className={`absolute right-10 -bottom-5 ${id === 6 && 'justify-center flex'} ${id === 5 && 'w-full opacity-100'} `}>
          {spareImg && (<img
            src={spareImg}
            alt={spareImg}
            className={'object-cover, object-center w-full h-full'}
          >
          </img>)}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative m:h-full min-h-40 lg:h-30 flex flex-col px-5 py-4 lg:p-8'
        )}>

          <div className="font-sans font-light text-neutral-600 text-xm dark:text-neutral-300 md:text-sm lg:text-base z-10">
            {description}
          </div>

          <div className={`font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg lg:text-3xl md:text-2xl max-w-96 z-10 ${id === 6 && 'mt-0 -mb-5 lg:-mb-5'} ${id === 2 && 'lg:-mt-10'} z-30`}>
            {title}
          </div>

          {id === 2 && <GlobeDemo></GlobeDemo>}

          {id === 3 && <div className="flex gap-2 absolute right-1 ">
            <div className="flex flex-col gap-1 lg:gap-2">
              {['hello.js', 'hello.js', 'hello.js'].map((item) => (
                <span className="py-4 px-1 lg:py-4 lg:px-4 md:py-3 text-xm lg:text-base opacity-50  text-white bg-[#10132E] rounded-lg" key={item}> {item} </span>
              ))}
              <span className="rounded-lg py-4 px-2 opacity-50 bg-[#10132E] text-center">  </span>
            </div>
            <div className="flex flex-col gap-1 lg:gap-2">
              <span className="rounded-lg py-4 px-2 opacity-50 bg-[#10132E] text-center">  </span>
              {['hello.js', 'hello.js', 'hello.js'].map((item) => (
                <span className="py-4 px-1 lg:py-4 lg:px-4 md:py-3 text-xm lg:text-base opacity-50 text-white bg-[#10132E] rounded-lg" key={item}> {item} </span>
              ))}
            </div>
          </div>}

          {id === 6 && (
            <div className="mt-10 relative">
              <div className="absolute bottom-10 right-0">
                <Lottie options={{
                  loop: copy,
                  autoplay: copy,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} />
              </div>

              <div className=" -top-15 z-40">
                <MagicButton title={copy ? 'email copied' : 'copy email'} position="left" icon={<IoCopyOutline />} handleClick={() => {
                  setCopy(true)
                  navigator.clipboard.writeText('mohummadasadshaikh@gmail.com')
                }}></MagicButton>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
