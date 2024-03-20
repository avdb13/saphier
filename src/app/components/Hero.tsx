import Image from 'next/image'
import React, { type ComponentProps } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignalMessenger, faIdeal, faMeetup, faFirstdraft } from '@fortawesome/free-brands-svg-icons'
import { faWandMagicSparkles, faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import Stroke from './Stroke'

// <div className='bg-blend-darken min-w-[64rem] rounded-md'>
// </div>
//   <Stroke />
// </div>

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      <div className='flex flex-wrap gap-[2rem] justify-evenly items-center grow mb-[4rem]'>
        <div className='text-[2.5rem] leading-snug font-extrabold text-[#2b2d42] py-[4rem] w-screen bg-slate-100'>
          <div className='mx-auto w-fit'>val op met<br /> content die<br /> <span className='fancy hue-rotate-[30deg] saturate-[.3]'>herinnerd wordt.</span></div>
        </div>
        <Image src={'/hero.jpg'} width={300} height={300} alt="businessman" className="shadow-frame mb-[15px] mix-blend-multiply" />
      </div>
      <div className="flex flex-col grow items-center justify-evenly h-full">
        <p className="px-[1rem] text-center text-base sm:text-xl">
          actief zijn op sociale media en de juiste content plaatsen is cruciaal
          voor uitbreiding van je merk & klantbereik,<wbr /> maar kan ingewikkeld & tijdrovend
          zijn. laat ons dit voor jou overnemen, zodat jij je kan focussen op de dingen
          die ertoe doen.
        </p>
        <div className="flex items-start justify-center gap-2 p-8 grow">
          <a
            href="/#"
            className="button raise  bg-primary text-white border-[1px] border-primary"
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} className=" mr-2" />
            Werkwijze
          </a>
          <a
            href="/#"
            className="button raise  flex items-center bg-white text-dark border-[1px] border-dark"
          >
            <FontAwesomeIcon icon={faSwatchbook} className=" mr-2" />
            Portfolio
          </a>
        </div>
        <div className="flex flex-col gap-4 text-[#464646] w-full py-8">
          <h6 className="flex gap-2 items-center">
            <span className="inline-block h-px bg-gray grow"></span>
            <span className="text-sm text-center font-semibold px-4">Vertrouwd door</span>
            <span className="inline-block h-px bg-gray grow"></span>
          </h6>
          <div className="flex items-center justify-evenly space-x-4">
            {[faSignalMessenger, faMeetup, faIdeal, faFirstdraft].map(icon => (
              <FontAwesomeIcon icon={icon} key={icon.iconName} className="text-dark" size="2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Grid = (props: ComponentProps<'span'>) => (
  <span {...props}>
    <svg
      width="93"
      height="93"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill="#b85b24" />
      <circle cx="2.5" cy="24.5" r="2.5" fill="#b85b24" />
      <circle cx="2.5" cy="46.5" r="2.5" fill="#b85b24" />
      <circle cx="2.5" cy="68.5" r="2.5" fill="#b85b24" />
      <circle cx="2.5" cy="90.5" r="2.5" fill="#b85b24" />
      <circle cx="24.5" cy="2.5" r="2.5" fill="#b85b24" />
      <circle cx="24.5" cy="24.5" r="2.5" fill="#b85b24" />
      <circle cx="24.5" cy="46.5" r="2.5" fill="#b85b24" />
      <circle cx="24.5" cy="68.5" r="2.5" fill="#b85b24" />
      <circle cx="24.5" cy="90.5" r="2.5" fill="#b85b24" />
      <circle cx="46.5" cy="2.5" r="2.5" fill="#b85b24" />
      <circle cx="46.5" cy="24.5" r="2.5" fill="#b85b24" />
      <circle cx="46.5" cy="46.5" r="2.5" fill="#b85b24" />
      <circle cx="46.5" cy="68.5" r="2.5" fill="#b85b24" />
      <circle cx="46.5" cy="90.5" r="2.5" fill="#b85b24" />
      <circle cx="68.5" cy="2.5" r="2.5" fill="#b85b24" />
      <circle cx="68.5" cy="24.5" r="2.5" fill="#b85b24" />
      <circle cx="68.5" cy="46.5" r="2.5" fill="#b85b24" />
      <circle cx="68.5" cy="68.5" r="2.5" fill="#b85b24" />
      <circle cx="68.5" cy="90.5" r="2.5" fill="#b85b24" />
      <circle cx="90.5" cy="2.5" r="2.5" fill="#b85b24" />
      <circle cx="90.5" cy="24.5" r="2.5" fill="#b85b24" />
      <circle cx="90.5" cy="46.5" r="2.5" fill="#b85b24" />
      <circle cx="90.5" cy="68.5" r="2.5" fill="#b85b24" />
      <circle cx="90.5" cy="90.5" r="2.5" fill="#b85b24" />
    </svg>
  </span>
)

export default Hero
