import { Place } from "@mui/icons-material";
import { useEffect, useState } from "react"



export const StayReservation = ({ stay }) => {

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const fiveDays = (5 * 24 * 60 * 60 * 1000)

    const [reservation, setReservation] = useState({
        checkIn: formatDate(Date.now()),
        checkOut: formatDate(Date.now() + fiveDays),
        guestsNum: 1
    })
    const [isModalDisplay, setIsModalDisplay] = useState(false)
// const filterBy = useSelector(state => state.stayModule.filterBy)
    useEffect(() => {
        // console.log('isModalDisplay',isModalDisplay);
        // let daysDiffMILL = new Date(reservation.checkOut) - new Date(reservation.checkIn)
        // let DAYS = daysDiffMILL / (1000 * 60 * 60 * 24)
        // console.log("daysDiff", DAYS)
        return () => {

        }
    }, [])

    const getDaysCount = () => {
        let daysDiffInMill = new Date(reservation.checkOut) - new Date(reservation.checkIn)
        let daysCount = daysDiffInMill / (1000 * 60 * 60 * 24)
        return daysCount
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setReservation(prevReservation => ({ ...prevReservation, [field]: value }))
    }

    const onReserve = (ev) => {
        ev.preventDefault()
        // setIsModalDisplay(prevIsModalDisplay => !prevIsModalDisplay)
        console.log('jojojoj');
        setIsModalDisplay(isModalDisplay => !isModalDisplay)
    }

    return (
        <section className="stay-reservation">
            {!isModalDisplay && <div className="reservation-wrapper">
                <div className="reservation-heder">
                    <span className="price"><h2>{stay.price}</h2>night</span>
                    <span className="reviews-length">{stay.reviews.length} reviews</span>
                </div>

                <div className="form-wrapper">
                    <form >
                        <div className="inputs-con">
                            <div className="input-date-con">
                                <label >
                                    <input
                                        type="date"
                                        name="checkIn"
                                        value={reservation.checkIn}
                                        onChange={handleChange} />
                                </label>
                                <label >
                                    <input
                                        type="date"
                                        name="checkOut"
                                        value={reservation.checkOut}
                                        onChange={handleChange} />
                                </label>
                            </div>
                            <label >
                                <input
                                    type="number"
                                    name="guestsNum"
                                    value={reservation.guestsNum}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        {/* <button className="btn btn-reserve" >Reserve</button> */}
                        <button className="btn btn-reserve" onClick={onReserve}>Reserve</button>

                        <span>You won't be charged yet</span>
                    </form>

                </div>

                <div className="reservation-breakdown-wrapper">
                    <div className="price-breakdown-con">
                        <span className="price">{stay.price} x {getDaysCount()} nights</span>
                        <span className="price">{stay.price * getDaysCount()}</span>
                        {/* <div>
                       <span className="">Service fee </span>
                       <span>0</span>
                       </div> */}
                    </div>
                    <div className="total-con">
                        <span>Total</span>
                        <span className="total-price">{stay.price * getDaysCount()}</span>
                        {/* <button className="btn " onClick={onReserve}>Reserve</button> */}
                    </div>
                </div>

            </div>}

            {isModalDisplay && <div className="confirmation-modal-wrapper">
                <div className="confirmation-modal-header">
                    <div className="img-container ratio-square">
                        <img src={stay.imgUrls[0]} alt="property" />
                    </div>
                    <div className="modal-title">
                        <span className="property-type">{stay.propertyType}</span>
                        <span className="stay-name">{stay.name}</span>
                    </div>
                </div>

                <div className="wind-cover-con">
                    <span>Your booking is protected by</span>
                    <span className="wind-cover">windCover</span>

                </div>

                <div className="your-trip-details-wrapper">

                    <div className="trip-dates-wrapper">
                        <div className="dates-con">
                            <h4>Dates</h4>
                            <span>Oct 26 - 31</span>
                        </div>
                        <span className="edit-dates">Edit</span>
                    </div>
                    <div className="trip-guest-wrapper">
                        <div className="guest-con">
                            <h4>Guests</h4>
                            <span>{reservation.guestsNum} guest</span>
                        </div>
                        <span className="edit-dates">Edit</span>
                    </div>

                </div>

                <div className="price-breakdown-wrapper">
                    <div className="price-breakdown-con">
                        <span className="price">{stay.price} x {getDaysCount()} nights</span>
                        <span className="price">{stay.price * getDaysCount()}</span>
                    </div>
                    <div className="total-con">
                        <span>Total</span>
                        <span className="total-price">{stay.price * getDaysCount()}</span>
                    </div>
                    <button className="btn" onClick={onReserve}>confirm</button>
                </div>
            </div>}

        </section>
    )
}

