import { Link } from "react-router-dom";

export function TripPreview({ trip }) {
    return (
        <article className="trip-preview-main-warpper">

            <Link to={`/stay/${trip.stay._id}`} >
                <div className="main-content">
                    <div className="img-container ratio-square">
                        <img src={trip.stay.stayImg} alt="trip" />
                    </div>
                    <div className="trip-info-container">
                        <span>{trip.stay.address.city}</span>
                        {trip.hostName && <span>Host by {trip.hostName}</span>}
                        <span>{new Date(trip.checkIn).toLocaleString('en-US', { month: 'short', day: 'numeric' })}-{new Date(trip.checkOut).getDate()}</span>
        
                    </div>
                </div>
            </Link>


        </article>
    )
}