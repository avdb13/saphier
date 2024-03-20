'use client'

import { faListCheck, faMagnifyingGlass, faCameraRetro, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type Ref, useEffect, useMemo, useRef, useState } from 'react'

import One from 'public/strategy-1.jpg'
import Two from 'public/strategy-2.jpg'
import Three from 'public/strategy-3.jpg'
import Four from 'public/strategy-4.jpg'

const Strategy = () => {
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
    <div ref={ref} className="flex flex-col items-center mb-[4rem]">
      <div className={`pt-[0.75rem] uppercase mx-auto text-2xl font-handwritten ${isVisible ? 'visible' : 'hidden'}`}>
        <span className={'title-left font-medium text-slate-900'}>
          onze
        </span>
        {' '}
        <span className={'title-right font-bold text-slate-700'}>
          werkwijze
        </span>
      </div>

      <Timeline />
    </div>
  )
}

const Timeline = () => {
  const items = useMemo(() => (
    [
      {
        title: 'analyse',
        description: <>Na kennismaking voeren we altijd een vrijblijvende analyse uit van de staat
          van de accounts die we na eventueel akkoord in beheer zullen nemen. Mocht het
          uiteindelijk toch niet tot een samenwerking komen, even goede vrienden!</>,
        src: One,
        icon: faMagnifyingGlass
      },
      {
        title: 'campagne uitwerken',
        description: <>We gaan meteen aan de slag en ontwikkelen de beste strategie
          voor jouw doelen: online groei, meer zichtbaarheid en uiteindelijk meer sales. Hierna
          hoef jij niets meer te doen, wij nemen alles over en zorgen voor de best mogelijke
          resultaten.
        </>,
        src: Two,
        icon: faListCheck
      },
      {
        title: 'content schieten',
        description: <>Vervolgens trekken we een aantal dagen uit waarop we alle content
          voor de maand zullen schieten. Afhankelijk van de hoeveelheid foto&apos;s en video&apos;s is het
          al mogelijk om binnen dezelfde week te beginnen met posten.</>,
        src: Three,
        icon: faCameraRetro
      },
      {
        title: 'rapporteren',
        description: <>Aan het einde van elke maand ontvang je alle resultaten ten opzichte
          van de vorige maanden in een simpel doch uitgebreid downloadbaar rapport in <a
          href="/profile/dashboard">{'Mijn SAPHIER'}</a>.
          Zo blijft alles dat te maken heeft met jouw online aanwezigheid moeiteloos op één plek te volgen.
          Superhandig!</>,
        src: Four,
        icon: faCommentDots
      }
    ]
  ), [])

  return (
    <ol className="timeline text-2xs">
      {items.map(({ title, description, icon }) => (
        <li key={title} className="timeline-event fade-up delay-3s timeline-event-1">
          <div className="timeline-event-icon">
            <FontAwesomeIcon icon={icon} size="xl" />
          </div>
          <div className="timeline-event-date" />
          <div className="timeline-event-content">
            <div className="timeline-event-title font-mono">
              {title}
            </div>
            <div className="timeline-event-description">
              <p>{description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Strategy
