import Image from "next/image";
import React, { ComponentProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignalMessenger, faIdeal, faMeetup, faFirstdraft } from "@fortawesome/free-brands-svg-icons";
import { faWandMagicSparkles, faSwatchbook } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="w-full flex flex-wrap sm:justify-center sm:gap-8">
      <div className="relative mr-[15px] grow">
        <Image src="/hero.jpg" width={400} height={500} alt="businessman" className="shadow-frame" />
        <Grid className="absolute -bottom-8 -left-8 z-[-1]" />
      </div>
      <div className="flex flex-col gap-8 grow items-center">
        <h1 className="text-4xl font-extrabold leading-[1.5]">
          Val op met content die herinnerd wordt
        </h1>
        <p className="max-w-[480px] text-center">
          actief zijn op sociale media en de juiste content plaatsen is cruciaal
          voor uitbreiding van je merk & klantbereik,<wbr /> maar kan ingewikkeld & tijdrovend
          zijn. laat ons dit voor jou overnemen, zodat jij je kan focussen op de dingen
          die ertoe doen.
        </p>
        <div className="flex items-center justify-center gap-2 p-4">
          <a
            href="/#"
            className="button bg-primary text-white border-[1px] border-primary"
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} className=" mr-2" />
            Werkwijze
          </a>
          <a
            href="/#"
            className="button flex items-center bg-white text-dark border-[1px] border-dark"
          >
            <FontAwesomeIcon icon={faSwatchbook} className=" mr-2" />
            Portofolio
          </a>
        </div>
        <div className="flex flex-col gap-4 text-[#464646] w-1/2">
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
  );
};


const Grid = (props: ComponentProps<"span">) => (
  <span {...props}>
    <svg
      width="93"
      height="93"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
    </svg>
  </span>
)

export default Hero;
