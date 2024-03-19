import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center font-mono">
      <h1 className={`pt-8 text-7xl text-[#333] font-bold py-8`}>Overtuigd?</h1>
      <div
        className="flex items-center gap-8 p-8 mb-16 bg-white rounded-lg form overflow-hidden mx-8"
      >
        <div className="flex flex-col justify-between p-8 bg-teal-50 basis-1/2 rounded-md">
          <div className="pb-4 mx-auto">
            <h1 className="text-4xl font-bold">Kom direct in contact!</h1>
            <p className="text-lg font-medium text-slate-500">Ontvang spontaan advies van onze professionals</p>
          </div>
          <ul className="px-4 text-slate-600 font-semibold gap-2 grow">
            <li className="flex items-center py-1">
              <FontAwesomeIcon icon={faEnvelope} className=" mr-2 border-2 p-1 rounded-md" size="lg" />
              <span>example@gmail.com</span>
            </li>
            <li className="flex items-center py-1">
              <FontAwesomeIcon icon={faPhone} className=" mr-2 border-2 p-1 rounded-md" size="lg" />
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
    </div>
  )
}

export default ContactForm;
