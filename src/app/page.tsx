'use client';

import Image from "next/image";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Strategy from "./components/Strategy";
import Container from "./components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Draft = () => {
  // <main>
  //   <div>
  //     <h1>Val op met content die herinnerd wordt</h1>
  //     <p>
  //       Actief zijn op sociale media en de juiste content plaatsen is cruciaal voor uitbreiding van je merk en
  //       klantbereik,
  //       maar kan ingewikkeld en tijdrovend zijn. Laat ons dit voor jou overnemen, zodat jij je kan focussen op de dingen
  //       die
  //       ertoe doen
  //     </p>
  //   </div>
  //   <div>
  //     <p>
  //       Bij SAPHIER gelden alleen topresultaten. Sterker nog, wij zijn er zo zeker van dat wij je online
  //       aanwezigheid kunnen laten groeien, dat dit deel is van onze <a href="bottom">zekerheidsgarantie!</a>
  //     </p>
  //     <h2>Ontdek wat SAPHIER jouw bedrijf kan bieden <a>=&gt; =&gt; =&gt;</a></h2>
  //   </div>
  //   <div>
  //     <h1>proces</h1>
  //     <ol>
  //       <li>
  //         <h2>analyse</h2>
  //         <p>Na kennismaking voeren we altijd een vrijblijvende analyse uit van de staat
  //           van de accounts die we na eventueel akkoord in beheer zullen nemen. Mocht het
  //           uiteindelijk toch niet tot een samenwerking komen, even goede vrienden!</p>
  //       </li>
  //       <li>
  //         <h2>campagne uitwerken</h2>
  //         <p>We gaan meteen aan de slag en ontwikkelen de beste strategie
  //           voor jouw doelen: online groei, meer zichtbaarheid en uiteindelijk meer sales. Hierna
  //           hoef jij niets meer te doen, wij nemen alles over en zorgen voor de best mogelijke
  //           resultaten.
  //         </p>
  //       </li>
  //       <li>
  //         <h2>content schieten</h2>
  //         <p>Vervolgens trekken we een aantal dagen uit waarop we alle content
  //           voor de maand zullen schieten. Afhankelijk van de hoeveelheid foto&apos;s en video&apos;s is het
  //           al mogelijk om binnen dezelfde week te beginnen met posten.</p>
  //       </li>
  //       <li>
  //         <h2>Rapporteren</h2>
  //         <p>Aan het einde van elke maand ontvang je alle resultaten ten opzichte
  //           van de vorige maanden in een simpel doch uitgebreid downloadbaar rapport in <a
  //             href="/profile/dashboard">Mijn SAPHIER</a>.
  //           Zo blijft alles dat te maken heeft met jouw online aanwezigheid moeiteloos op één plek te volgen.
  //           Superhandig!</p>
  //       </li>
  //     </ol>
  //   </div>
  //   <div>
  //     <h1>Wat wij doen</h1>
  //     <p></p>
  //     <ul>
  //       <li>
  //         <h2>
  //         </h2>
  //         <p></p>
  //       </li>
  //     </ul>
  //   </div>
  //   <div>
  //     <h1>Een greep uit onze portfolio.
  //     </h1>
  //     <ul>
  //       <button>
  //         <img />
  //       </button>
  //     </ul>
  //   </div>
  //   <div>
  //     <h1>Kom nog vandaag in contact</h1>
  //     <form>
  //       <input type="text" placeholder="voornaam" />
  //       <input type="text" placeholder="achternaam" />
  //       <input type="text" placeholder="telefoonnummer" />
  //       <input type="text" placeholder="service" />
  //       <input type="text" placeholder="budget" />
  //       <textarea placeholder="beschrijf jouw project" />
  //     </form>
  //   </div>
  // </main>
}
const Home = () => (
  <>
    <Container className="[&>div]:pb-16 py-0 pb-32">
      <Hero />
      <Description />
      <ContactForm />
    </Container>
  </>
)

const ContactForm = () => {
  return (
    <div
      className="w-3/4 mx-auto h-full flex items-center gap-8 p-8 bg-white rounded-lg form overflow-hidden"
    >
      <div className="bg-teal-50 basis-1/2 p-4 rounded-md h-full">
        <div className="pb-4">
          <h1 className="text-2xl font-bold">Kom direct in contact!</h1>
          <p className="text-lg font-medium text-slate-500">Ontvang spontaan advies van onze professionals</p>
        </div>
        <ul className="flex flex-col text-slate-600 font-semibold gap-2">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className=" mr-2 border-2 p-1 rounded-md" />
            <span>example@gmail.com</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className=" mr-2 border-2 p-1 rounded-md" />
            <span>+31 06255 50183</span>
          </li>
        </ul>
      </div>
      <form method="post" action="#" className="basis-1/2 h-full grid grid-cols-2 grid-rows-5 gap-4">
        <input
          className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Naam"
        />
        <input
          className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Bedrijfsnaam"
        />
        <input
          className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
        />
        <input
          className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Telefoonnummer"
        />
        <textarea
          className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline col-span-2 row-span-2"
          id="email"
          placeholder="Beschrijf jouw project ..."
        />
        <button
          className="w-full bg-dark hover:bg-slate-700 text-white text-sm py-2 px-4 font-semibold rounded focus:shadow-outline col-span-2"
          type="button"
        >
          Bevestig
        </button>
      </form>
    </div>
  )
}

const Faq = () => {

}

const Question = () => {

}

export default Home;
