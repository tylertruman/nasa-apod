import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const nasaApi = Axios.create({
  baseURL: 'https://bcw-getter.herokuapp.com',
  timeout: 4000,
  params: {
    url: 'https://api.nasa.gov/planetary/apod',
    api_key: 'Z8G4NMUkTSJ70CMApeYq2xfTHTHcu59a2isUGTdV'
  }
})


// Z8G4NMUkTSJ70CMApeYq2xfTHTHcu59a2isUGTdV my key

// https://api.nasa.gov/planetary/apod?api_key=Z8G4NMUkTSJ70CMApeYq2xfTHTHcu59a2isUGTdV

// GET https://api.nasa.gov/planetary/apod APOD REQUEST