import { chirpImages } from 'utils'
import { FaChevronRight } from 'react-icons/fa'
import { Project } from 'types/components'
import Modal from './Modal'

const projects: Project[] = [
  {
    id: 1,
    title: 'Chirp',
    href: 'https://chirp.nateskiles.dev',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    pictures: {
      cover: {
        url: chirpImages.chirpCoverUrl,
        altText: "Picture of Chirp's timeline."
      },
      screenshots: [chirpImages.chirpSs1Url, chirpImages.chirpSs2Url]
    }
  }
]

export default function Projects() {
  return (
    <div id="projects" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-100">
            A collection of my personal projects:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => {
            const { id, title, href, description } = project
            return (
              <article
                key={id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                  <Modal project={project} />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold text-white hover:text-blue-400">
                      <a href={href}>{title}</a>
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {description}
                    </p>
                    <div className="inline-flex w-full items-center justify-end text-blue-500 hover:text-blue-400">
                      <a href="http://">
                        <p className="flex items-center">
                          Github <FaChevronRight className="ml-1" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
