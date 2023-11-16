import { useRef } from 'react'
import useCihuyTerm from '../../hooks/useCihuyTerm'

const CihuyTerm = () => {
  const cihuyTermRef = useRef(null)
  const { username, commands, directory, inputCarretPosition, inputCommand, onChange, onKeyDown, renderText } =
    useCihuyTerm({ cihuyTermRef })
  return (
    <label htmlFor="cihuy-term1" className="cihuy-term" ref={cihuyTermRef}>
      <div className="term-body">
        {commands.map((command, index) => (
          <div key={index} className="line-command">
            {command.commandType === 'INPUT' ? (
              <>
                <span className="username">{command.username}</span>:
                <span className="directory">{command.directory}</span> $ {command.command}
              </>
            ) : (
              command.command
            )}
          </div>
        ))}
        <input
          type="text"
          id="cihuy-term1"
          value={inputCommand}
          onChange={onChange}
          onKeyDown={onKeyDown}
          spellCheck={false}
          autoFocus
        />
        <div className="input-command idle">
          <span className="username">{username}</span>:<span className="directory">{directory}</span> ${' '}
          {renderText(inputCarretPosition)}
        </div>
      </div>
    </label>
  )
}

export default CihuyTerm
