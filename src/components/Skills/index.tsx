import { Marquee } from 'components/utils/'

export default function Skills() {
  return (
    <div id="skills" className="bg-slate-100 py-12 sm:py-24">
      <div className="">
        <h2 className="text-center text-3xl font-semibold leading-8 text-slate-800">
          Technologies I&apos;ve Worked With
        </h2>

        <Marquee />
      </div>
    </div>
  )
}
