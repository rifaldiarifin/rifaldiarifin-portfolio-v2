import { useEffect } from 'react'
import { useMatch } from 'react-router-dom'

const useFolderAutoExpand = (refElement, match, pathMatchExpand) => {
  const isMatch = useMatch({ path: match, end: true })
  useEffect(() => {
    if (refElement && pathMatchExpand && match) {
      if (isMatch) {
        refElement.current.classList.add('active')
      } else {
        refElement.current.classList.remove('active')
      }
    }
  }, [isMatch])
}

export default useFolderAutoExpand
