'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import Slider, { type Settings } from 'react-slick'
import { useState } from 'react'

const Portofolio = () => {
  const [number, setNumber] = useState(0)

  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    easing: 'cubic-bezier(0.75, 0, 0.25, 1)',
    arrows: false,
    beforeChange: (n) => { setNumber(n + 1) }
  }

  return (
    <div id="portfolio" className="slider-container mb-[4rem]">
      <Slider {...settings}>
        {Array.from(Array(7).keys()).map(i => (
          <div key={i}>
            <Image src={`/demos/preview-${i + 1}.jpg`} width={400} height={225} loading="eager" alt="preview" className={`${number === i ? 'blur-none grayscale-none scale-90' : 'blur-md grayscale scale-75'} duration-1000`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
// classNameVisible={'p-[1rem] grayscale-0 blur-none duration-500'} classNameHidden={'grayscale blur-md duration-1000'} key={i} index={i} className={'gallery'}

export default Portofolio
