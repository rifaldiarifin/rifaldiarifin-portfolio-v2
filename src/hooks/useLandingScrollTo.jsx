import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useLandingScrollTo = ({ about, myskills, projects, contact }) => {
  const location = useLocation()
  useEffect(() => {
    if (!about || !myskills || !projects || !contact) return
    switch (location.hash) {
      case '#about':
        about.current.offsetParent.scrollTo(0, about.current.offsetTop - 26)
        break
      case '#myskills':
        myskills.current.offsetParent.scrollTo(0, myskills.current.offsetTop - 26)
        break
      case '#projects':
        projects.current.offsetParent.scrollTo(0, projects.current.offsetTop - 26)
        break
      case '#contact':
        contact.current.offsetParent.scrollTo(0, contact.current.offsetTop - 26)
        break

      default:
        break
    }
  }, [about, contact, location, myskills, projects])
}

export default useLandingScrollTo
