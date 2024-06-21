import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { Globe } from './ui/Globe'
import TestShimmer from './ui/TestShimmer'


const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg
                }) => (
                    <BentoGridItem
                        key={id}
                        title={title}
                        description={description}
                        id={id}
                        className={className}
                        titleClassName={titleClassName}
                        img={img}
                        imgClassName={imgClassName}
                        spareImg={spareImg}
                    />
                ))}
            </BentoGrid>
        </section>  
    )
}

export default Grid