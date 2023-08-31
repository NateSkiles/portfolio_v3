import chirpCoverUrl from '../assets/images/project_pictures/chirp_cover.png'
import chirpSs1Url from '../assets/images/project_pictures/chirp_ss1.png'
import chirpSs2Url from '../assets/images/project_pictures/chirp_ss2.png'
import mythaiCoverUrl from '../assets/images/project_pictures/mythai_cover.jpg'
import mythaiSs1Url from '../assets/images/project_pictures/mythai_ss1.gif'
import mythaiSs2Url from '../assets/images/project_pictures/mythai_ss2.gif'
import mythaiSs3Url from '../assets/images/project_pictures/mythai_ss3.png'
import mythaiSs4Url from '../assets/images/project_pictures/mythai_ss4.gif'
import weatherCoverUrl from '../assets/images/project_pictures/weather_cover.png'
import weatherSs1Url from '../assets/images/project_pictures/weather_ss1.png'
import weatherSs2Url from '../assets/images/project_pictures/weather_ss2.png'
import weatherSs3Url from '../assets/images/project_pictures/weather_ss3.png'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const chirpImages = {
  chirpCoverUrl,
  chirpSs1Url,
  chirpSs2Url
}

export const mythaiImages = {
  mythaiCoverUrl,
  mythaiSs1Url,
  mythaiSs2Url,
  mythaiSs3Url,
  mythaiSs4Url
}

export const weatherImages = {
  weatherCoverUrl,
  weatherSs1Url,
  weatherSs2Url,
  weatherSs3Url
}
