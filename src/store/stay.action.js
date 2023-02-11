import { stayService } from "../services/stay.service"


export function loadStays() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().stayModule
        try {
            const stays = await stayService.query(filterBy)
            dispatch({ type: 'SET_STAYS', stays })
        } catch (err) {
            console.error('STAYS ACTION faild load:', err)
        }
    }
}

export function loadUserStays(userId) {
    return async (dispatch) => {
        try {
            const stays = await stayService.query({ hostId: userId })
            dispatch({ type: 'SET_STAYS', stays })
        } catch (err) {
            console.error('STAYS ACTION faild load:', err)
        }
    }
}

export function setFilter(filterBy) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER', filterBy })
        } catch (err) {
            console.log('filter catch', err)
        }
    }
}

export function updateStay(stay) {
    return async (dispatch) => {
        try {
            const stayToUpdate = stayService.save({ ...stay })
            dispatch({ type: 'UPDATE_STAY', stay: stayToUpdate })
            return stayToUpdate

        } catch (err) {
            console.log('Updated stay catch', err)
        }

    }
}

export function addStay(stay) {
    return async (dispatch) => {
        try {
            const stayToAdd = await stayService.save({ ...stay })
            dispatch({ type: 'ADD_STAY', stay: stayToAdd })
            return stayToAdd
        } catch (err) {
            console.log('Added stay catch', err)
        }
    }
}

export function removeStay(stayId) {
    return async (dispatch) => {
        try {
            await stayService.remove(stayId)
            dispatch({ type: 'REMOVE_STAY', stayId })

        } catch (err) {
            console.error('Oops:', err)
        }
    }
}

export function modalType(modalType) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_MODAL_TYPE', modalType })
        } catch (err) {
            console.log('faild to set modal type', err)
        }
    }
}