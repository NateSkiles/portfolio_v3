import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDjango,
  SiDotnet,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiVercel
} from 'react-icons/si'

const iconsArr = [
  { icon: SiJavascript, color: '#F7DF1E' },
  { icon: SiReact, color: '#61DAFB' },
  { icon: SiNodedotjs, color: '#339933' },
  { icon: SiNextdotjs, color: '#000000' },
  { icon: SiVercel, color: '#000000' },
  { icon: SiJest, color: '#C21325' },
  { icon: SiHtml5, color: '#E34F26' },
  { icon: SiCss3, color: '#1572B6' },
  { icon: SiBootstrap, color: '#7952B3' },
  { icon: SiCsharp, color: '#239120' },
  { icon: SiDotnet, color: '#512BD4' },
  { icon: SiPython, color: '#3776AB' },
  { icon: SiDjango, color: '#092E20' },
  { icon: SiGnubash, color: '#4EAA25' },
  { icon: SiGit, color: '#F05032' },
  { icon: SiMysql, color: '#4479A1' },
  { icon: SiMongodb, color: '#47A248' }
]

const doubledIconsArr = [...iconsArr, ...iconsArr]
export default function Marquee() {
  return (
    <div className="marquee pt-12">
      <div className="marquee-inner inline-flex">
        {doubledIconsArr.map(({ icon: Icon, color }, index) => (
          <Icon key={index} size={128} color={color} className="mx-8" />
        ))}
      </div>
    </div>
  )
}
