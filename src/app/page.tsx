import Hero from '@/components/Hero'
import Description from '@/components/Description'
import Strategy from '@/components/Strategy'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Portfolio from '@/components/Portfolio'
import ContactForm from '@/components/Contact'

config.autoAddCss = false

// type SocialMediaIcon = {
//   // example: https://fontawesome.com/search?q=facebook&o=r&f=brands
//   iconName: string,
//   // example: https://www.facebook.com/mrbeastofficial
//   href: string,
// }

// type TrustedByIcon = {
//   width: number,
//   height: number,
//   // example: https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-4-logo-png-transparent.png
//   href: string,
// }

// type Config = {
//   email: string,
//   phoneNumber: string,
//   socialMedia: Array<SocialMediaIcon>,
//   trustedBy: Array<TrustedByIcon>,
// }

const Page = () => {
  return (
    <main className="p-[1rem] md:p-[2rem] lg:p-[4rem] max-w-screen-lg overflow-x-hidden mx-auto">
      <Hero />
      <Portfolio />
      <Description />
      <Strategy />
      <ContactForm />
    </main>
  )
}

export default Page
