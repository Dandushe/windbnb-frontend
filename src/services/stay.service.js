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



// function query(filterBy) {
//     return storageService.query(STORAGE_KEY).then(stays => {

//         if (!stays || !stays.length) {
//             storageService.postMany(STORAGE_KEY, gDefaultStays)
//             stays = gDefaultStays
//         }
//         if (filterBy) {
//             var { txt, roomTypes, minPrice, maxPrice } = filterBy
//             console.log(filterBy);
//             // robots = robots.filter(stay => stay.name.toLowerCase().includes(name.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
//             stays = stays.filter(stay => (stay.address.country.toLowerCase().includes(txt.toLowerCase())
//                 || stay.address.street.toLowerCase().includes(txt.toLowerCase())) &&
//                 (!roomTypes.length || roomTypes.includes(stay.roomType)) &&
//                 (maxPrice === 1000 || (stay.price <= maxPrice && stay.price >= minPrice)))
//         }
    
//         return stays
//     })
// }

// function getById(stayId) {
//     return storageService.get(STORAGE_KEY, stayId)
// }

// function remove(stayId) {
//     return storageService.remove(STORAGE_KEY, stayId)
// }
// function save(stay) {
//     if (stay._id) {
//         return storageService.put(STORAGE_KEY, stay)
//     } else {
//         return storageService.post(STORAGE_KEY, stay)
//     }
// }