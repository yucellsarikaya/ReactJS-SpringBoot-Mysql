import axios from 'axios'

const list = "http://localhost:8080/api/complex"
const urlId = "http://localhost:8080/api/complex/"
const url = "http://localhost:8080/api/complex"
const urlCreate = "http://localhost:8080/api/complex/complexAdd"
const urlUpdate = "http://localhost:8080/api/complex/complexUpdate"
const urlDelete = "http://localhost:8080/api/complex/complexDelete"

class ComplexService {
    listComplex() {
        return axios.get(list + "/")
    }
    getComplexId(id) {
        return axios.get(urlId + id)
    }
    getComplex() {
        return axios.get(url + "/address")
    }
    createComplex(complex) {
        return axios.post(urlCreate, complex)
    }
    updateComplex(complex) {
        return axios.post(urlUpdate, complex)
    }
    deleteComplex(complex) {
        return axios.delete(urlDelete, {
            data: {
                id: complex.id
            }
        })
    }
}

export default new ComplexService()