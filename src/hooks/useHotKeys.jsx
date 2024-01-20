import { useEffect, useState } from 'react'

// eslint-disable-next-line no-unused-vars
const useHotKeys = (keys) => {
  const [hotKeys, setHotKeys] = useState([])
  const pushKey = (payload = []) => {
    setHotKeys((prevState) => {
      const newState = [...prevState]
      payload.map((key) => {
        if (!newState.includes(key)) newState.push(key)
      })
      return newState
    })
  }

  const parseHotKey = (event) => {
    const press = []
    if (event.ctrlKey) press.push('Ctrl')
    if (event.altKey) press.push('Alt')
    if (event.shiftKey) press.push('Shift')
    if (event.metaKey) press.push('Meta')
    if (event.key !== 'Control' && event.key !== 'Alt' && event.key !== 'Meta' && event.key !== 'Shift')
      press.push(event.key.length === 1 ? event.key.toUpperCase() : event.key)
    return press
  }
  useEffect(() => {
    const handleHotKeys = (event) => {
      event.preventDefault()
      console.clear()
      pushKey(parseHotKey(event))
    }
    document.addEventListener('keydown', handleHotKeys)
    console.log(hotKeys)
    return () => document.removeEventListener('keydown', handleHotKeys)
  }, [hotKeys])
}

export default useHotKeys
