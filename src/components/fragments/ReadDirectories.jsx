import File from '../elements/File'
import Folder from './Folder'

const ReadDirectories = ({ root, currentSelected, callback }) => {
  const loopAll = (folder) => {
    return folder.children.map((state, index) => {
      return state.type === 'folder' ? (
        <Folder
          key={`${state.directory}${index}`}
          name={state.name}
          directory={state.directory}
          isSelected={currentSelected}
          callback={() => callback(state)}
          isActive
        >
          {state.children && state.children?.length > 0 ? loopAll(state) : null}
        </Folder>
      ) : state.type === 'paginated file' ? (
        <Folder
          key={`${state.directory}${index}`}
          name={state.name}
          to={state.to}
          isSelected={currentSelected}
          directory={state.directory}
          callback={() => callback(state)}
          icon="degrees"
          iconSize="6px"
          lock
          pathMatchExpand
        >
          {state.children && state.children?.length > 0 ? loopAll(state) : null}
        </Folder>
      ) : state.type === 'file' ? (
        <File
          key={`${state.directory}${index}`}
          name={state.name}
          isSelected={currentSelected}
          directory={state.directory}
          callback={() => callback(state)}
          to={state.to}
        />
      ) : state.type === 'paginated' ? (
        <File key={`${state.directory}${index}`} name={state.name} to={state.to} indicator={'green'} icon="#" />
      ) : (
        () => {
          throw new Error(`file type unknown!: (${state.directory})`)
        }
      )
    })
  }
  return <>{loopAll(root)}</>
}

export default ReadDirectories
