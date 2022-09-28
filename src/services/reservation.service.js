
import { httpService } from './http.service.js'


export const reservationService = {
    query,
    save,
    remove,
    getById,
}
const BASE_URL = `reservation/`
// function query(buyerId) {

//     return storageService.query(STORAGE_KEY)
//         .then(reservations =>{
//             if(buyerId){
//                 // let {userId} =filterBy
//                 reservations = reservations.filter(reservation => reservation.buyer._id === buyerId)
//             }
//             return reservations
//         })
//         // return reservations
//     }

function query(filterBy) {
    console.log("queryrese , filterBy", filterBy)
        
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