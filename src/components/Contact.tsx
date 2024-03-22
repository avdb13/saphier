'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'
import { useState } from 'react'

export type FormData = {
  name: string,
  companyName: string,
  email: string,
  phoneNumber: string,
  message: string,
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  function onSubmit(data: FormData) {
    setLoading(true)
    sendEmail(data).then(() => {
      setLoading(false)
      setSuccess(true)
    }).catch(e => setError(e))
  }

  return (
    <div className="pb-[4rem] text-center prose md:prose-lg mx-auto">
      <h1 className={'text-[2.5rem] mb-[2rem] text-center text-[#333] font-bold pb-[1rem]'}>Overtuigd?</h1>
      <div
        className="flex flex-col justify-center items-center form font-mono gap-4 p-[1rem]"
      >
        <div className="flex flex-col justify-between bg-teal-50 min-w-72 p-[1rem] px-[1.5rem] w-full">
          <div className="mx-auto prose md:prose-lg py-[1rem]">
            <h1 className="text-3xl font-bold">Kom direct in contact!</h1>
            <h4 className="font-xl text-slate-500">Ontvang spontaan advies van onze professionals</h4>
          </div>
          <ul className="font-sm mx-auto text-slate-600 font-semibold gap-2 grow text-sm ">
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
        <form onSubmit={handleSubmit(onSubmit)} className="min-w-72 grid grid-cols-2 grid-rows-5 gap-4 w-full font-base">
          <input
            className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Naam"
            required
            {...register('name')}
          />
          <input
            className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline"
            id="companyName"
            type="text"
            placeholder="Bedrijfsnaam"
            {...register('companyName')}
          />
          <input
            className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            required
            {...register('email')}
          />
          <input
            className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline"
            id="phoneNumber"
            type="text"
            placeholder="Telefoonnummer"
            {...register('phoneNumber')}
          />
          <textarea
            className="text-sm appearance-none rounded w-full py-2 px-3 text-slate-700 bg-slate-200 leading-tight focus:shadow-outline col-span-2 row-span-2"
            id="message"
            placeholder="Beschrijf jouw project ..."
            required
            {...register('message')}
          />
          <button
            className={`w-full text-white text-sm py-2 px-4 font-semibold rounded focus:shadow-outline col-span-2 text-center duration-300 ${success ? 'bg-slate-600' : 'bg-slate-800 hover:bg-slate-700'}`}
            type="submit"
          >
            {loading ? <Spinner /> : success ? 'Success!' : 'Bevestig'}
          </button>
        </form>
      </div>
    </div>
  )
}

const Spinner = () => (
  <span className="loader mt-[4px]"></span>
)

export default ContactForm
