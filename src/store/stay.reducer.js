const INITIAL_STATE = {
    stays: [],
    filterBy: {name:''},
}

export function stayReducer(state = INITIAL_STATE, action) {
    var stays;
    switch (action.type) {
        case 'SET_STAYS':
            return { ...state, stays: action.stays }
        // case 'SET_LOADING':
        //     return { ...state, isLoading: action.isLoading }
        case 'SET_FILTER':
            return { ...state, filterBy: action.filterBy }
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
            console.log('DEFAULT-STAY!!!');
            return state
    }
}