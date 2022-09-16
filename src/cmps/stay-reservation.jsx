import { useState } from "react"



export const StayReservation = ({ stay }) => {
    // const [reservation, setReservation] = useState(null)

    return (
        <section className="stay-reservation">
            <div className="reservation-wrapper">
                <div className="reservation-heder">
                    <span className="price"><h4>${stay.price}</h4>night</span>
                    <span>{stay.reviews.length} reviews</span>
                </div>
                <div className="form-wrapper">
                    <form action="">
                        <div>

                            <label >
                                <input type="date" name="checkIn" />
                            </label>
                            <label >
                                <input type="date" name="checkOut" />
                            </label>
                        </div>
                        <label >
                            <input type="number" name="guestsNum" />
                        </label>
                        {/* <label htmlFor="">
                <select name="" id="">
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                </select>
                </label> */}
                        <button className="btn btn-reserve">Reserve</button>
                        <span>You won't be charged yet</span>
                    </form>

                </div>
            </div>
        </section>
    )
}

