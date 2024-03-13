'use client';

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const Strategy = () => {
  const items = [
    {
      title: "analyse",
      description: `Na kennismaking voeren we altijd een vrijblijvende analyse uit van de staat
          van de accounts die we na eventueel akkoord in beheer zullen nemen. Mocht het
          uiteindelijk toch niet tot een samenwerking komen, even goede vrienden!`,
      src: "/strategy.jpg",
    },
    {
      title: "campagne uitwerken",
      description: `We gaan meteen aan de slag en ontwikkelen de beste strategie
          voor jouw doelen: online groei, meer zichtbaarheid en uiteindelijk meer sales. Hierna
          hoef jij niets meer te doen, wij nemen alles over en zorgen voor de best mogelijke
          resultaten.
        `,
      src: "/strategy.jpg",
    },
    {
      title: "content schieten",
      description: `Vervolgens trekken we een aantal dagen uit waarop we alle content
          voor de maand zullen schieten. Afhankelijk van de hoeveelheid foto's en video's is het
          al mogelijk om binnen dezelfde week te beginnen met posten.`,
      src: "/strategy.jpg",
    },
    {
      title: "rapporteren",
      description: `Aan het einde van elke maand ontvang je alle resultaten ten opzichte
          van de vorige maanden in een simpel doch uitgebreid downloadbaar rapport in ${<a
          href="/profile/dashboard">{"Mijn SAPHIER"}</a>}.
          Zo blijft alles dat te maken heeft met jouw online aanwezigheid moeiteloos op één plek te volgen.
          Superhandig!`,
      src: "/strategy.jpg",
    },
  ];

  const list = items.map((item) => (
    <li className="grow overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800" key={item.title}>
      <Image className="object-cover w-full h-64" width={2000} height={1000} src={item.src ?? ""} alt="strategy" />
      <div className="p-6">
        <div>
          <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">
            {item.title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {item.description}
          </p>
        </div>
      </div>
    </li>
  ));

  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-4xl font-extrabold leading-[1.5]">
        Onze werkwijze
      </h1>
      <ol className="w-full flex items-center">
        <button onClick={() => setOpen(open == 0 ? items.length - 1 : (open - 1) % items.length)} className="rotate-180 mx-16 p-4 rounded-full">
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </button>
        <div className="w-[400px] h-[300px] mx-auto">
          {list[open]}
          {list[open]}
          {list[open]}
        </div>
        <button onClick={() => setOpen((open + 1) % items.length)} className="mx-16 p-4 rounded-full">
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </button>
      </ol>
    </div>
  );
}

export default Strategy;
