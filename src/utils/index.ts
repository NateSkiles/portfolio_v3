import chirpCoverUrl from '../assets/images/project_pictures/chirp_cover.png'
import chirpSs1Url from '../assets/images/project_pictures/chirp_ss1.png'
import chirpSs2Url from '../assets/images/project_pictures/chirp_ss2.png'
export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const chirpImages = {
  chirpCoverUrl,
  chirpSs1Url,
  chirpSs2Url
}
