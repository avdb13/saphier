import Anchor from './Anchor'

const Description = () => (
  <div className="flex justify-between gap-4 mb-[4rem]">
    <div className=" w-full ">
      <div className=" flex flex-col items-center justify-center gap-8 h-full">
        <p className="text-dark p-4 shadow-cta rounded-md bg-white font-semibold text-2xs text-center">
          Bij SAPHIER gelden alleen topresultaten. Sterker nog, wij zijn er zo zeker van dat wij je online
          aanwezigheid kunnen laten groeien, dat dit deel is van onze <a href="bottom">zekerheidsgarantie!</a>
        </p>
        <Anchor href="#" styleName="outline" className="w-fit uppercase font-semibold py-2 px-4 collision">
          Ontdek wat SAPHIER jouw bedrijf kan bieden
        </Anchor>
      </div>
    </div>
  </div>
)

export default Description
