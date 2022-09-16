
import { ExplorePage } from './views/explore-page.jsx'
import { StayDetails } from './views/stay-details.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <ExplorePage />,
    },
    {
        path: '/stay/:id',
        component: <StayDetails />,
    }
   
]

export default routes