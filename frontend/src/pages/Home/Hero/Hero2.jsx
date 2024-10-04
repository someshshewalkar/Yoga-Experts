import React from 'react'
import bgImg from '../../../assets/home/banner-2.jpg'

const Hero2 = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="mih-h-screen flex justify-start pl-11 text-white bg-black bg-opacity-60 pt-72 pb-40">
        <div  className="">
          <div className="space-y-4 ">
            <p className="md:text-4xl text-2xl">We provide</p>
            <h1 className="md:text-7xl text-4xl font-bold">
              Best Yoga Course Online
            </h1>
            <div className="md:w-1/2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis labore voluptatum doloribus nihil! Fugiat tempore
                modi aliquid quam suscipit numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Hero2