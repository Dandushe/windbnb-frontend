import { httpService } from './http.service'
export const stayService = {
    query,
    save,
    remove,
    getById,
}
const BASE_URL = `stay/`

function query(filterBy) {
    return httpService.get(BASE_URL, { params: filterBy }).then((res) => res)
}

function getById(stayId) {
    return httpService.get(BASE_URL + stayId).then((res) => res)
}

function remove(stayId) {
    return httpService.delete(BASE_URL + stayId).then((res) => res)
}

function save(stay) {
    if (stay._id) {
        return httpService.put(BASE_URL, stay).then((res) => res)
    } else {
        return httpService.post(BASE_URL, stay).then((res) => res)
    }
}