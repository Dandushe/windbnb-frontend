

export function TripPreview({ trip }) {

    return (
        <article className="trip-preview">
            <div className="img-container ratio-square">
                <img src={trip.stay.stayImg} alt="ppp" />
            </div>
            <div className="trip-info-container">
                <span>{trip.stay.address.city}</span>
                <span>{trip.checkIn}</span>
                <span>{trip.checkOut}</span>
            </div>
        </article>
    )
}