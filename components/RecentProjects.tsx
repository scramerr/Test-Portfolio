import React from 'react'
import { ThreeDCardDemo } from './ui/3d-card-demo'
import PinContainer from './ui/ThreeDPin'
import { title } from 'process'
import { projects } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { link } from 'fs'
import { FaLocationArrow } from 'react-icons/fa'


const RecentProjects = () => {
  return (
    <div className='mt-40' id='projects'>

      <div className='heading'>
      A Small Selection Of {' '}
        <span className='text-purple'>
          Recent Projects
        </span>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-x-24 p-0 mt-0'>
       {projects.map(({id, title, des, img, iconLists, link}) => (  
       <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
          <PinContainer title={link} href={link}> 
            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
              <div className='relative w-full h-full overflow-hidden lg:rounded-[8px] bg-slate-900/[0.3] '>
                <img src="/bg.png" alt="/bg.png" />
              </div>
              <img className='z-10 absolute top-0' src={img} alt={title} />
            </div>

            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
              {title}
            </h1>

            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
              {des}
            </p>

            <div className='flex items-center justify-between mt-4'>
              <div className='flex justify-center'>
                {iconLists.map((icon, index) => (
                  <div 
                  key={icon} 
                  className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                  style={{transform: `translateX(-${5 * index * 2}px)`}}
                  >
                    <img src={icon} alt={icon} className='p-2' /> 
                  </div>
                ))}
              </div>

              <div className='flex items-center justify-center gap-2'>
                <span>
                  Check Live Site
                </span>
                <FaLocationArrow color='CBACF9'></FaLocationArrow>
              </div>
            </div>
          </PinContainer>
       </div>
      ))}
      </div>

      {/* <div className='text-5xl font-extrabold'>
        A Small Selection of Recent Projects
      </div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-3'>
        <ThreeDCardDemo title='REAL HELLO JS WITH HELLO JS' description='hello js made entirely from hello js powered by hello js. Fortnite battlepass'></ThreeDCardDemo>

        <ThreeDCardDemo title='REAL HELLO JS WITH HELLO JS' description='hello js made entirely from hello js powered by hello js. Fortnite battlepass'></ThreeDCardDemo>

        <ThreeDCardDemo title='REAL HELLO JS WITH HELLO JS' description='hello js made entirely from hello js powered by hello js. Fortnite battlepass'></ThreeDCardDemo>


        <ThreeDCardDemo title='REAL HELLO JS WITH HELLO JS' description='hello js made entirely from hello js powered by hello js. Fortnite battlepass'></ThreeDCardDemo>
      </div> */}

    </div>
  )
}

export default RecentProjects






