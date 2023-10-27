export function readDirectories(root, showRoot = false) {
  const newState = { ...root }
  showRoot ? (newState.directory = '/root') : (newState.directory = '')

  const loopAll = (folder) => {
    for (let x = 0; x < folder.children.length; x++) {
      const state = folder.children[x]
      state.directory = `${folder.directory}/${state.name}`

      if (state.children && state.children?.length > 0) loopAll(state)
    }
  }

  loopAll(newState)
  return newState
}
