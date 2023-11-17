import { useEffect, useState } from 'react'

const useSearchFilter = (callback, data = [], initInput = '') => {
  const [searchInput, setSearchInput] = useState(initInput)
  const [searchResult, setSearchResult] = useState(false)
  const dismisResult = (index) => {
    setSearchResult((prevState) => {
      const newState = [...prevState]
      newState.splice(index, 1)
      return newState
    })
  }
  useEffect(() => {
    if (data) {
      if (searchInput.length === 0) return setSearchResult(false)
      const result = data.filter((curr, index, arr) => callback(searchInput, curr, index, arr))
      setSearchResult(result)
    }
  }, [searchInput])

  return { searchResult, searchInput, setSearchInput, dismisResult }
}

export default useSearchFilter
