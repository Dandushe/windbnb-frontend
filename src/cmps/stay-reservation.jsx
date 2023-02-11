import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
//JS
import { formatNumber, utilService } from "../services/util.service";
import { addReservation } from '../store/reservation.action';
import { modalType } from "../store/stay.action";
//ASSETS
import ArrowDown from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowUp from '@mui/icons-material/KeyboardArrowUpOutlined';
import StarIcon from '@mui/icons-material/Star';
import { BasicDatePicker } from "./date-picker";
import { BrandBtn } from "./brand-btn";


export const StayReservation = ({ stay }) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.userModule.user)
    const filterBy = useSelector(state => state.stayModule.filterBy)
    const currModalType = useSelector(state => state.stayModule.currModalType)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [reservation, setReservation] = useState({ ...filterBy })

    const getDaysCount = () => {
        let daysDiffInMill = new Date(reservation.checkOut) - new Date(reservation.checkIn)
        let daysCount = daysDiffInMill / (1000 * 60 * 60 * 24)
        return daysCount
    }

    const handleDateChange = (ev, field) => {
        const date = new Date(ev.$d)
        const value = utilService.formatDate(date)
        if (!reservation.checkIn && !reservation.checkOut) {
            setReservation(prevReservation => ({ ...prevReservation, checkIn: value, checkOut: value }))
            return
        }
        setReservation(prevReservation => ({ ...prevReservation, [field]: value }))
    }

    const onReserve = (ev) => {
        ev.preventDefault()

        if (!user) {
            dispatch(modalType('login'))
            return
        }
        let rservToSave = {
            hostId: stay.host._id,
            hostName: stay.host.fullname,
            checkIn: reservation.checkIn,
            checkOut: reservation.checkOut,
            guestsNum: totalGuests,
            totalPrice: (stay.price * getDaysCount()),
            createdAt: Date.now(),
            stay: {
                _id: stay._id,
                name: stay.name,
                price: stay.price,
                stayImg: stay.imgUrls[0],
                address: stay.address
            },
            buyer: {
                _id: user._id,
                fullname: user.fullname
            }
        }
        dispatch(addReservation(rservToSave))
        toggleModal()
    }

    const toggleModal = () => {
        const type = currModalType === 'confirm-reservation' ? '' : 'confirm-reservation'
        dispatch(modalType(type))
    }

    const onToggleMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
    }

    const onSelectValue = (ev, field, value) => {
        ev.preventDefault()
        setReservation(prevReservation => ({
            ...prevReservation,
            guestsNum: {
                ...prevReservation.guestsNum,
                [field]: value,
            }
        }))
    }

    const totalGuests =
        reservation.guestsNum.adults +
        reservation.guestsNum.infants +
        reservation.guestsNum.children +
        reservation.guestsNum.pets


    const { adults, infants, children, pets } = reservation.guestsNum
    const serviceFee = 30
    const sumRate = (stay.reviewScores.rating) * (stay.reviews.length) / (6 * stay.reviews.length)

    return (
        <>
            <section className="stay-reservation">
                <div className="reservation-wrapper">
                    <div className="reservation-heder">
                        <span className="price"><h2>{formatNumber(stay.price)}</h2>night</span>
                        {!!stay.reviews.length ? <div className="rate-con">
                            <StarIcon />
                            <span>{utilService.financial(sumRate)} •</span>
                            <span className="reviews-length">{stay.reviews.length} reviews</span>
                        </div> :
                            <div className="rate-con">
                                <StarIcon />
                                <span>New</span>
                            </div>
                        }
                    </div>

                    <div className="form-wrapper">
                        <form >
                            <div className="inputs-con">
                                <div className="input-date-con">
                                    <BasicDatePicker
                                        lable={'check in'}
                                        field={'checkIn'}
                                        initalValue={reservation.checkIn}
                                        maxDate={reservation.checkOut}
                                        handleDateChange={handleDateChange}
                                    />

                                    <BasicDatePicker
                                        lable={'check out'}
                                        field={'checkOut'}
                                        initalValue={reservation.checkOut}
                                        minDate={reservation.checkIn}
                                        handleDateChange={handleDateChange}
                                    />

                                </div>

                                <div className="guests-main-wrapper">
                                    <div className="text-con">
                                        <p className="lable">Guests</p>
                                        <p>{totalGuests} guest</p>
                                    </div>

                                    {!isMenuOpen && <ArrowDown className="arrow-down-icn" onClick={onToggleMenu} />}
                                    {isMenuOpen && <ArrowUp className="arrow-down-icn" onClick={onToggleMenu} />}
                                    {isMenuOpen && <div className='grop-consists-wrapper'>
                                        <div className='grop-main-con adults'>
                                            <div className='text-con'>
                                                <div className='title'>Adults</div>
                                                <div className="sub">Ages 13 or above</div>
                                            </div>
                                            <div className="controls-con">
                                                <button className="btn btn-dec" disabled={adults === 1} onClick={(ev) => onSelectValue(ev, 'adults', adults - 1)}>-</button>
                                                <span className="val-display">{adults}</span>
                                                <button className="btn btn-inc" onClick={(ev) => onSelectValue(ev, 'adults', adults + 1)}>+</button>
                                            </div>
                                        </div>

                                        <div className='grop-main-con children'>
                                            <div className='text-con'>
                                                <div className='title'>Children</div>
                                                <div className="sub">Ages 2-12</div>
                                            </div>
                                            <div className="controls-con">
                                                <button className="btn btn-dec" disabled={children === 0} onClick={(ev) => onSelectValue(ev, 'children', children - 1)}>-</button>
                                                <span className="val-display">{children}</span>
                                                <button className="btn btn-inc" onClick={(ev) => onSelectValue(ev, 'children', children + 1)}>+</button>
                                            </div>
                                        </div>
                                        <div className='grop-main-con infants'>
                                            <div className='text-con'>
                                                <div className='title'>Infants</div>
                                                <div className="sub">Under 2</div>
                                            </div>
                                            <div className="controls-con">
                                                <button className="btn btn-dec" disabled={infants === 0} onClick={(ev) => onSelectValue(ev, 'infants', infants - 1)}>-</button>
                                                <span className="val-display">{infants}</span>
                                                <button className="btn btn-inc" onClick={(ev) => onSelectValue(ev, 'infants', infants + 1)}>+</button>
                                            </div>
                                        </div>
                                        <div className='grop-main-con pets'>
                                            <div className='text-con'>
                                                <div className='title'>Pets</div>
                                                <div className="sub">Bringing a service animal?</div>
                                            </div>
                                            <div className="controls-con">
                                                <button className="btn btn-dec" disabled={pets === 0} onClick={(ev) => onSelectValue(ev, 'pets', pets - 1)}>-</button>
                                                <span className="val-display">{pets}</span>
                                                <button className="btn btn-inc" onClick={(ev) => onSelectValue(ev, 'pets', pets + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>}
                                </div>

                            </div>
                            <BrandBtn text={'Reserve'} cb={onReserve} />
                            <span>You won't be charged yet</span>
                        </form>

                    </div>

                    <div className="reservation-breakdown-wrapper">
                        <div className="price-breakdown-con">
                            <div className="brakdown">
                                <span className="price">{formatNumber(stay.price)} x {getDaysCount()} nights</span>
                                <span className="price">{formatNumber(stay.price * getDaysCount())}</span>
                            </div>
                            <div>
                                <span>cleaning fee</span>
                                <span className={stay.cleaningFee === 0 ? 'green' : ''}>${formatNumber(stay.cleaningFee)}</span>
                            </div>
                            <div>
                                <span>Service fee </span>
                                <span>${formatNumber(serviceFee)}</span>
                            </div>
                        </div>
                        <div className="total-con">
                            <span>Total</span>
                            <span className="total-price">{formatNumber((stay.price * getDaysCount()) + serviceFee + stay.cleaningFee)}</span>
                        </div>
                    </div>
                </div>
            </section>

            {currModalType === 'confirm-reservation' && <div className="confirmation-modal-wrapper">
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
                            <span>{new Date(reservation.checkIn).toLocaleString('en-US', { month: 'short', day: 'numeric' })}-{new Date(reservation.checkOut).getDate()}</span>
                        </div>
                        <span className="edit-dates">Edit</span>
                    </div>
                    <div className="trip-guest-wrapper">
                        <div className="guest-con">
                            <h4>Guests</h4>
                            <span>{totalGuests} guest</span>
                        </div>
                        <span className="edit-dates">Edit</span>
                    </div>

                </div>

                <div className="price-breakdown-wrapper">
                    <div className="price-breakdown-con">
                        <div>
                            <span className="price">{formatNumber(stay.price)} x {getDaysCount()} nights</span>
                            <span className="price">{formatNumber(stay.price * getDaysCount())}</span>
                        </div>
                        <div>
                            <span className="">Service fee </span>
                            <span>$0</span>
                        </div>
                    </div>
                    <div className="total-con">
                        <span>Total</span>
                        <span className="total-price">{formatNumber(stay.price * getDaysCount())}</span>
                    </div>
                    <BrandBtn text='Confirm' cb={toggleModal} />
                </div>
            </div>}
        </>
    )
}

