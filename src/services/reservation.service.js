import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'reservationDB'
export const reservationService = {
    query,
    save,
    remove,
    getById,
}

function query(buyerId) {
    console.log("query , buyerId", buyerId)
    
    return storageService.query(STORAGE_KEY)
        .then(reservations =>{
            console.log('reservations&&',reservations);
            if(buyerId){
                // let {userId} =filterBy
                reservations = reservations.filter(reservation => reservation.buyer._id === buyerId)
                console.log('reservations ###', reservations);
            }
            return reservations
        })
        // return reservations
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