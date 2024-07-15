import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from './redux/store'
import router from './routes'
import './index.css'
import '@vscode/codicons/dist/codicon.css'
import reportWebVitals from './reportWebVitals.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

ReactGA.initialize('G-YMVBKXXB61')
reportWebVitals(({ id, name, delta }) => {
  // Log the metric to the console
  // console.log({ id, name, value, delta, entries });

  // Send the metric to Google Analytics
  ReactGA.event({
    category: 'Web Vitals',
    action: name,
    label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    nonInteraction: true // Set this to true to avoid affecting bounce rate
  })
})
