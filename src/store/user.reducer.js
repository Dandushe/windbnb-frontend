import { authService } from "../services/auth.service";


const INITIAL_STATE = {
    user: authService.getLoggedinUser(),
    currModalType: '',
    trips: [],
    listings: [],
    alertData: null
}


export function userReducer(state = INITIAL_STATE, action) {
    // var user;
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        case 'SET_MODAL_TYPE':
            return { ...state, currModalType: action.currModalType }
        case 'SET_TRIPS':
            return { ...state, trips: action.trips }
        case 'SET_LISTINGS':
            return { ...state, listings: action.listings }
        case 'SET_ALERT_DATA':
            return { ...state, alertData: action.alertData }
        default:
            // console.log('DEFAULT!!!');
            return state
    }
}