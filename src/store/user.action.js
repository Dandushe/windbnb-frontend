import { reservationService } from "../services/reservation.service";
import { userService } from "../services/user.service";

export function login(credentials) {

    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({ type: 'SET_USER', user })

        } catch (err) {
            console.log('faild to login', err);

        }
    }
}

export function signup(credentials) {

    return async (dispatch) => {
        try {
            const user = await  userService.signup(credentials)
            dispatch({ type: 'SET_USER', user })
            
        } catch (err) {
            console.log('faild to sign-up', err);
            
        }

    }
}

export function logout() {
    return async (dispatch) => {
        try {
         await userService.logout()
         dispatch({ type: 'SET_USER', user: null })
            
        } catch (err) {
            console.log('faild to log-out', err)
        }
    }
}

export function modalType(type) {
    return async (dispatch) => {
        try {
        //  await userService.logout()
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
          console.log('trips:!!!',trips)
         dispatch({ type: 'SET_TRIPS', trips })
            
        } catch (err) {
            console.log('faild to set modal type', err)
        }
    }
}
// export function getUserTrips(userId) {
//     return async (dispatch) => {
//         try {
//         //  await userService.logout()
//          dispatch({ type: 'SET_TRIPS', trips })
            
//         } catch (err) {
//             console.log('faild to set modal type', err)
//         }
//     }
// }
