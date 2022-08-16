import { AppState } from "../AppState.js";
import { Apod } from "../models/Apod.js";
import { nasaApi } from "./AxiosService.js";


class ApodService{
    async getApod(){
        const res = await nasaApi.get('')
        // logger.log(res)s
        AppState.apod = new Apod(res.data)
    }

    async getApodByDate(searchDate){
        const res = await nasaApi.get('', {
            params: {
                date: searchDate
            }
        })
        AppState.apod = new Apod(res.data)
    }
}

export const apodService = new ApodService()