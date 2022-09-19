
import { ExplorePage } from './views/explore-page.jsx'
import { StayDetails } from './views/stay-details.jsx'
import { UserTrips } from './views/user-trips.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <ExplorePage />,
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