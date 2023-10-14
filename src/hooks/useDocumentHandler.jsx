import { useEffect, useRef } from 'react'
import CONFIG from '../config/environment'

export const useDocumentTitle = (title) => {
  if (!title) throw new Error('"Title" argument cannot be empty!')
  if (typeof title !== 'string') throw new Error('"Title" must be a string!')
  const ref = useRef(false)
  useEffect(() => {
    if (!ref.current) {
      document.title = `${title} - ${CONFIG.mainTitle}`
      return () => (ref.current = true)
    }
  }, [title])
}
