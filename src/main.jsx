import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import PopupAlertContextProvider from './contexts/PopupAlertContext'
import store from './redux/store'
import router from './routes'
import './assets/fonts/Fira_Code_v6.2/fira_code.css'
import './assets/fonts/JetBrainsMono-2.304/main.css'
import './assets/fonts/googlefonts/Montserrat/main.css'
import './assets/fonts/googlefonts/Poppins/main.css'
import './styles/index.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import './assets/icons8/fluent/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PopupAlertContextProvider>
        <RouterProvider router={router} />
      </PopupAlertContextProvider>
    </Provider>
  </React.StrictMode>
)
