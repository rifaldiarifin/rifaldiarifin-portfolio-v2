import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/landing'

const router = createBrowserRouter([
  // landing page
  {
    path: '/',
    element: <Landing />
  }
])

export default router
