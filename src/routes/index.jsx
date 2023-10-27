import { createBrowserRouter } from 'react-router-dom'
import CihuyCode from '../pages/cihuyCode'

const router = createBrowserRouter([
  // CihuyCode page
  {
    path: '/*',
    element: <CihuyCode />
  }
])

export default router
