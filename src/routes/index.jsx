import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoadingResource from '../components/fragments/LoadingResource'
import '../assets/fonts/Fira_Code_v6.2/woff2/FiraCode-Regular.woff2'
import '../assets/fonts/JetBrainsMono-2.304/webfonts/JetBrainsMono-Bold.woff2'
import '../assets/fonts/JetBrainsMono-2.304/webfonts/JetBrainsMono-ExtraBold.woff2'
import '../assets/fonts/JetBrainsMono-2.304/webfonts/JetBrainsMono-Regular.woff2'
import '../assets/fonts/JetBrainsMono-2.304/webfonts/JetBrainsMono-SemiBold.woff2'
import '../assets/fonts/JetBrainsMono-2.304/webfonts/JetBrainsMono-Light.woff2'
import '../assets/fonts/googlefonts/Montserrat/static/Montserrat-ExtraBold.ttf'
import ErrorElement from '../pages/errorElement'

const CihuyCode = React.lazy(() => import('../pages/cihuyCode'))
const PopupAlertContextProvider = React.lazy(() => import('../contexts/PopupAlertContext'))
const ToastNotificationProvider = React.lazy(() => import('../contexts/ToastNotificationContext'))

const router = createBrowserRouter([
  // CihuyCode page
  {
    path: '/*',
    errorElement: <ErrorElement />,
    element: <Suspense fallback={<LoadingResource />}>
      <PopupAlertContextProvider>
        <ToastNotificationProvider>
          <CihuyCode />
        </ToastNotificationProvider>
      </PopupAlertContextProvider>
    </Suspense>
  }
])

export default router
