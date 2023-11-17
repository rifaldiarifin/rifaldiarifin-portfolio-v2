import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useMainScrollTo = ({ about, myskills, projects, contact }) => {
  const location = useLocation()
  useEffect(() => {
    if (!about || !myskills || !projects || !contact) return
    switch (location.hash) {
      case '#about':
        about.current.offsetParent.scrollTo(0, about.current.offsetTop)
        break
      case '#myskills':
        myskills.current.offsetParent.scrollTo(0, myskills.current.offsetTop)
        break
      case '#projects':
        projects.current.offsetParent.scrollTo(0, projects.current.offsetTop)
        break
      case '#contact':
        contact.current.offsetParent.scrollTo(0, contact.current.offsetTop)
        break

      default:
        break
    }
  }, [about, contact, location, myskills, projects])
}

export default useMainScrollTo
