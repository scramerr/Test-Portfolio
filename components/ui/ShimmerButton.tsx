
import React from 'react'


interface Props {
    title: string
    icon?: React.ReactNode
    position: string
    otherClasses?: string
    handleClick?: () => void
}

const ShimmerButton: React.FC<Props> = ({ title, icon, position, otherClasses, handleClick }) => {
    return (
        <button className={` inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(50deg,#000103,40%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors md:w-60 md:mt-10 gap-4 ${otherClasses} `} onClick={handleClick} >
            {position === 'left' && icon}
            <div>
                {title}
            </div>
            {position === 'right' && icon}
        </button>
    )
}

export default ShimmerButton

