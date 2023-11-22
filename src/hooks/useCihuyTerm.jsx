import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import cihuyCommands from '../cihuycommands'

const useCihuyTerm = ({ cihuyTermRef }) => {
  const username = 'User'
  const directory = '~/Desktop/rifaldiarifin'
  const [commands, setCommands] = useState([
    {
      command: (
        <>
          Welcome to <span className="accent-col-1 font-weg-bold">CihuyTerm</span> v1.0.0{'\n'}
          Type <span className="font-weg-bold">&quot;help&quot;</span> to show the commands.{'\n'}
          {'\n'}
        </>
      ),
      commandType: 'OUTPUT',
      execute: false,
      username,
      directory
    }
  ])
  const [inputCommand, setInputCommand] = useState('')
  const [inputCarretPosition, setInputCarretPosition] = useState(inputCommand.length)
  const timeIdleTerminal = useRef(null)


  const onChange = (event) => {
    setInputCommand(`${event.target.value}`)
    setInputCarretPosition(event.target.selectionStart)
    event.target.nextElementSibling.classList.remove('idle')
    clearTimeout(timeIdleTerminal.current)
    timeIdleTerminal.current = setTimeout(() => {
      event.target.nextElementSibling.classList.add('idle')
    }, 200)
  }
  const renderText = (indexCarret) => {
    return (
      <>
        {inputCommand.slice(0, indexCarret)}
        <span className="carret"></span>
        {inputCommand.slice(indexCarret)}
      </>
    )
  }
  const changeCarret = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.target.nextElementSibling.classList.remove('idle')
    setTimeout(() => {
      setInputCarretPosition(event.target.selectionStart)
      event.target.nextElementSibling.classList.add('idle')
    }, 10)
  }
  const onEnterCommand = (event) => {
    if (event.key !== 'Enter') return
    setCommands([
      ...commands,
      {
        command: inputCommand,
        commandType: 'INPUT',
        execute: false,
        username,
        directory
      }
    ])
    setInputCommand('')

    event.target.nextElementSibling.classList.remove('idle')
    clearTimeout(timeIdleTerminal.current)
    timeIdleTerminal.current = setTimeout(() => {
      event.target.nextElementSibling.classList.add('idle')
    }, 200)
  }
  const onKeyDown = (event) => {
    onEnterCommand(event)
    changeCarret(event)
  }

  // USE EFFECTS
  useEffect(() => {
    if (!cihuyTermRef.current) return
    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight)
  }, [cihuyTermRef, inputCommand, commands])

  //
  useEffect(() => {
    const findExecute = commands.findIndex(
      (find) => find.commandType === 'INPUT' && find.execute === false && find.command.length > 0
    )
    if (findExecute === -1) return

    const respondCommand = (state, input) => {
      const command = input.split(' ')
      const responds = [
        {
          command: 'clear',
          func: () => {
            setCommands([])
          }
        },
        {
          command: 'echo',
          func: () => {
            state.splice(findExecute + 1, 0, {
              command: cihuyCommands.echo(command),
              commandType: 'OUTPUT',
              execute: null,
              username,
              directory
            })
          }
        },
        {
          command: 'help',
          func: () => {
            state.splice(findExecute + 1, 0, {
              command: (
                cihuyCommands.help()
              ),
              commandType: 'OUTPUT',
              execute: null,
              username,
              directory
            })
            setTimeout(() => {
              cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 180)
            }, 20)
          }
        },
        {
          command: 'show',
          func: () => {
            const decision = () => {
              switch (command[1]) {
                case 'all':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 3040)
                  }, 20)
                  return (
                    <>
                      {cihuyCommands.landingPage.hero()}
                      ___________________________________________{'\n'}
                      {'\n'}
                      {cihuyCommands.landingPage.about()}
                      {cihuyCommands.landingPage.myskills()}
                      {cihuyCommands.landingPage.projects()}
                      {cihuyCommands.landingPage.contact()}
                    </>
                  )
                case 'about':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 340)
                  }, 20)
                  return cihuyCommands.landingPage.about()
                case 'myskills':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 210)
                  }, 20)
                  return cihuyCommands.landingPage.myskills()
                case 'projects':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 1990)
                  }, 20)
                  return cihuyCommands.landingPage.projects()
                case 'contact':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 360)
                  }, 20)
                  return cihuyCommands.landingPage.contact()

                default:
                  return 'nothing to show, please type by specific:\nex: "show all"\n\nall     about     myskills     projects      contact\n\n'
              }
            }
            state.splice(findExecute + 1, 0, {
              command: decision(),
              commandType: 'OUTPUT',
              execute: null,
              username,
              directory
            })
          }
        }
      ]

      const findCommand = responds.find((find) => find.command === command[0])
      if (!findCommand) {
        state.splice(findExecute + 1, 0, {
          command: `${command[0]}: command not found`,
          commandType: 'OUTPUT',
          execute: null,
          username,
          directory
        })
        return
      }
      findCommand.func()
    }

    setCommands((prevState) => {
      const newState = [...prevState]
      newState[findExecute].execute = true

      respondCommand(newState, newState[findExecute].command)
      return newState
    })
  }, [commands])

  return {
    username,
    commands,
    inputCommand,
    inputCarretPosition,
    directory,

    onChange,
    renderText,
    onKeyDown
  }
}

export default useCihuyTerm
