import axios from 'axios'

const list = "http://localhost:8080/api/campus/"
const url = "http://localhost:8080/api/campus/address"
const urlId = "http://localhost:8080/api/campus/"
const urlCreate = "http://localhost:8080/api/campus/campusAdd"
const urlUpdate = "http://localhost:8080/api/campus/campusUpdate"
const urlDelete = "http://localhost:8080/api/campus/campusDelete"

class CampusService {
    listCampus() {
        return axios.get(list)
    }
    getCampusId(id) {
        return axios.get(urlId + id)
    }
    getCampus() {
        return axios.get(url)
    }
    createCampus(campus) {
        return axios.post(urlCreate, campus)
    }
    updateCampus(campus) {
        return axios.post(urlUpdate, campus)
    }
    deleteCampus(campus) {
        return axios.delete(urlDelete, {
            data: {
                id: campus.id
            }
        })
    }
}

export default new CampusService()