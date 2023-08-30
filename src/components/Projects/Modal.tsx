import React from 'react'
import { ModalProps } from 'types/components'

export default function Modal({ project }: ModalProps) {
  const [showModal, setShowModal] = React.useState(false)
  const { title, description } = project
  const { cover, screenshots } = project.pictures
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <img className="rounded-t-lg" src={cover.url} alt={cover.altText} />
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none "
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black hover:text-red-700">
                      ×
                    </span>
                  </button>
                </div>
                <div className="mx-2 my-4 grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={cover.url}
                      alt={cover.altText}
                    />
                  </div>
                  {screenshots.map((screenshot) => (
                    <div key={screenshots.indexOf(screenshot)}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={screenshot}
                        alt={cover.altText}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-start justify-between rounded-t border-t border-solid border-slate-200 p-5">
                  {description}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
        </>
      )}
    </>
  )
}
