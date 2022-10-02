import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStays, modalType, setFilter } from '../store/stay.action';
import { utilService } from '../services/util.service';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BasicDatePicker } from './date-picker';
import SearchIcon from '@mui/icons-material/Search';

// const image = require('../../public/assets/images/unitedStates')

export const StayFilter = () => {
    const currModalType = useSelector(state => state.stayModule.currModalType)
    const [activeTab, setActiveTab] = useState('')
    const [isExpended, setIsExpended] = useState(false)
    // const [reservation, setReservation] = useState({
    // })
    const [value, setValue] = useState(null);
    const storeFilterBy = useSelector(state => state.stayModule.filterBy)

    const [filterBy, setFilterBy] = useState({ ...storeFilterBy })
    // const filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch()
    const inputRef = useRef()



    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    const handleDateChange = (ev) => {
        const field = activeTab
        const date = new Date(ev.$d)
        const value = utilService.formatDate(date)
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [field]: value }))

    }

    const onSubmitSearch = (ev) => {
        ev.preventDefault()
        dispatch(setFilter(filterBy))
        dispatch(loadStays())
        // dispatch(addReservation(reservation))

    }

    const toggleIsExpended = () => {
        setIsExpended(previsExpended => !previsExpended)
    }

    const expendedTab = (currTab) => {
        setActiveTab(currTab)
        onSelectModalType('expended-pill')
    }

    const onSelectModalType = (type) => {
        dispatch(modalType(type))
    }

    const onSelectValue = (field, value) => {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    const onSelectGuestNum = (field, value) => {

        setFilterBy(prevFilterBy => ({
            ...prevFilterBy,
            guestsNum: {
                ...prevFilterBy.guestsNum,
                [field]: value,
            }
        }))
    }


    const areas = ['imFlexible', 'middleEast', 'italy', 'unitedStates', 'greece', 'southAmerica']

    const totalGuests =
        filterBy.guestsNum.adults +
        filterBy.guestsNum.infants +
        filterBy.guestsNum.children +
        filterBy.guestsNum.pets


    const { adults, infants, children, pets } = filterBy.guestsNum


    if (currModalType === 'expended-pill') {
        return (

            // <section className={`stay-filter-main-warapper ${(currModalType === 'expended-pill') ? 'expended' : ''}`} onClick={() => onSelectModalType('expended-pill')} >


            <section className="filter-expended-pill-wrapper">

                {/* <section className={`location-wrapper ${activeTab === 'where' ? 'active' : ''}`} onClick={setActiveTab('where')}> */}
                <section className={`location-wrapper ${(activeTab === 'where') ? 'active' : ''}`} onClick={() => setActiveTab('where')}>
                    {/* <section className="location-wrapper active"> */}
                    <div className='location-con'>
                        <span className='title'>Where</span>
                        <form onSubmit={onSubmitSearch} id="destinationform" >
                            <input
                                ref={inputRef}
                                type="text"
                                name="txt"
                                value={filterBy.txt}
                                onChange={handleChange}
                                placeholder='Search destination'
                                autoComplete='off' />
                            {/* <button>test</button> */}
                            {/* {<span onClick={() => setFilterBy(prevFilterBy => ({ ...prevFilterBy, txt: '' }))}>X</span>} */}
                        </form>
                    </div>
                    {(activeTab === 'where') && <div className="region-warpper" >
                        <h4>Search by region</h4>
                        <div className='region-menu-con'>
                            <div>
                                <div className='region-image-con ratio-square' >
                                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1663956781/windbnb/imFlexible.jpg" alt="imFlexible" />
                                </div>
                                <div className='regoin-lable'>I`m flexible</div>
                            </div>
                            <div>
                                <div className='region-image-con ratio-square' onClick={() => onSelectValue('txt', '')}>
                                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1663956960/windbnb/middleEast.jpg" alt="middleEast" />
                                </div>
                                <div>Middle East</div>
                            </div>
                            <div>
                                <div className='region-image-con ratio-square' onClick={() => onSelectValue('txt', 'italy')}>
                                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1663957147/windbnb/italy.jpg" alt="italy" />
                                </div>
                                <div>Italy</div>
                            </div>
                            <div>
                                <div className='region-image-con ratio-square' onClick={() => onSelectValue('txt', 'United States')}>
                                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1663957203/windbnb/unitedStates.jpg" alt="unitedStates" />
                                </div>
                                <div>United States</div>
                            </div>
                            <div>
                                <div className='region-image-con ratio-square' onClick={() => onSelectValue('txt', 'greece')}>
                                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1663957295/windbnb/greece.jpg" alt="greece" />
                                </div>
                                <div>Greece</div>
                            </div>
                            <div>
                                <div className='region-image-con ratio-square' onClick={() => onSelectValue('txt', 'South America')}>
                                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1663957343/windbnb/southAmerica.jpg" alt="southAmerica" />
                                </div>
                                <div>South America</div>
                            </div>
                        </div>
                    </div>}
                </section>

                {/* {areas.map((item) => {
                        return <div className='continent-image-con' key={item} onClick={() => onSelectAmenity(item)}><img src="" alt="" /></div>
                    })} */}

                <section className="dates-wrapper">
                    <div className={`checkIn-dates-con ${(activeTab === 'checkIn') ? 'active' : ''}`} onClick={() => setActiveTab('checkIn')}>
                        <span className='title'>Check in</span>
                        <span className='sub-title'>{!filterBy.checkIn ? 'Add dates' : filterBy.checkIn}</span>
                        <div className='checkin-datepicker-con'>
                            {/* {(activeTab === 'checkIn') && <BasicDatePicker lable={'check in'} field={'checkIn'} handleDateChange={handleDateChange} />} */}
                            {(activeTab === 'checkIn') && <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <CalendarPicker
                                    date={value}
                                    views={["day", "month"]}
                                    showDaysOutsideCurrentMonth
                                    disablePast
                                    onChange={(newDate) => handleDateChange({ ...newDate })}
                                />
                            </LocalizationProvider>}
                        </div>
                    </div>
                    <div className={`checkOut-dates-con ${(activeTab === 'checkOut') ? 'active' : ''}`} onClick={() => setActiveTab('checkOut')}>
                        <span className='title'>Check out</span>
                        <span className='sub-title'>{!filterBy.checkOut ? 'Add dates' : filterBy.checkOut}</span>
                        <div className='checkOut-datepicker-con'>
                            {/* {(activeTab === 'checkOut') && <BasicDatePicker lable={'check out'} field={'checkOut'} handleDateChange={handleDateChange} />} */}
                            {(activeTab === 'checkOut') && <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <CalendarPicker
                                    date={value}
                                    views={["day", "month"]}
                                    showDaysOutsideCurrentMonth
                                    disablePast
                                    onChange={(newDate) => handleDateChange({ ...newDate })}
                                />
                            </LocalizationProvider>}
                        </div>
                    </div>
                </section>

                <section className={`guests-wrapper ${(activeTab === 'guests') ? 'active' : ''}`} onClick={() => setActiveTab('guests')}>
                    <div className='guests-con'>
                        <span className='title'>Who</span>
                        <span className='sub-title'>Add guests</span>
                        {(activeTab === 'guests') && <div className='grop-consists-wrapper'>
                            <div className='grop-main-con adults'>
                                <div className='text-con'>
                                    <div className='title'>Adults</div>
                                    <div className="sub">Ages 13 or above</div>
                                </div>
                                <div className="controls-con">
                                    <button className="btn btn-dec" disabled={adults === 1} onClick={() => onSelectGuestNum('adults', adults - 1)}>-</button>
                                    <span>{adults}</span>
                                    <button className="btn btn-inc" onClick={() => onSelectGuestNum('adults', adults + 1)}>+</button>
                                </div>
                            </div>

                            <div className='grop-main-con children'>
                                <div className='text-con'>
                                    <div className='title'>Children</div>
                                    <div className="sub">Ages 2-12</div>
                                </div>
                                <div className="controls-con">
                                    <button className="btn btn-dec" disabled={children === 0} onClick={() => onSelectGuestNum('children', children - 1)}>-</button>
                                    <span>{children}</span>
                                    <button className="btn btn-inc" onClick={() => onSelectGuestNum('children', children + 1)}>+</button>
                                </div>
                            </div>
                            <div className='grop-main-con infants'>
                                <div className='text-con'>
                                    <div className='title'>Infants</div>
                                    <div className="sub">Under 2</div>
                                </div>
                                <div className="controls-con">
                                    <button className="btn btn-dec" disabled={infants === 0} onClick={() => onSelectGuestNum('infants', infants - 1)}>-</button>
                                    <span>{infants}</span>
                                    <button className="btn btn-inc" onClick={() => onSelectGuestNum('infants', infants + 1)}>+</button>
                                </div>
                            </div>
                            <div className='grop-main-con pets'>
                                <div className='text-con'>
                                    <div className='title'>Pets</div>
                                    <div className="sub">Bringing a service animal?</div>
                                </div>
                                <div className="controls-con">
                                    <button className="btn btn-dec" disabled={pets === 0} onClick={() => onSelectGuestNum('pets', pets - 1)}>-</button>
                                    <span>{pets}</span>
                                    <button className="btn btn-inc" onClick={() => onSelectGuestNum('pets', pets + 1)}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className="search-con">
                        <button className='btn search-btn' type='submit' form="destinationform"><SearchIcon /> Search</button>
                    </div>
                </section>

            </section>


            // </section>
        )
    }


    return (
        <section className="filter-preview-pill-wrapper" onClick={() => onSelectModalType('expended-pill')}>
            <div className="anywhere" onClick={() => expendedTab('where')} >Anywhere</div>
            <div className="anyweek" onClick={() => expendedTab('checkIn')}>Any Week</div>
            <div className="addguests" onClick={() => expendedTab('guests')}>
                <span className='title'>Add guests</span>
                <div className="search-icon-con">
                    <SearchIcon />
                </div>
            </div>
        </section>
    )


}