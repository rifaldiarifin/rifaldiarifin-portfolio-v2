import { useEffect, useRef, useState } from 'react'

const useCihuyReactRender = (refs) => {
  const ref = useRef(false)
  const [renderStatus, setRenderStatus] = useState(false)
  useEffect(() => {
    if (ref.current) return
    for (let x = 0; x < refs.length; x++) if (!refs[x]?.ref) return

    if (!renderStatus) {
      const renderCollect = refs.reduce((prev, curr) => {
        return { ...prev, [curr.name]: false }
      }, {})
      setRenderStatus(renderCollect)
    }

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
  return renderStatus
}

export default useCihuyReactRender
