'use client'

const Navbar = () => {
  const items = [
    {
      title: 'Werkwijze',
      path: '/strategies'
    },
    {
      title: 'Diensten',
      path: '/services'
    },
    {
      title: 'Over ons',
      path: '/about-us'
    },
    {
      title: 'Contact',
      path: '/contact'
    }
  ]

  return (
    <header className="border-b-[1px] border-slate-200 shadow-md flex justify-between px-[2rem] py-[1rem] text-base">
      <a href="/#" className="flex items-center  text-2xl underline underline-offset-4 decoration-2 decoration-slate-300 font-mono">
        <span className="font-bold text-slate-500">SAP</span>
        <span className="font-semibold text-slate-600">HIER</span>
      </a>
      <ul className="items-center gap-8 w-1/2 hidden min-w-fit md:flex whitespace-nowrap">
        {items.map(item => (
          <li key={item.title} className="hover:bg-slate-50 hover:scale-110 hover:shadow-md duration-300 px-2 grow flex justify-center rounded-md">
            <a
              href={item.path}
              className="flex py-2 text-primary hover:text-slate-800"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/#"
        className="relative button m-0 flex items-center bg-teal-50 text-dark border-[1px] border-dark font-mono swipe border-opacity-50 hover:border-opacity-100"
      >
        <span className="relative">Mijn SAPHIER</span>
      </a>
    </header>
  )
}

export default Navbar
