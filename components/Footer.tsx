import React from 'react'
import { Boxes } from './ui/BackgroundBoxes'
import { cn } from '@/utils/cn'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Footer = () => {
    return (
        <section className='flex flex-col justify-center items-center' >


            <div className="h-screen relative w-full overflow-hidden text-center bg-black-100 flex flex-col items-center justify-center gap-y-5 rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />

                <div>
                    <h1 className={cn(" md:w-[40rem] md:text-5xl text-3xl font-extrabold text-white relative z-20 word ")}>
                        Ready to take your digital presence to the next level?
                    </h1>
                    <p className="text-center mt-4 text-neutral-300 text-2xl relative z-20">
                        Reach out to me now so I can help you achieve your goals.
                    </p>
                </div>


                <button className="z-21 bg-slate-900/[0.9] px-6 py-4 border border-transparent dark:text-white sm:text-[20px] text-[25px] text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex justify-center items-center gap-x-4 mt-5">
                    <span>
                        Contact Me Now
                    </span>
                    <FaLocationArrow />
                </button>

                <div className='flex justify-start mt-[200px] z-20'>
                    <div className='self-start mr-auto'>
                        <span className='font-bold text-xl'>
                            Copyrigt 2024 Asaad Shaikh
                        </span>
                    </div>

                    <div className='flex'>
                        {socialMedia.map((item) => (
                            <a href="">
                                <img src={item.img} alt={item.img} />
                            </a>
                        ))}
                    </div>
                </div>


            </div>


        </section>
    )
}

export default Footer