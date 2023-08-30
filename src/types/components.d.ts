export interface FormState {
  value: 'ready' | 'loading' | 'submitted' | 'error'
}

export type Project = {
  id: number
  title: string
  href: string
  description: string
  pictures: ProjectPictures
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
