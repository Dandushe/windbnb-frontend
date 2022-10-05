import { reservationService } from "../services/reservation.service"


export function loadReservations(filterBy) {
    return async (dispatch) => {
        try {
            const reservations = await reservationService.query(filterBy)
            dispatch({ type: 'SET_RESERVATIONS', reservations })
        } catch (err) {
            console.error('RESERVATIONS ACTION faild load:', err)
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
            // dispatch({ type: 'SET_ALERT_DATA', alertData: { type: 'success', txt: 'new reservation' } })
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