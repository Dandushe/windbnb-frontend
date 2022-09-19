import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TripsList } from "../cmps/user/trip-list"
import { loadReservations } from "../store/reservation.action"
import { loadTrips, saveUserTrips } from "../store/user.action"


export const UserTrips = () => {
    const user = useSelector(state => state.userModule.user)
    const trips = useSelector(state => state.userModule.trips)

    const dispatch = useDispatch()
    useEffect(() => {
        loadUserTrips()
        // loadUserTrips()
        // dispatch(loadTrips(user._id))
        // dispatch(loadReservations(user._id))
        // dispatch(saveUserTrips(trips))
    }, [])

    const loadUserTrips = async () => {
        //    const YSYS = await dispatch(loadTrips(user._id))
        // dispatch(loadReservations(user._id))
        dispatch(saveUserTrips(user._id))
        
    }

    if (!trips) return <div>Loading...</div>
    return (

        <section className="trips-page">
            <h1>Trips</h1>
            <section className="booked-trip-list">
            <TripsList trips={trips}/>
            </section>
        </section>
    )
}