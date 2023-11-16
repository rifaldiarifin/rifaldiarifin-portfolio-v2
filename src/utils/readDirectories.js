export function readDirectories(root, showRoot = false) {
  const newState = { ...root }
  const files = []
  showRoot ? (newState.directory = '/root') : (newState.directory = '')

  const loopAll = (folder) => {
    for (let x = 0; x < folder.children.length; x++) {
      const state = folder.children[x]
      state.directory = `${folder.directory}/${state.name}`
      state.type === 'file' || state.type === 'paginated file' ? files.push(state) : null
      if (state.children && state.children?.length > 0) loopAll(state)
    }
  }

  loopAll(newState)
  return { root, files }
}
