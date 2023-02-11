import { httpService } from './http.service'
export const stayService = {
    query,
    save,
    remove,
    getById,
    getDefaultStay
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

function getDefaultStay(){
     return {
        name: '',
        propertyType: '',
        roomType: '',
        capacity: 4,
        beds: 1,
        bedrooms: 1,
        bathrooms: 1,
        description: 'You`ll have a great time at this comfortable place to stay.',
        price: 35,
        category: '',
        address: {
            country: 'Israel',
            city: 'TLV',
            street: 'Bugrashov',
            location: {
                lat: -156.68083166296285,
                lan: 20.88321046395682
            },
        },
        host: {
            _id: null,
            fullname: null,
            userImg: null,
            isSuperhost: false,
        },
        amenities: [],
        imgUrls: [],
        reviews: [],
        cleaningFee: 5,
        reviewScores: {
            accuracy: 0,
            cleanliness: 0,
            checkin: 0,
            communication: 0,
            location: 0,
            value: 0,
            rating: 0
        }
    }
}