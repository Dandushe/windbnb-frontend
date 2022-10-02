import { utilService } from "../services/util.service";

const fiveDays = 5 * 24 * 60 * 60 * 1000

const INITIAL_STATE = {
    stays: [],
    filterBy: {
        txt: '',
        checkIn: utilService.formatDate(Date.now()),
        checkOut: utilService.formatDate(Date.now() + fiveDays),
        guestsNum: {
            adults: 1,
            children: 0,
            infants: 0,
            pets: 0
        },
        minPrice: 0,
        maxPrice: Infinity,
        roomTypes: [],
        category: ''
    },
    currModalType: '',
}

export function stayReducer(state = INITIAL_STATE, action) {
    let stays;
    switch (action.type) {
        case 'SET_STAYS':
            return { ...state, stays: action.stays }
        case 'SET_MODAL_TYPE':
            return { ...state, currModalType: action.modalType }
        case 'SET_FILTER':
            return { ...state, filterBy: { ...state.filterBy, ...action.filterBy } }
        case 'REMOVE_STAY':
            stays = state.stays.filter(stay => stay._id !== action.stayId)
            return { ...state, stays: stays }
        case 'ADD_STAY':
            stays = [...state.stays, action.stay]
            return { ...state, stays: stays }
        case 'UPDATE_STAY':
            stays = state.stays.map(currStay => (currStay._id === action.stay._id) ? action.stay : currStay)
            return { ...state, stays: stays }
        default:
            // console.log('DEFAULT-STAY!!!');
            return state
    }
}