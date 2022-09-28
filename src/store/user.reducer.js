import { userService } from "../services/user.service";


const INITIAL_STATE = {
    user: userService.getLoggedinUser(),
    currModalType:'',
    trips:[],
    
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
        default:
            console.log('DEFAULT!!!');
            return state
    }
}