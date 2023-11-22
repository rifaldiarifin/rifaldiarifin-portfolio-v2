import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useMainScrollTo = ({ refs, editorBody, currentlyOpen }) => {
  const ref = useRef(false)
  const [renderStatus, setRenderStatus] = useState({ time: null, status: false })
  const location = useLocation()
  const checkRenderStatus = () => {
    return renderStatus.status
  }
  useEffect(() => {
    for (let x = 0; x < refs.length; x++) if (!refs[x]?.ref.current && !checkRenderStatus()) return
    if (!checkRenderStatus()) return
    const editorLayoutBody = editorBody?.current

    const revealComponents = [
      refs[0].ref.current,
      refs[1].ref.current.children[0].children[0],
      refs[1].ref.current.children[0].children[1],
      refs[1].ref.current.children[1],
      refs[2].ref.current.children[0].children[0],
      refs[2].ref.current.children[0].children[1],
      refs[2].ref.current.children[0].children[2],
      refs[3].ref.current.children[0],
      refs[3].ref.current.children[1].children[0].children[0],
      refs[3].ref.current.children[1].children[0].children[1],
      refs[3].ref.current.children[1].children[0].children[2],
      refs[3].ref.current.children[1].children[1].children[0],
      refs[3].ref.current.children[1].children[1].children[1],
      refs[4].ref.current.children[0],
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
    const scrollMainHandler = () => {
      if (currentlyOpen.name !== 'main.jsx' && checkRenderStatus()) return
      revealComponents.map(component => {
        const scrollScreen = editorLayoutBody.scrollTop + editorLayoutBody.clientHeight
        if (scrollScreen > getOffsetTop(component) + 200) {
          if(!component.classList.contains('reveal')) component.classList.add('reveal')
        }
      })
    }
    if (editorLayoutBody) {
      setTimeout(() => {
        scrollMainHandler()
      }, 20);
      editorLayoutBody.addEventListener('scroll', scrollMainHandler)
      return () => editorLayoutBody.removeEventListener('scroll', scrollMainHandler)
    }
  }, [currentlyOpen.name, editorBody, refs])

  useEffect(() => {
    if (!ref.current) {
      for (let x = 0; x < refs.length; x++) if (!refs[x]?.renderTime) return
      const total = refs.reduce((prev, curr) => {
        return prev = prev + curr.renderTime
      }, 0)

      setTimeout(() => {
        setRenderStatus({ time: total / refs.length, status: true })
      }, total / refs.length);
      return () => ref.current = true
    }
  }, [refs])

  useEffect(() => {
    for (let x = 0; x < refs.length; x++) if (!refs[x]?.ref) return

    const setFrameHeight = (refCode) => {
      refCode.current.parentElement.classList.remove('wait')
      refCode.current.parentElement.classList.add('ready')
    }
    if (renderStatus.status) setFrameHeight(refs[0].ref)
  }, [refs, renderStatus])

  useEffect(() => {
    for (let x = 0; x < refs.length; x++) if (!refs[x]?.ref) return
    refs.map((refCode) => {
      if (location.hash === `#${refCode?.name}`)
        refCode.ref.current.offsetParent.scrollTo(0, refCode.ref.current.offsetTop)
    })
  }, [location.hash, refs])

  return { renderStatus }
}

export default useMainScrollTo
