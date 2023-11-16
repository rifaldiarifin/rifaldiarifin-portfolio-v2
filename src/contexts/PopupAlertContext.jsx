import { createContext, useContext, useState } from 'react'
import ScreenAlert from '../components/layouts/ScreenAlert'
import AlertWindow from '../components/fragments/AlertWindow'

const PopupAlertContext = createContext(null)

const PopupAlertContextProvider = ({ children }) => {
  const initState = {
    isAlert: false,
    titleBar: '',
    title: 'Hello World',
    description: 'Yoo Watsupppp bro :D',
    alertType: 'message',
    alertStyle: 'info',
    action: {
      ok: () => {},
      yes: () => {},
      no: () => {}
    }
  }
  const [alertData, setAlertData] = useState(initState)

  const clearPopupAlert = () => {
    setAlertData((prevState) => {
      const newState = { ...prevState }
      newState.isAlert = false
      return newState
    })
  }

  const setPopupAlert = (payload) => {
    setAlertData({ ...alertData, isAlert: true, ...payload })
  }

  return (
    <PopupAlertContext.Provider value={setPopupAlert}>
      {children}
      <ScreenAlert active={alertData.isAlert}>
        {alertData.isAlert && (
          <AlertWindow
            titleBar={alertData.titleBar}
            title={alertData.title}
            description={alertData.description}
            alertType={alertData.alertType}
            alertStyle={alertData.alertStyle}
            action={{
              close: clearPopupAlert,
              no: async () => {
                await alertData.action.no()
                clearPopupAlert()
              },
              ok: async () => {
                await alertData.action.ok()
                clearPopupAlert()
              },
              yes: async () => {
                await alertData.action.yes()
                clearPopupAlert()
              }
            }}
          />
        )}
      </ScreenAlert>
    </PopupAlertContext.Provider>
  )
}

export default PopupAlertContextProvider

// eslint-disable-next-line react-refresh/only-export-components
export function usePopupAlert() {
  return useContext(PopupAlertContext)
}
