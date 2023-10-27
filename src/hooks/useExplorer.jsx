import { useEffect, useRef, useState } from 'react'
import { rawExplorer } from '../services/rawExplorer'
import { readDirectories } from '../utils/readDirectories'

const useExplorer = () => {
  const [explorer, setExplorer] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef(false)
  useEffect(() => {
    if (!ref.current) {
      rawExplorer().then((res) => {
        const newExplorer = readDirectories(res)
        setExplorer(newExplorer)
        setIsLoading(false)
      })
      return () => (ref.current = true)
    }
  }, [])
  return { explorer, isLoading }
}

export default useExplorer
