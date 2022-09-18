import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'reservationDB'
export const reservationService = {
    query,
    save,
    remove,
    getById,
}

function query() {
    return storageService.query(STORAGE_KEY)

}

function getById(reservationId) {
    return storageService.get(STORAGE_KEY, reservationId)
}

function remove(reservationId) {
    return storageService.remove(STORAGE_KEY, reservationId)
}

function save(reservation) {
    if (reservation._id) {
        return storageService.put(STORAGE_KEY, reservation)
    } else {
        console.log('HERERHEE??');
        return storageService.post(STORAGE_KEY, reservation)
    }
}