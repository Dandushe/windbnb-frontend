
import { BecomeHost } from './views/become-host.jsx'
import { ExplorePage } from './views/explore-page.jsx'
import { StayDetails } from './views/stay-details.jsx'
import { UserProfile } from './views/user-profile.jsx'
import { UserTrips } from './views/user-trips.jsx'

// Routes accesible from the main navigation (in AppHeader)
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
        path: '/user/profile',
        component: <UserProfile/>,
    },
    {
        path: '/user/trips',
        component: <UserTrips/>,
    },
    {
        path: '/stay/:id',
        component: <StayDetails />,
    }
   
]

export default routes