import axios from 'axios'

const list = "http://localhost:8080/api/block/"
const urlId = "http://localhost:8080/api/block/"
const url = "http://localhost:8080/api/block/address"
const urlCreate = "http://localhost:8080/api/block/blockAdd"
const urlUpdate = "http://localhost:8080/api/block/blockUpdate"
const urlDelete = "http://localhost:8080/api/block/blockDelete"

class BlockService {
    listBlock() {
        return axios.get(list)
    }
    getBlockId(id) {
        return axios.get(urlId + id)
    }
    getBlock() {
        return axios.get(url)
    }
    createBlock(block) {
        return axios.post(urlCreate, block)
    }
    updateBlock(block) {
        return axios.post(urlUpdate, block)
    }
    deleteBlock(block) {
        return axios.delete(urlDelete, {
            data: {
                id: block.id
            }
        })
    }
}

export default new BlockService()