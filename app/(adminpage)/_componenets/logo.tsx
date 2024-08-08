import React from 'react'
import Image from "next/image"
function logo() {
  return (
    <div>
      <Image 
            height={100}
            width={100}
            alt="logo"
            src="/backgroundlessAi.png"
        />
    </div>
  )
}

export default logo




