import axios from 'axios'

const list = "http://localhost:8080/api/country/"
const urlId = "http://localhost:8080/api/country/"
const url = "http://localhost:8080/api/country/address"
const urlCreate = "http://localhost:8080/api/country/countryAdd"
const urlUpdate = "http://localhost:8080/api/country/countryUpdate"
const urlDelete = "http://localhost:8080/api/country/countryDelete"

class CountryService {
    listCountry() {
        return axios.get(list)
    }
    getCountryId(id) {
        return axios.get(urlId + id)
    }
    getCountry() {
        return axios.get(url)
    }
    createCountry(counrty) {
        return axios.post(urlCreate, counrty)
    }
    updateCountry(counrty) {
        return axios.post(urlUpdate, counrty)
    }
    deleteCountry(counrty) {
        return axios.delete(urlDelete, {
            data: {
                id: counrty.id
            }
        })
    }
}

export default new CountryService()