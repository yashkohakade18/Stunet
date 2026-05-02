import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home         from './pages/Home'
import About        from './pages/About'
import Contact      from './pages/Contact'
import Dashboard    from './pages/Dashboard'
import Login        from './pages/Login'
import Register     from './pages/Register'
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
      { path: 'about',        element: <About /> },
      { path: 'contact',      element: <Contact /> },
      { path: 'dashboard',    element: <Dashboard /> },
      { path: 'login',        element: <Login /> },
      { path: 'register',     element: <Register /> },
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
