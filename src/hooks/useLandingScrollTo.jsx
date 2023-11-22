import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useLandingScrollTo = ({ refs, currentlyOpen, editorBody }) => {
  const ref = useRef(false)
  const [renderStatus, setRenderStatus] = useState({
    heroSection: false,
    about: false,
    myskills: false,
    projects: false,
    contact: false
  })
  const location = useLocation()
  const checkRenderStatus = () => {
    return (
      Object.keys(renderStatus)
        .map((status) => {
          if (renderStatus[status] === false) return false
          return true
        })
        .find((find) => find === false) ?? true
    )
  }
  useEffect(() => {
    for (let x = 0; x < refs.length; x++) if (!refs[x]?.ref.current && !checkRenderStatus()) return
    if (!checkRenderStatus()) return
    const editorLayoutBody = editorBody?.current

    const revealComponents = [
      refs[0].ref.current.children[1].children[0],
      refs[1].ref.current.children[1].children[0].children[0].children[0],
      refs[1].ref.current.children[1].children[0].children[0].children[1],
      refs[1].ref.current.children[1].children[0].children[1],
      refs[2].ref.current.children[1].children[0].children[0].children[0],
      refs[2].ref.current.children[1].children[0].children[0].children[1],
      refs[2].ref.current.children[1].children[0].children[0].children[2],
      refs[3].ref.current.children[1].children[0].children[0],
      refs[3].ref.current.children[1].children[0].children[1].children[0].children[0],
      refs[3].ref.current.children[1].children[0].children[1].children[0].children[1],
      refs[3].ref.current.children[1].children[0].children[1].children[0].children[2],
      refs[3].ref.current.children[1].children[0].children[1].children[1].children[0],
      refs[3].ref.current.children[1].children[0].children[1].children[1].children[1],
      refs[4].ref.current.children[1].children[0].children[0]
    ]
    const getOffsetTop = (component) => {
      let offsetTop = 0
      const loop = (element) => {
        const nextElement = element?.offsetParent
        if (!nextElement) return
        offsetTop = offsetTop + element.offsetTop
        if (nextElement.classList.contains('editorlayout-body')) return
        loop(nextElement)
      }
      loop(component)
      return offsetTop
    }
    const scrollLandingHandler = () => {
      if (currentlyOpen.name !== 'App.jsx' && checkRenderStatus()) return
      revealComponents.map((component) => {
        const scrollScreen = editorLayoutBody.scrollTop + editorLayoutBody.clientHeight
        if (scrollScreen > getOffsetTop(component) + 200) {
          if (!component.classList.contains('reveal')) component.classList.add('reveal')
        }
      })
    }
    if (editorLayoutBody) {
      setTimeout(() => {
        scrollLandingHandler()
      }, 20)
      editorLayoutBody.addEventListener('scroll', scrollLandingHandler)
      return () => editorLayoutBody.removeEventListener('scroll', scrollLandingHandler)
    }
  }, [currentlyOpen.name, editorBody, refs])

  useEffect(() => {
    if (!ref.current) {
      for (let x = 0; x < refs.length; x++) if (!refs[x]?.renderTime) return

      for (let x = 0; x < refs.length; x++) {
        const refCode = refs[x]
        setTimeout(() => {
          setRenderStatus((prevState) => {
            const newState = { ...prevState }
            newState[refCode.name] = true
            return newState
          })
        }, refCode.renderTime)
      }
      return () => (ref.current = true)
    }
  }, [refs])
  useEffect(() => {
    for (let x = 0; x < refs.length; x++) if (!refs[x]?.ref) return
    const setFrameHeight = (refCodes) => {
      refCodes.current.children[1].classList.remove('wait')
      refCodes.current.children[1].classList.add('ready')
    }

    for (let x = 0; x < refs.length; x++) {
      if (renderStatus[refs[x]?.name]) setFrameHeight(refs[x]?.ref)
    }
  }, [refs, renderStatus])

  useEffect(() => {
    for (let x = 0; x < refs.length; x++) if (!refs[x]?.ref) return
    refs.map((refCode) => {
      if (location.hash === `#${refCode?.name}`)
        refCode?.ref.current.offsetParent.scrollTo(0, refCode?.ref.current.offsetTop - 26)
    })
  }, [location.hash, refs])

  return { renderStatus }
}

export default useLandingScrollTo
