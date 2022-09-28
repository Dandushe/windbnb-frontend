import { TripPreview } from "./trip-preview";

export function TripsList({ trips }) {
    return (
        <section className="trip-list">
            
            {trips.map(trip => <TripPreview key={trip._id} trip={trip} />)}
        </section>
    )
}