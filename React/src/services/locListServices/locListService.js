import axios from 'axios'

const url = "http://localhost:8080/api/room"

class LocListService {
    getList() {
        return axios.get(url+"/loc")
    }
}

export default new LocListService()