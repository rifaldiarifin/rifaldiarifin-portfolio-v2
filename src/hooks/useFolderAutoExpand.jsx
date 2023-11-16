import { useEffect } from 'react'

const useFolderAutoExpand = (refElement, match, pathMatchExpand, isSelected) => {
  useEffect(() => {
    if (refElement && pathMatchExpand && match) {
      if (match === isSelected) {
        refElement.current.classList.add('active')
      } else {
        refElement.current.classList.remove('active')
      }
    }
  }, [isSelected])
}

export default useFolderAutoExpand
