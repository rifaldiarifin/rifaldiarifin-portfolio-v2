import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

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

  const portfolioText = {
    hero: (
      <>
        {'\n'}
        {'\n'}
        {'\n'}
        <span className="font-weg-bold">
          Hi, I&apos;m <span className="accent-col-1">R</span>ifaldi Arifin
        </span>
        {'\n'}
        <span className="font-weg-bold">
          Lets make <span className="accent-col-1">your dream</span> come <span className="accent-col-1">true</span>
        </span>
        {'\n'}
        {'\n'}
        <a href="mailto:rifaldiarifinn@gmail.com" target="_blank" className="hyperlink" rel="noreferrer">
          Contact
        </a>{' '}
        <a href="#" target="_blank" className="hyperlink" rel="noreferrer">
          Download CV
        </a>
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
      </>
    ),
    about: (
      <>
        {'\n'}
        <span className="accent-col-1 font-weg-600"># About Me</span>
        {'\n'}
        {'\n'}
        Hi there, My name is Rifaldi Arifin, {'\n'}
        I&apos;m a Web Developer with over 2 years of experience.{'\n'}
        {'\n'}I am very interested in the world of programming, starting with a simple website. {'\n'}
        And now creating user-friendly responsive websites, {'\n'}
        modern websites, {'\n'}
        single-page applications (SPA), {'\n'}
        animations, and more.{'\n'}
        {'\n'}I started learning programming starting in 2021, {'\n'}I learned programming on my own with the intention
        and determination to be able to learn many things.{'\n'}
        {'\n'}
      </>
    ),
    myskills: (
      <>
        {'\n'}
        <span className="accent-col-1 font-weg-600"># My skills in developing</span>
        {'\n'}
        {'\n'}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Javascript (ES6+){' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> TypeScript | ## Recently that I used {'\n'}
        <span className="accent-col-1 font-weg-700">{'>'}</span> React{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Node.js |{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> React{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Node.js {'\n'}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Express{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> MongoDB | {'\n'}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Redux{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Jest | ## Favorites {'\n'}
        {'                                  '}| <span className="accent-col-1 font-weg-700">{'>'}</span> MongoDB{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Express{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> React{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Node.js{'\n'}
        {'\n'}
      </>
    ),
    projects: (
      <>
        {'\n'}
        <span className="accent-col-1 font-weg-600"># Projects i&apos;ve worked on</span>
        {'\n'}
        {'\n'}
        ----------------------------------------------------------------------{'\n'}|{' '}
        <span className="accent-col-1 font-weg-600">Featured Project</span> |{'\n'}| ## Cafe CBN Remake |{'\n'}| |{'\n'}
        | Remake project of an old Cafe CBN project. |{'\n'}| a Self-Service Kiosk Ordering (Single-Page Application), |
        {'\n'}| provide devices for customer satisfaction in ordering |{'\n'}| according to what they want, with
        easy-to-navigate interface, |{'\n'}| just touch, pay and get your order. |{'\n'}| |{'\n'}|{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> React{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Node.js{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Firebase{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Chart.js |{'\n'}|{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Netlify |{'\n'}| |{'\n'}|{' '}
        <span className="accent-col-1 font-weg-700">{'=>'}</span>{' '}
        <a
          href="https://github.com/rifaldiarifin/cafe-cbn-remake"
          target="_blank"
          className="hyperlink"
          rel="noreferrer"
        >
          https://github.com/rifaldiarifin/cafe-cbn-remake
        </a>{' '}
        |{'\n'}| <span className="accent-col-1 font-weg-700">{'=>'}</span>{' '}
        <a href="https://cafecbn.netlify.app" target="_blank" className="hyperlink" rel="noreferrer">
          https://cafecbn.netlify.app
        </a>{' '}
        |{'\n'}
        ----------------------------------------------------------------------{'\n'}
        {'\n'}
        ----------------------------------------------------------------------{'\n'}|{' '}
        <span className="accent-col-1 font-weg-600">Featured Project</span> |{'\n'}| ## Cafe CBN API |{'\n'}| |{'\n'}|
        API data for Cafe CBN application. |{'\n'}| |{'\n'}| |{'\n'}|{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Typescript{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> MongoDB{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Express{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Node.js |{'\n'}|{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Jest{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Vercel |{'\n'}| |{'\n'}|{' '}
        <a href="https://github.com/rifaldiarifin/cafe-cbn-api" target="_blank" className="hyperlink" rel="noreferrer">
          https://github.com/rifaldiarifin/cafe-cbn-api
        </a>{' '}
        <span className="accent-col-1 font-weg-700">{'<='}</span> |{'\n'}
        ----------------------------------------------------------------------{'\n'}
        {'\n'}
        ----------------------------------------------------------------------{'\n'}|{' '}
        <span className="accent-col-1 font-weg-600">Featured Project</span> |{'\n'}| ## laporMasyarakat |{'\n'}| |{'\n'}
        | Reports and handles all community complaints, |{'\n'}| to realize good communication between communities. |
        {'\n'}| (Single-Page Application) |{'\n'}| |{'\n'}| <span className="accent-col-1 font-weg-700">{'>'}</span> EJS{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Node.js{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Express{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> MySQL |{'\n'}| |{'\n'}|{' '}
        <span className="accent-col-1 font-weg-700">{'=>'}</span>{' '}
        <a
          href="https://github.com/rifaldiarifin/lapor-masyarakat"
          target="_blank"
          className="hyperlink"
          rel="noreferrer"
        >
          https://github.com/rifaldiarifin/lapor-masyarakat
        </a>{' '}
        |{'\n'}
        ----------------------------------------------------------------------{'\n'}
        {'\n'}
        {'\n'}# Other Projects{'\n'}
        {'\n'}
        =--------------------------------------------------------------------={'\n'}
        {'\n'}
        ## Cafe CBN (Old){'\n'}
        {'\n'}
        Cafe CBN, a website that manages ordering transactions, {'\n'}
        as well as manages the drink and food menus.{'\n'}
        {'\n'}
        <span className="accent-col-1 font-weg-700">{'>'}</span> HTML{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> CSS{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Javascript{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> PHP{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> MySQL{'\n'}
        {'\n'}
        <a href="https://github.com/rifaldiarifin/cafe-cbn" target="_blank" className="hyperlink" rel="noreferrer">
          https://github.com/rifaldiarifin/cafe-cbn
        </a>
        {'\n'}
        {'\n'}
        =--------------------------------------------------------------------={'\n'}
        {'\n'}
        ## Modern UI Components{'\n'}
        {'\n'}
        Modern components, such as input form validation, buttons, {'\n'}
        popup alerts for me to reuse in other projects, {'\n'}
        are made using only pure CSS and vanilla javascript.{'\n'}
        {'\n'}
        <span className="accent-col-1 font-weg-700">{'>'}</span> HTML{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> CSS{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Javascript{'\n'}
        {'\n'}
        <a href="https://github.com/rifaldiarifin/in-css" target="_blank" className="hyperlink" rel="noreferrer">
          https://github.com/rifaldiarifin/in-css
        </a>
        {'\n'}
        {'\n'}
        =--------------------------------------------------------------------={'\n'}
        {'\n'}
        ## My Portfolio V1{'\n'}
        {'\n'}
        My first website portfolio (Single-Page Application), {'\n'}
        themed Universe with enrichment of modern technology appearance, {'\n'}
        simple website.{'\n'}
        {'\n'}
        <span className="accent-col-1 font-weg-700">{'>'}</span> HTML{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> CSS{' '}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Javascript{'\n'}
        {'\n'}
        <a href="https://github.com/rifaldiarifin/in-css" target="_blank" className="hyperlink" rel="noreferrer">
          https://github.com/rifaldiarifin/in-css
        </a>
        {'\n'}
        {'\n'}
        =--------------------------------------------------------------------={'\n'}
        {'\n'}
        ## Icons8 CSS Generator{'\n'}
        {'\n'}A mini script code to generate CSS code from icons8 icons, {'\n'}
        currently only supports &quot;.ico&quot; and &quot;.png&quot; formats, this script {'\n'}
        generates CSS Classes, also easy to configure size, color, {'\n'}
        And so on, mostly I use this for other projects too.{'\n'}
        {'\n'}
        <span className="accent-col-1 font-weg-700">{'>'}</span> Node.js{'\n'}
        {'\n'}
        <a
          href="https://github.com/rifaldiarifin/icons8-css-generator"
          target="_blank"
          className="hyperlink"
          rel="noreferrer"
        >
          https://github.com/rifaldiarifin/icons8-css-generator
        </a>
        {'\n'}
        {'\n'}
        =--------------------------------------------------------------------={'\n'}
      </>
    ),
    contact: (
      <>
        {'\n'}
        {'                '}
        <span className="accent-col-1 font-weg-600"># Get In Touch</span>
        {'\n'}
        {'\n'}
        {'          '}I am currently open for work, {'\n'}
        And my inbox is always open, whatever your question is, {'\n'}I will definitely respond as soon as possible for
        you.{'\n'}
        {'\n'}
        {'\n'}
        {'           '}How about we start with...{'\n'}
        {'\n'}
        {'                 '}
        <span className="accent-col-1">Say Hello :D</span>
        {'\n'}
        {'\n'}
        {'        '}
        <span className="accent-col-1 font-weg-700">{'=>'}</span>{' '}
        <a href="mailto:rifaldiarifinn@gmail.com" target="_blank" className="hyperlink" rel="noreferrer">
          rifaldiarifinn@gmail.com
        </a>{' '}
        <span className="accent-col-1 font-weg-700">{'<='}</span>
        {'\n'}
        {'\n'}
      </>
    )
  }

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
              command:
                command.length > 1
                  ? `${[...command].splice(1).join(' ')}`
                  : `nothing to show.\nplease type something, ex: "echo Hello World!"`,
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
                <>
                  Here some commands, hope can help you.{'\n'}
                  {'\n'}
                  {'> echo'} Displays anything your types.{'\n'}
                  {'> clear'} Clear the terminal.{'\n'}
                  {'> help'} Show the commands that can use.{'\n'}
                  {'> show'} Show portfolio Rifaldi Arifin.{'\n'}
                  {'\n'}
                </>
              ),
              commandType: 'OUTPUT',
              execute: null,
              username,
              directory
            })
          }
        },
        {
          command: 'show',
          func: () => {
            const decision = () => {
              switch (command[1]) {
                case 'all':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 2990)
                  }, 20)
                  return (
                    <>
                      {portfolioText.hero}
                      ___________________________________________{'\n'}
                      {'\n'}
                      {portfolioText.about}
                      {portfolioText.myskills}
                      {portfolioText.projects}
                      {portfolioText.contact}
                    </>
                  )
                case 'about':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 340)
                  }, 20)
                  return portfolioText.about
                case 'myskills':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 220)
                  }, 20)
                  return portfolioText.myskills
                case 'projects':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 2010)
                  }, 20)
                  return portfolioText.projects
                case 'contact':
                  setTimeout(() => {
                    cihuyTermRef.current.scrollTo(0, cihuyTermRef.current.children[0].clientHeight - 310)
                  }, 20)
                  return portfolioText.contact

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
