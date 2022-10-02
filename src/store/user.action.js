import { reservationService } from "../services/reservation.service";
import { stayService } from "../services/stay.service";
import { authService } from "../services/auth.service";

export function login(credentials) {

    return async (dispatch) => {
        try {
            const user = await authService.login(credentials)
            dispatch({ type: 'SET_USER', user })

        } catch (err) {
            console.log('faild to login', err);

        }
    }
}

export function signup(credentials) {

    return async (dispatch) => {
        try {
            const user = await authService.signup(credentials)
            dispatch({ type: 'SET_USER', user })

        } catch (err) {
            console.log('faild to sign-up', err);

        }

    }
}

export function logout() {
    return async (dispatch) => {
        try {
            await authService.logout()
            dispatch({ type: 'SET_USER', user: null })

        } catch (err) {
            console.log('faild to log-out', err)
        }
    }
}

export function modalType(type) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_MODAL_TYPE', currModalType: type })
        } catch (err) {
            console.log('faild to set modal type', err)
        }
    }
}

export function saveUserTrips(filterBy) {
    return async (dispatch) => {
        try {
            const trips = await reservationService.query(filterBy)
            dispatch({ type: 'SET_TRIPS', trips })
        } catch (err) {
            console.log('faild to set modal type', err)
        }
    }
}

export function saveUserListing(filterBy) {
    return async (dispatch) => {
        try {
            const listings = await stayService.query(filterBy)
            dispatch({ type: 'SET_LISTINGS', listings })
        } catch (err) {
            console.log('faild ', err)
        }
    }
}