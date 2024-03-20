import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  return (
    <div className="pb-[4rem] text-center ">
      <h1 className={'text-[2.5rem] mb-[2rem] text-center text-[#333] font-bold pb-[1rem]'}>Overtuigd?</h1>
      <div
        className="flex flex-wrap justify-center items-center form font-mono p-[1rem] gap-4"
      >
        <div className="flex flex-col justify-between bg-teal-50 basis-1/2 min-w-72 p-[1rem] px-[1.5rem]">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold">Kom direct in contact!</h1>
            <p className="font-xl text-slate-500">Ontvang spontaan advies van onze professionals</p>
          </div>
          <ul className="font-sm mx-auto text-slate-600 font-semibold gap-2 grow text-sm py-[1rem]">
            <li className="flex  items-center py-1">
              <FontAwesomeIcon icon={faEnvelope} className=" mr-2" size='sm' />
              <span>example@gmail.com</span>
            </li>
            <li className="flex items-center py-1">
              <FontAwesomeIcon icon={faPhone} className=" mr-2" size='sm' />
              <span>+31 06255 50183</span>
            </li>
          </ul>
        </div>
        <form method="post" action="#" className="basis-1/2 min-w-72 grid grid-cols-2 grid-rows-5 gap-4">
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
            className="w-full bg-dark hover:bg-slate-700 text-white text-sm py-2 px-4 font-semibold rounded focus:shadow-outline col-span-2 text-center"
            type="button"
          >
            Bevestig
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
