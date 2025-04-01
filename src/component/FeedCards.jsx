import React from 'react'
import { useSelector } from 'react-redux';

const FeedCards = () => {
    const feed = useSelector((store=> store.feed))
  return (
    <div>
        <div className="carousel rounded-box w-64">
          {feed.map((e)=>
          <div className="carousel-item w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        className="w-full"
        alt="Tailwind CSS Carousel component" />
        <h1>{e.name}</h1>
        <h1>{e.age}</h1>
    </div>)}
        
        </div>
  </div>
  )
}

export default FeedCards