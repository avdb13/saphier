import Image from "next/image";
import React, { ComponentProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignalMessenger, faIdeal, faMeetup, faFirstdraft } from "@fortawesome/free-brands-svg-icons";
import { faWandMagicSparkles, faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import Stroke from "./Stroke";

const Hero = () => {
  return (
    <div className="w-full flex flex-wrap sm:justify-center sm:gap-8">
      <Stroke />
      <div>
        <div className="flex flex-col grow items-center justify-evenly py-12 h-full">
        <p className="max-w-[480px] text-center">
          actief zijn op sociale media en de juiste content plaatsen is cruciaal
          voor uitbreiding van je merk & klantbereik,<wbr /> maar kan ingewikkeld & tijdrovend
          zijn. laat ons dit voor jou overnemen, zodat jij je kan focussen op de dingen
          die ertoe doen.
        </p>
        <div className="flex items-start justify-center gap-2 p-8 grow">
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
        <div className="flex flex-col gap-4 text-[#464646] w-full">
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
      <Image src="/hero.jpg" width={400} height={500} alt="businessman" className="shadow-frame h-[400px] w-[400px] mb-[15px]" />
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

export default Hero;
