"use client";

const Navbar = () => {
  const items = [
    {
      title: "Werkwijze",
      path: "/strategies",
    },
    {
      title: "Diensten",
      path: "/services",
    },
    {
      title: "Over ons",
      path: "/about-us",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="border-b-[2rem] border-white p-8 py-4 container flex justify-between w-full bg-slate-100 hue-rotate-15">
      <a href="/#" className="flex items-center min-w-36 px-6 text-2xl underline underline-offset-4 decoration-2 decoration-slate-300">
        <span className="font-bold text-slate-500">SAP</span>
        <span className="font-semibold text-slate-600">HIER</span>
      </a>
      <ul className="items-center gap-8 w-1/2 hidden lg:flex">
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
      <div className="flex items-center gap-2 cut login-button">
        <a
          href="/#"
          className="relative flex items-center justify-center font-medium px-8 py-2 top-[0.2em] text-slate-700 z-10 hover:text-light duration-500"
        >
          Mijn SAPHIER
        </a>
      </div>
    </header>
  );
};

export default Navbar;
