import { faFacebookSquare, faTiktok, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <footer className="container bg-dark text-white p-8">
    <div className="flex justify-between gap-16 mb-8">
      <p className="text-base font-bold tracking-wide text-gray-900 grow">
        SAPHIER
      </p>
      <div className="flex items-center space-x-3">
        <a
          href="/"
          className="text-slate-50 transition-colors duration-300 hover:text-green-100"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
        </a>
        <a
          href="/"
          className="text-slate-50 transition-colors duration-300 hover:text-green-100"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="/"
          className="text-slate-50 transition-colors duration-300 hover:text-green-100"
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a
          href="/"
          className="text-slate-50 transition-colors duration-300 hover:text-green-100"
        >
          <FontAwesomeIcon icon={faTiktok} size="lg" />
        </a>
      </div>
    </div>
    <div className="flex flex-col-reverse justify-between pt-4 border-t lg:flex-row">
      <p className="text-sm text-teal-50">
        © Copyright 2020 SAPHIER Inc. All rights reserved.
      </p>
      <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <li>
          <a
            href="/"
            className="text-sm text-teal-50 transition-colors duration-300 hover:text-green-100"
          >
            F.A.Q
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-sm text-teal-50 transition-colors duration-300 hover:text-green-100"
          >
            Privacy Statement
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-sm text-slate-100 transition-colors duration-300 hover:text-green-100"
          >
            Algemene Voorwaarden
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
