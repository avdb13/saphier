'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import Slider, { type Settings } from 'react-slick'
import { Ref, useEffect, useRef, useState } from 'react'

const Portfolio = () => {
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

  const [isIntersecting, setIntersecting] = useState(false)
  const ref: Ref<HTMLDivElement> = useRef(null)

  const useIsVisible = (ref: any) => {
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => { (entry.isIntersecting && !isIntersecting) ? setIntersecting(true) : setIntersecting(false) })
      if (ref) {
        observer.observe(ref.current)
      }

      return () => {
        observer.disconnect()
      }
    }, [ref])

    return isIntersecting
  }

  const isVisible = useIsVisible(ref)

  return (
    <div id="portfolio" className="prose md:prose-lg mx-auto mb-[4rem]" ref={ref}>
      <h1 className={`w-fit overflow-hidden flex mx-auto text-[#2b2d42] drop-shadow-md max-h-fit ${isVisible ? 'home-title' : ''}`}>
        <span className='pr-[0.2ch]'>Ons</span>
        <span className='pl-[0.2ch] text-slate-700'>portfolio</span>
      </h1>
      <div className="slider-container mb-[4rem]">
        <Slider {...settings}>
          {Array.from(Array(7).keys()).map(i => (
            <div key={i}>
              <Image src={`/demos/preview-${i + 1}.jpg`} width={400} height={225} loading="eager" alt="preview" className={`${number === i ? 'blur-none grayscale-none scale-100' : 'blur-md grayscale scale-75'} duration-1000 mx-auto w-fit h-fit`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default Portfolio
