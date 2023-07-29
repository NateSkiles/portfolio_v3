const projects = [
  {
    id: 1,
    title: 'Chirp',
    href: 'https://chirp.nateskiles.dev',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    pictures: {
      cover: '#',
      screenshots: []
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
          <p className="mt-2 text-lg leading-8 text-slate-400">
            A collection of my personal projects:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-300 group-hover:text-blue-600">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-base leading-6 text-slate-300">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
