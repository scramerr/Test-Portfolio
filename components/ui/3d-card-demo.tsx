"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export const ThreeDCardDemo = ({
    title,
    className,
    description,
    icons,
    link,

}: {
    title?: string,
    className?: string,
    description?: string,
    icons?: string,
    link?: string
}) => {

    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:min-w-[20rem] lg:max-w-[35rem] md:[w-20] h-auto rounded-xl p-6 border  ">

                <CardItem
                    translateZ="90"
                    rotateX={0}
                    rotateZ="0"
                    className="w-full mt-4"
                >
                    <Image
                        src="/b1.svg"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <div className="flex justify-center align-middle text-center">
                    <CardItem
                        translateY="0"
                        translateZ="80"
                        className=" justify-center font-extrabold text-2xl text-neutral-600 dark:text-white mb-[2rem] mt-[3.2rem]"
                    >
                        {title}
                    </CardItem>
                </div>

                <CardItem
                    className="w-full"
                    translateZ="0"
                    translateY="0"
                >
                    {description}
                </CardItem>

            </CardBody>
        </CardContainer>
    );
}
