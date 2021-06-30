import axios from 'axios'

const list = "http://localhost:8080/api/building/"
const urlId = "http://localhost:8080/api/building/"
const url = "http://localhost:8080/api/building/address"
const urlCreate = "http://localhost:8080/api/building/buildingAdd"
const urlUpdate = "http://localhost:8080/api/building/buildingUpdate"
const urlDelete = "http://localhost:8080/api/building/buildingDelete"


class BuildingService {
    listBuilding() {
        return axios.get(list)
    }
    getBuildingId(id) {
        return axios.get(urlId + id)
    }
    getBuilding() {
        return axios.get(url)
    }
    createBuilding(building) {
        return axios.post(urlCreate, building)
    }
    updateBuilding(building) {
        return axios.post(urlUpdate, building)
    }
    deleteBuilding(building) {
        return axios.delete(urlDelete, {
            data: {
                id: building.id
            }
        })
    }
}

export default new BuildingService()