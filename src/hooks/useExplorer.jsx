import { useEffect, useRef, useState } from 'react'
import { rawExplorer } from '../services/rawExplorer.service'
import { readDirectories } from '../utils/readDirectories'

const useExplorer = () => {
  const [explorer, setExplorer] = useState(false)
  const [dataFiles, setDataFiles] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef(false)
  useEffect(() => {
    if (!ref.current) {
      rawExplorer().then((res) => {
        const { root, files } = readDirectories(res)
        setDataFiles(files)
        setExplorer(root)
        setIsLoading(false)
      })
      return () => (ref.current = true)
    }
  }, [])
  return { explorer, dataFiles, isLoading }
}

export default useExplorer
