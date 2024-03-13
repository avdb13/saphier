import Image from "next/image";
import Anchor from "./Anchor";

const Description = () => (
  <div className="bg-transparent flex justify-between gap-4 relative">
    <div className=" w-full h-72 relative">
      <Image src="/cta.jpg" fill alt="cta" className="absolute grayscale-[50%] object-cover border-y-4 border-primary" />
      <div className="absolute w-full h-full cta-gradient" />
      <div className="center-absolute flex flex-col items-center justify-center gap-8 h-full">
        <p className="text-dark p-4 shadow-cta rounded-md bg-white font-semibold mt-4 text-lg text-center w-2/3">
          Bij SAPHIER gelden alleen topresultaten. Sterker nog, wij zijn er zo zeker van dat wij je online
          aanwezigheid kunnen laten groeien, dat dit deel is van onze <a href="bottom">zekerheidsgarantie!</a>
        </p>
        <Anchor href="#" styleName="outline" className="w-fit uppercase font-semibold py-2 px-4 collision">
          Ontdek wat SAPHIER jouw bedrijf kan bieden
        </Anchor>
      </div>
    </div>
  </div>
);

export default Description;
