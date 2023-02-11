import { stayService } from "../services/stay.service";
import { authService } from "../services/auth.service";
import { socketService } from "../services/socket.service";

export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await authService.login(credentials)
            socketService.login(user._id)
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
            socketService.login(user._id)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('faild to sign-up', err);
        }

    }
}

export function update(user) {
    return async (dispatch) => {
        try {
            const updatedUser = await authService.update(user)
            dispatch({ type: 'SET_USER', user: updatedUser })

        } catch (err) {
            console.log('faild to update user', err);

        }

    }
}

export function logout() {
    return async (dispatch) => {
        try {
            await authService.logout()
            socketService.logout()
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

export function setAlertData(alertData) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_ALERT_DATA', alertData })
        } catch (err) {
            console.log('failed ', err)
        }
    }
}

