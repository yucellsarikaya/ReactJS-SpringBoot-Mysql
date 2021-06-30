import axios from 'axios'

const list = "http://localhost:8080/api/room/"
const urlId = "http://localhost:8080/api/room/"
const url = "http://localhost:8080/api/room/address"
const urlCreate = "http://localhost:8080/api/room/roomAdd"
const urlUpdate = "http://localhost:8080/api/room/roomUpdate"
const urlDelete = "http://localhost:8080/api/room/roomDelete/"

class RoomService {
    listRoom() {
        return axios.get(list)
    }
    getRoomId(id) {
        return axios.get(urlId + id)
    }
    getRoom() {
        return axios.get(url)
    }
    createRoom(room) {
        return axios.post(urlCreate, room)
    }
    updateRoom(room) {
        return axios.post(urlUpdate, room)
    }
    deleteRoom(room) {
        return axios.delete(urlDelete, {
            data: {
                id: room.id
            }
        })
    }
}

export default new RoomService()