import { Link } from "react-router-dom";

export function TripPreview({ trip }) {
    console.log('yoyoyoyo??');
    return (
        <article className="trip-preview-main-warpper">
            {trip &&
                <Link to={`/stay/${trip.stay._id}`} >
                    <div className="main-content">
                        <div className="img-container ratio-square">
                            <img src={trip.stay.stayImg} alt="ppp" />
                        </div>
                        <div className="trip-info-container">
                            <span>{trip.stay.address.city}</span>
                            {trip.hostName && <span>Host by {trip.hostName}</span>}
                            <span>{trip.checkIn}</span>
                            <span>{trip.checkOut}</span>
                        </div>
                    </div>
                </Link>}

            {!trip && <div className="trip-banner-wrapper">
                <div className="banner-text-con">
                    <div>
                        <p className="title">No trips booked...yet!</p>
                        <p className="sub">Time to dust off your bags and start planning your next adventure</p>
                    </div>
                    <Link className="link-explore" to={`/`} >Start searching</Link>
                </div>
                <div className="img-container">
                    <img src="https://res.cloudinary.com/dwnu4ghut/image/upload/v1664009033/windbnb/family.jpg" alt="family" />
                </div>
            </div>}

        </article>
    )
}