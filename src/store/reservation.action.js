import { reservationService } from "../services/reservation.service"



export function loadReservations() {
    return async (dispatch) => {
        // const { filterBy } = getState().reservationModule
        try {
            let reservations = await reservationService.query()
            dispatch({ type: 'SET_RESERVATIONS', reservations })
        } catch (err) {
            console.error('RESERVATIONS ACTION faild load:', err)
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

export function updateReservation(reservation) {
    return async (dispatch) => {
        try {
           const reservationToUpdate = reservationService.save({ ...reservation })       
            dispatch({ type: 'UPDATE_RESERVATION', reservation: reservationToUpdate })
            return reservationToUpdate
            
        } catch (err) {
            console.log('Updated reservation catch', err)
        }
         
    }
}

export function addReservation(reservation) {
    return async (dispatch) => {
        try {
            const reservationToAdd = await reservationService.save({ ...reservation })
            dispatch({ type: 'ADD_RESERVATION', reservation: reservationToAdd })
            return reservationToAdd
        } catch (err) {
            console.log('Added reservation catch', err)
        }
    }
}

export function removeReservation(reservationId) {
    return async (dispatch) => {
        try {
            await reservationService.remove(reservationId)
            dispatch({ type: 'REMOVE_RESERVATION', reservationId })

        } catch (err) {
            console.error('Oops:', err)

        }
    }
}