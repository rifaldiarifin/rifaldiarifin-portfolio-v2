import { useEffect, useRef, useState } from 'react'
import getProjects from '../services/projects.service'

const useGetProjects = () => {
  const [bestProjects, setBestProjects] = useState(false)
  const [otherProjects, setOtherProjects] = useState(false)
  const ref = useRef(false)
  useEffect(() => {
    if (!ref.current) {
      const setProjects = async () => {
        try {
          const projects = await getProjects()
          const best = { data: [] }
          const other = { data: [] }

          projects.map((project) => {
            if (project.bestProject && typeof project.bestProject === 'number') return best.data.push(project)
            other.data.push(project)
          })
          if (best.data.length > 0) {
            best.data.sort((a, b) => {
              if (a.bestProject > b.bestProject) return 1
              if (a.bestProject < b.bestProject) return -1
              return 0
            })
          }
          setBestProjects(best.data)
          setOtherProjects(other.data)
        } catch (error) {
          console.error(error)
        }
      }
      setProjects()
      return () => (ref.current = true)
    }
  }, [])
  return { bestProjects, otherProjects }
}

export default useGetProjects
