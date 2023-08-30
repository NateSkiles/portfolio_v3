import { useEffect, useRef, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { ModalProps } from 'types/components'

export default function Modal({ project }: ModalProps) {
  const [showModal, setShowModal] = useState(false)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  const { title, description, pictures, languages, frameworks, github } =
    project
  const { cover, screenshots } = pictures
  const modalRef = useRef<HTMLDivElement | null>(null)

  const toggleZoom = (image: string) => {
    if (zoomedImage === image) {
      setZoomedImage(null)
    } else {
      setZoomedImage(image)
    }
  }

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowModal(false)
      setZoomedImage(null)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false)
      setZoomedImage(null)
    }
  }

  useEffect(() => {
    if (showModal) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showModal])

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <img
          className="rounded-t-lg hover:opacity-50"
          src={cover.url}
          alt={cover.altText}
        />
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div
              ref={modalRef}
              className="relative mx-auto my-6 w-auto max-w-3xl"
            >
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
                      className="h-auto max-w-full cursor-pointer rounded-lg hover:opacity-50"
                      src={cover.url}
                      alt={cover.altText}
                      onClick={() => toggleZoom(cover.url)}
                    />
                  </div>
                  {screenshots.map((screenshot, index) => (
                    <div key={index}>
                      <img
                        className="h-auto max-w-full cursor-pointer rounded-lg hover:opacity-50"
                        src={screenshot}
                        alt={cover.altText}
                        onClick={() => toggleZoom(screenshot)}
                      />
                    </div>
                  ))}
                  {zoomedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
                      <img
                        className="max-h-full max-w-full cursor-pointer"
                        src={zoomedImage}
                        alt="Zoomed Image"
                        onClick={() => toggleZoom(zoomedImage)}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between rounded-t border-t border-solid border-slate-200 p-5">
                  {description}
                </div>
                <div className="mb-8 flex justify-center">
                  <div>
                    <b>Languages:</b> {languages}
                    <br />
                    <b>Frameworks:</b> {frameworks}
                  </div>
                </div>
                <div className="mb-4 inline-flex w-full justify-end pr-6 text-blue-500 hover:text-blue-400">
                  <a href={github} target="_blank" rel="noreferrer">
                    <p className="flex items-center">
                      Github <FaChevronRight className="ml-1" />
                    </p>
                  </a>
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
