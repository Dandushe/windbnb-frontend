import { httpService } from './http.service.js'

export const reservationService = {
    query,
    save,
    remove,
    getById,
}

const BASE_URL = `reservation/`


function query(filterBy) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(reservationId) {
    return httpService.get(BASE_URL + reservationId).then((res) => res)
}

function remove(reservationId) {
    return httpService.delete(BASE_URL + reservationId).then((res) => res)
}

function save(reservation) {
    if (reservation._id) {
        return httpService.put(BASE_URL, reservation).then((res) => res)
    } else {
        return httpService.post(BASE_URL, reservation).then((res) => res)
    }
}