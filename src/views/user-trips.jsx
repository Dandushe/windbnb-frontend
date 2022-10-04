import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { TripsList } from "../cmps/user/trip-list"
import { BrandBtn } from "../cmps/brand-btn";

import { TripPreview } from "../cmps/user/trip-preview"
import { loadReservations } from "../store/reservation.action"
import { loadTrips, saveUserTrips } from "../store/user.action"


export const UserTrips = () => {
    const user = useSelector(state => state.userModule.user)
    const trips = useSelector(state => state.userModule.trips)
    // ObjectId("632c617e1e03fec448f71ace")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        loadUserTrips()
    }, [])

    const loadUserTrips = async () => {
        // 632c617e1e03fec448f71ace
        dispatch(saveUserTrips({ buyerId: user._id }))

    }

    return (
        <section className="trips-page">
            <h1>Trips</h1>
            {trips && <TripsList trips={trips} />}
            {!trips.length && <div className="trip-banner-wrapper">
                <div className="banner-text-con">
                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664703176/yo.svg" alt="icon" className="icn" />
                    <div>
                        <p className="title">No trips booked...yet!</p>
                        <p className="sub">Time to dust off your bags and start planning your next adventure</p>
                    </div>
                    <BrandBtn text="Start searching" cb={() => navigate('/')} />
                </div>
                <div className="img-container">
                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664009033/windbnb/family.jpg" alt="family" />
                </div>
            </div>}
            {/* <TripPreview/> */}

        </section>
    )
}