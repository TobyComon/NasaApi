
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Img } from "../Models/Image.js"

const params = {
    api_key: 'FU8bf73ghsP1kpj4NRNd1lbH4VFSWvi9S0yiRdZl'
}


class ImagesService {
    async getImg() {
        const res = await api.get('', {params})
        console.log(res.data);
        AppState.image = new Img(res.data)
        console.log(AppState.image, )
    }
    async getImgByDate(value) {
        const res = await api.get(value, {params})
        console.log(res.data);
    }


}


export const imagesService = new ImagesService()