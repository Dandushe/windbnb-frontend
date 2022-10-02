
import { HostingReservation } from './cmps/hosting-reservation.jsx'
import { Listing } from './cmps/listing.jsx'
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
        path: '/dashboard/listing',
        component: <Listing />,
    },
    {
        path: '/dashboard/reservation',
        component: <HostingReservation />,
    },
    {
        path: '/user/profile',
        component: <UserProfile />,
    },
    {
        path: '/dashboard/trips',
        component: <UserTrips />,
    },
    {
        path: '/stay/:id',
        component: <StayDetails />,
    }

]

export default routes