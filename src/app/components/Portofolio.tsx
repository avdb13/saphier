'use client';

import 'pure-react-carousel/dist/react-carousel.es.css';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from "pure-react-carousel";

const Portofolio = () => {
  return (
    <div className="flex flex-col items-center pb-16">
      <h1 className={`pt-8 text-7xl text-[#333] font-bold`}>Portfolio</h1>
      <CarouselProvider
        tag="ul"
        className="flex justify-center items-center scale-75 mx-16 sm:scale-50 sm:-my-24"
        totalSlides={7}
        naturalSlideWidth={800}
        naturalSlideHeight={450}
        currentSlide={0}
        infinite
        isPlaying={true}
      >
        <ButtonBack>
          <FontAwesomeIcon className="p-8" icon={faArrowLeft} size="2xl" />
        </ButtonBack>
        <Slider className="min-w-[800px] min-h-[225px] grow" classNameAnimation="carousel">
          {Array.from(Array(7).keys()).map(i => (
            <Slide classNameVisible={"scale-100 grayscale-0 blur-none"} classNameHidden={"scale-75 grayscale blur-md"} key={i} index={i} className={`gallery`}>
              <Image src={`/demos/preview-${i + 1}.jpg`} width={800} height={450} loading="eager" alt="preview" />
            </Slide>
          ))}
        </Slider>
        <ButtonNext>
          <FontAwesomeIcon className="p-8" icon={faArrowRight} size="2xl" />
        </ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default Portofolio;
