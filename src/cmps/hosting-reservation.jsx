import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadReservations } from "../store/reservation.action"
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarIcon from '@mui/icons-material/Star';
import { formatNumber } from "../services/util.service";


export const HostingReservation = () => {
    const user = useSelector(state => state.userModule.user)
    const reservations = useSelector(state => state.reservationModule.reservations)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadReservations({ hostId: user._id }))
    }, [])

    // month.toLocaleString('en-GB', { month: 'short' })
    // day.toLocaleString('en-GB',)
    const statusClass = 'approved'
    // 'declined'
    // 'approved'
    // 'pending'
    if (!reservations) return <div>Loading...</div>
    console.log('reservations', reservations);
    return (
        <section className="hosting-reservation-main-wrapper">
            <div className="stats-warpper">
                <div className="income-con">
                    <div className="container">
                        <p>This month income</p>
                        <div >
                            {/* <span className="total">$8,230 </span> */}
                            <span className="total">
                               ${reservations.reduce((acc, reservation) => {
                                    return formatNumber(acc + reservation.totalPrice)
                                }, 0)}
                            </span>
                            <span className="percentage">34%</span>
                        </div>
                    </div>
                    <AttachMoneyOutlinedIcon />
                </div>
                <div className="wishlist-con">
                    <div className="container">
                        <p>Added to wishlist</p>
                        <div>
                            <span className="total">62 </span>
                            <span className="percentage">12%</span>
                        </div>
                    </div>
                    <FavoriteOutlinedIcon />
                </div>
                <div className="rating-con">
                    <div className="container">
                        <p>Rating</p>
                        <div >
                            <span className="total">3.6 </span>
                            <span className="percentage">8%</span>
                        </div>
                    </div>
                    <StarIcon />
                </div>
            </div>


            <h1>Reservations</h1>

            <table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Guests</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Booked</th>
                        <th>Listing</th>
                        <th>Total Payout</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => <tr key={reservation._id}>
                        <td className={statusClass}>Approved</td>
                        <td>{reservation.guestsNum}</td>
                        {/* <td>{reservation.checkIn.toLocaleString('en-US')}</td> */}
                        <td>{new Date(reservation.checkIn).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                        {/* <td>{reservation.checkOut}</td> */}
                        <td>{new Date(reservation.checkOut).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                        <td>{new Date(reservation.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                        <td>{reservation.stay.name}</td>
                        <td>${formatNumber(reservation.totalPrice)}</td>
                        <td>Approved</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}