import React, { useState } from 'react'
import { FormState } from 'types/components'
import { Error, Loading, Submitted } from './FormComponents'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FaFilePdf } from 'react-icons/fa'

const initialFormValues = {
  name: '',
  email: '',
  message: ''
}

export default function Contact() {
  const [formValue, setFormValue] = useState(initialFormValues)
  const [formState, setFormState] = useState<FormState>({ value: 'ready' })

  const formSubmit = () => {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValue)
    }
    setFormState({ value: 'loading' })
    fetch('https://formspree.io/f/mpzgdevk', requestOptions)
      .then((response) => response.ok && setFormState({ value: 'submitted' }))
      .catch(() => setFormState({ value: 'error' }))
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormValue((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }))
  }

  return (
    <div>
      <section id="contact" className="relative bg-gray-900 text-slate-100">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="mb-4 text-3xl font-medium text-slate-100 sm:text-3xl">
              Contact
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Send me a message:
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              {formState.value === 'loading' ? (
                <Loading />
              ) : formState.value === 'submitted' ? (
                <Submitted />
              ) : formState.value === 'error' ? (
                <Error />
              ) : (
                <form className="-m-2 flex flex-wrap">
                  <div className="w-1/2 p-2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="text-sm leading-7 text-slate-100"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        required
                        className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-slate-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 p-2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="text-sm leading-7 text-slate-100"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        required
                        className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="text-sm leading-7 text-slate-100"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        onChange={handleInputChange}
                        required
                        className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <button
                      onClick={formSubmit}
                      className="mx-auto flex rounded border-0 bg-blue-600 px-8 py-2 text-lg text-white hover:bg-blue-800 focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
              <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
                <a
                  href="mailto:admin@nateskiles.dev"
                  className="text-blue-500 hover:text-indigo-600"
                >
                  admin@nateskiles.dev
                </a>
                <p className="my-5 leading-normal">
                  Made in
                  <br />
                  Portland, OR
                </p>
                <span className="inline-flex">
                  {/* TODO: Add contact buttons */}
                  <a
                    href="https://github.com/NateSkiles"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGithub size={24} className="mx-2" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nathan-skiles/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiLinkedin size={24} className="mx-2" />
                  </a>
                  <a href="/public/resume.pdf" target="_blank">
                    <FaFilePdf size={24} className="mx-2" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
