import Hero from './components/Hero'
import Description from './components/Description'
import Strategy from './components/Strategy'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Portofolio from './components/Portofolio'
import ContactForm from './components/Contact'

config.autoAddCss = false

const Home = () => (
  <main className="p-[2rem] mx-auto">
    <Hero />
    <Portofolio />
    <Description />
    <Strategy />
    <ContactForm />
  </main>
)

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

export default Home
