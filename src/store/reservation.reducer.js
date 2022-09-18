const INITIAL_STATE = {
    reservations: [],
    reservation:null
}

export function reservationReducer(state = INITIAL_STATE, action) {
    var reservations;
    switch (action.type) {
        case 'SET_RESERVATIONS':
            return { ...state, reservations: action.reservations }
        case 'REMOVE_RESERVATION':
            reservations = state.reservations.filter(reservation => reservation._id !== action.reservationId)
            return { ...state, reservations: reservations }
        case 'ADD_RESERVATION':
            reservations = [...state.reservations, action.reservation]
            return { ...state, reservations: reservations }
        case 'UPDATE_RESERVATION':
            reservations = state.reservations.map(currReservation => (currReservation._id === action.reservation._id) ? action.reservation : currReservation)
            return { ...state, reservations: reservations }
        default:
            console.log('DEFAULT-RESERVATION!!!');
            return state
    }
}