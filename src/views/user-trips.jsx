import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TripsList } from "../cmps/user/trip-list"
import { TripPreview } from "../cmps/user/trip-preview"
import { loadReservations } from "../store/reservation.action"
import { loadTrips, saveUserTrips } from "../store/user.action"


export const UserTrips = () => {
    const user = useSelector(state => state.userModule.user)
    const trips = useSelector(state => state.userModule.trips)
    // ObjectId("632c617e1e03fec448f71ace")
    const dispatch = useDispatch()
    useEffect(() => {
        loadUserTrips()
    }, [])

    const loadUserTrips = async () => {
        console.log(user._id);
        // 632c617e1e03fec448f71ace
        dispatch(saveUserTrips({ buyerId: user._id }))

    }
    
    console.log(trips);
    // if (!trips) return <div>Loading...</div>
    return (
        <section className="trips-page">
            <h1>Trips</h1>
            {trips &&<section className="booked-trip-list">
                <TripsList trips={trips} />
            </section>}
            {!trips.length &&<TripPreview/>}
            {/* <TripPreview/> */}

        </section>
    )
}