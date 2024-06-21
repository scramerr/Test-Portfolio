"use client"
import ShimmerButton from "./ShimmerButton";

import React from 'react'

const TestShimmer = () => {
  return (
    <div>
        <ShimmerButton title="click me" position="left" handleClick={() => {console.log('asdas')}}>

        </ShimmerButton>
    </div>
  )
}

export default TestShimmer