import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const formSubmit = () => {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, message: msg })
    }
    fetch('https://formspree.io/f/mpzgdevk', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value)
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
                    onChange={handleNameChange}
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
                    onChange={handleEmailChange}
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
                    onChange={handleMessageChange}
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
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
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
