import axios from 'axios'

const list = "http://localhost:8080/api/floor/"
const urlId = "http://localhost:8080/api/floor/"
const url = "http://localhost:8080/api/floor/address"
const urlCreate = "http://localhost:8080/api/floor/floorAdd"
const urlUpdate = "http://localhost:8080/api/floor/floorUpdate"
const urlDelete = "http://localhost:8080/api/floor/floorDelete"

class FloorService {
    listFloor() {
        return axios.get(list)
    }
    getFloorId(id) {
        return axios.get(urlId + id)
    }
    getFloor() {
        return axios.get(url)
    }
    createFloor(floor) {
        return axios.post(urlCreate, floor)
    }
    updateFloor(floor) {
        return axios.post(urlUpdate, floor)
    }
    deleteFloor(floor) {
        return axios.delete(urlDelete, {
            data: {
                id: floor.id
            }
        })
    }
}

export default new FloorService()