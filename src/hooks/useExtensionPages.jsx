import { useEffect, useRef } from 'react'
import { useState } from 'react'
import getExtensionPages from '../extensions'

const useExtensionPages = () => {
  const [extensionPages, setExtensionPages] = useState(false)
  const ref = useRef(false)
  useEffect(() => {
    if (!ref.current) {
      const setPages = () => {
        try {
          getExtensionPages().then((res) => {
            setExtensionPages(res)
          })
        } catch (error) {
          setExtensionPages('ERROR')
          console.error(error)
        }
      }
      setPages()
      return () => (ref.current = true)
    }
  }, [])
  return extensionPages
}

export default useExtensionPages
