import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home         from './pages/Home'
import CollegeList  from './pages/CollegeList'
import CollegeDetail from './pages/CollegeDetail'
import Rounds       from './pages/Rounds'
import CollegeMap   from './pages/CollegeMap'
import Papers       from './pages/Papers'
import Notes        from './pages/Notes'
import Favorites    from './pages/Favorites'
import Profile      from './pages/Profile'
import NotFound     from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,          element: <Home /> },
      { path: 'colleges',     element: <CollegeList /> },
      { path: 'colleges/:id', element: <CollegeDetail /> },
      { path: 'rounds',       element: <Rounds /> },
      { path: 'map',          element: <CollegeMap /> },
      { path: 'papers',       element: <Papers /> },
      { path: 'notes',        element: <Notes /> },
      { path: 'favorites',    element: <Favorites /> },
      { path: 'profile',      element: <Profile /> },
      { path: '*',            element: <NotFound /> },
    ],
  },
])

export default router
