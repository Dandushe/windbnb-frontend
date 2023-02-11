
import { HostingReservation } from './cmps/hosting-reservation.jsx'
import { Listings } from './cmps/listings.jsx'
import { BecomeHost } from './views/become-host.jsx'
import { ExplorePage } from './views/explore-page.jsx'
import { StayDetails } from './views/stay-details.jsx'
import { UserProfile } from './views/user-profile.jsx'
import { UserTrips } from './views/user-trips.jsx'

const routes = [
    {
        path: '/',
        component: <ExplorePage />,
    },
    {
        path: '/host',
        component: <BecomeHost />,
    },
    {
        path: '/stay/:id',
        component: <StayDetails />,
    },
    {
        path: '/dashboard/listing',
        component: <Listings />,
    },
    {
        path: '/dashboard/reservation',
        component: <HostingReservation />,
    },
    {
        path: '/dashboard/trips',
        component: <UserTrips />,
    },
    {
        path: '/user/profile',
        component: <UserProfile />,
    }
]

export default routes