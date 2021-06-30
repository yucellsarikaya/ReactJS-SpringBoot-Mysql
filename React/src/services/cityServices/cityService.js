import axios from 'axios'

const url = "http://localhost:8080/api/city/"
const urlId = "http://localhost:8080/api/city/"
const urlCreate = "http://localhost:8080/api/city/cityAdd"
const urlUpdate = "http://localhost:8080/api/city/cityUpdate"
const urlDelete = "http://localhost:8080/api/city/cityDelete"

class CityService {

    getCity() {
        return axios.get(url)
    }
    getCityId(id) {
        return axios.get(urlId + id)
    }
    createCity(city) {
        return axios.post(urlCreate, city)
    }
    updateCity(city) {
        return axios.post(urlUpdate, city)
    }
    deleteCity(city) {
        return axios.delete(urlDelete, {
            data: {
                id: city.id
            }
        })
    }
}

export default new CityService()