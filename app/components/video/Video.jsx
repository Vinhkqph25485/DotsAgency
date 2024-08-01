import React from 'react'

export const Video = () => {
  return (
    <div className=''>
        <video className='w-full' src="https://www.youtube.com/embed/dKzsno-LxOA?si=5Ww4siAOj3PYHkLk" controls autoPlay></video>
    </div>
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/dKzsno-LxOA?si=5Ww4siAOj3PYHkLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  )
}
