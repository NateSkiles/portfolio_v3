export interface FormState {
  value: 'ready' | 'loading' | 'submitted' | 'error'
}

export type Project = {
  id: number
  title: string
  href?: string
  github: string
  description: string
  pictures: ProjectPictures
  languages?: string | null
  frameworks?: string | null
}
export interface ProjectPictures {
  cover: {
    url: string
    altText: string
  }
  screenshots: string[]
}

interface ModalProps {
  project: Project
}
