"use client";

import { useState } from "react";
import Anchor from "./Anchor";
import Container from "./Container";

// <Container>
//   <header className="flex flex-col lg:flex-row justify-between items-center my-5">
//     <div className="flex w-full lg:w-auto items-center justify-between">
//       <a href="/" className="text-lg"
//       ><span className="font-semibold text-slate-500">SAP</span
//       ><span className="text-slate-600">HIER</span>
//       </a>
//       <div className="block lg:hidden">
//         <button
//           // @click="open = !open" 
//           className="text-gray-800">
//           <svg
//             fill="currentColor"
//             className="w-4 h-4"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path
//               // v-show="open"
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
//             ></path>
//             <path
//               // v-show="!open"
//               fillRule="evenodd"
//               d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//     <nav
//       className="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
//     // :className="{ block: open, hidden: !open }"
//     >
//       <ul className="flex flex-col lg:flex-row lg:gap-3">
//         {items.map(item => (
//           <li key={item.title}>
//             <a
//               href={item.path}
//               className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
//             >
//               {item.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <div className="lg:hidden flex items-center mt-3 gap-4">
//         <Anchor href="#" styleName="muted" block size="md"
//         >Log in</Anchor>
//         <Anchor href="#" size="md" block>Sign up</Anchor>
//       </div>
//     </nav >
//     <div>
//       <div className="hidden lg:flex items-center gap-4">
//         <a href="#">Log in</a>
//         <Anchor href="#" size="md">Sign up</Anchor>
//       </div>
//     </div>
//   </header >
// </Container >


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
    <Container className="flex justify-between w-full">
      <a href="/#" className="flex items-center min-w-36 px-6 text-2xl underline underline-offset-4 decoration-2 decoration-slate-300">
        <span className="font-bold text-slate-500">SAP</span>
        <span className="font-semibold text-slate-600">HIER</span>
      </a>
      <ul className="flex items-center gap-8">
        {items.map(item => (
          <li key={item.title}>
            <a
              href={item.path}
              className="flex py-2 text-gray-600 hover:text-gray-900"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <a
          href="/#"
          className="hidden rounded-lg text-base font-medium text-dark dark:text-white px-6 py-2"
        >
          Mijn SAPHIER
        </a>

        <a
          href="/#"
          className="button flex items-center bg-white text-dark border-[1px] border-dark"
        >
          Mijn SAPHIER
        </a>
      </div>
    </Container>
  );
};

export default Navbar;
