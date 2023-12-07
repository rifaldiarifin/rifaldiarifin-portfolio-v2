import { Ac1, Ac2, Hlnk } from "../components/fragments/TerminalOutput"

const cihuyCommands = {
  echo: (command) => {
    return (
      <>
        {command.length > 1
          ? `${[...command].splice(1).join(' ')}`
          : `nothing to show.\nplease type something, ex: "echo Hello World!"`}
      </>
    )
  },
  help: () => {
    return (
      <>
        Here some commands, hope can help you.{'\n'}
        {'\n'}
        {'> echo'}      Displays anything your types.{'\n'}
        {'> clear'}     Clear the terminal.{'\n'}
        {'> help'}      Show the commands that can use.{'\n'}
        {'> show'}      Show portfolio Rifaldi Arifin.{'\n'}
        {'\n'}
      </>
    )
  },
  landingPage: {
    hero: () => {
      return (
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
          </a>
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
        </>
      )
    },
    about: () => {
      return (
        <>
          {'\n'}
          <Ac1 vl="# About Me" />
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
      )
    },
    myskills: () => {
      return (
        <>
          {'\n'}
          <Ac1 vl="# My skills in developing" />
          {'\n'}
          {'\n'}
          <Ac2 vl={">"} /> Javascript (ES6+)   <Ac2 vl={">"} /> TypeScript  |  ## Recently that I used {'\n'}
          <Ac2 vl={">"} /> React               <Ac2 vl={">"} /> Node.js     |  <Ac2 vl={">"} /> React  <Ac2 vl={">"} /> Node.js {'\n'}
          <Ac2 vl={">"} /> Express             <Ac2 vl={">"} /> MongoDB     |  {'\n'}
          <Ac2 vl={">"} /> Redux               <Ac2 vl={">"} /> Jest        |  ## Favorites {'\n'}
          {'                                    '}|  <Ac2 vl={">"} /> MongoDB  <Ac2 vl={">"} /> Express  <Ac2 vl={">"} /> React  <Ac2 vl={">"} /> Node.js{'\n'}
          {'\n'}
        </>
      )
    },
    projects: () => {
      return (
        <>
          {'\n'}
          <Ac1 vl="# Projects i&apos;ve worked on" />
          {'\n'}
          {'\n'}
          ----------------------------------------------------------------------{'\n'}
          | <Ac1 vl="Featured Project" />                                                   |{'\n'}
          | ## Cafe CBN Remake                                                 |{'\n'}
          |                                                                    |{'\n'}
          | Remake project of an old Cafe CBN project.                         |{'\n'}
          | a Self-Service Kiosk Ordering (Single-Page Application),           |{'\n'}
          | provide devices for customer satisfaction in ordering              |{'\n'}
          | according to what they want, with easy-to-navigate interface,      |{'\n'}
          | just touch, pay and get your order.                                |{'\n'}
          |                                                                    |{'\n'}
          | <Ac2 vl={'>'} /> React  <Ac2 vl={'>'} /> Node.js  <Ac2 vl={'>'} /> Firebase  <Ac2 vl={'>'} /> Chart.js                         |{'\n'}
          | <Ac2 vl={'>'} /> Netlify                                                          |{'\n'}
          |                                                                    |{'\n'}
          | <Ac2 vl={"=>"} /> <Hlnk to={'https://github.com/rifaldiarifin/cafe-cbn-remake'} />                |{'\n'}
          | <Ac2 vl={"=>"} /> <Hlnk to={'https://cafecbn.netlify.app'} />                                     |{'\n'}
          ----------------------------------------------------------------------{'\n'}
          {'\n'}
          ----------------------------------------------------------------------{'\n'}
          |                                                   <Ac1 vl="Featured Project" /> |{'\n'}
          |                                                    ## Cafe CBN API |{'\n'}
          |                                                                    |{'\n'}
          |                                 API data for Cafe CBN application. |{'\n'}
          |                                                                    |{'\n'}
          |                                                                    |{'\n'}
          |                      <Ac2 vl={">"} /> Typescript  <Ac2 vl={">"} /> MongoDB  <Ac2 vl={">"} /> Express  <Ac2 vl={">"} /> Node.js |{'\n'}
          |                                                   <Ac2 vl={">"} /> Jest  <Ac2 vl={">"} /> Vercel |{'\n'}
          |                                                                    |{'\n'}
          |                   <Hlnk to={'https://github.com/rifaldiarifin/cafe-cbn-api'} /> <Ac2 vl={"<="} /> |{'\n'}
          ----------------------------------------------------------------------{'\n'}
          {'\n'}
          ----------------------------------------------------------------------{'\n'}
          | <Ac1 vl="Featured Project" />                                                   |{'\n'}
          | ## laporMasyarakat                                                 |{'\n'}
          |                                                                    |{'\n'}
          | Reports and handles all community complaints,                      |{'\n'}
          | to realize good communication between communities.                 |{'\n'}
          | (Single-Page Application)                                          |{'\n'}
          |                                                                    |{'\n'}
          | <Ac2 vl={'>'} /> EJS  <Ac2 vl={'>'} /> Node.js  <Ac2 vl={'>'} /> Express  <Ac2 vl={'>'} /> MySQL                               |{'\n'}
          |                                                                    |{'\n'}
          | <Ac2 vl={'=>'} /> <Hlnk to={'https://github.com/rifaldiarifin/lapor-masyarakat'} />               |{'\n'}
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
          <Ac2 vl={">"} /> HTML  <Ac2 vl={">"} /> CSS  <Ac2 vl={">"} /> Javascript  <Ac2 vl={">"} /> PHP  <Ac2 vl={">"} /> MySQL{'\n'}
          {'\n'}
          <Ac2 vl={"=>"} /> <Hlnk to={'https://github.com/rifaldiarifin/cafe-cbn'} />
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
          <Ac2 vl={">"} /> HTML  <Ac2 vl={">"} /> CSS  <Ac2 vl={">"} /> Javascript{'\n'}
          {'\n'}
          <Ac2 vl={"=>"} /> <Hlnk to={'https://github.com/rifaldiarifin/in-css'} />
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
          <Ac2 vl={">"} /> HTML  <Ac2 vl={">"} /> CSS  <Ac2 vl={">"} /> Javascript{'\n'}
          {'\n'}
          <Ac2 vl={"=>"} /> <Hlnk to={'https://github.com/rifaldiarifin/in-css'} />
          {'\n'}
          {'\n'}
          =--------------------------------------------------------------------={'\n'}
          {'\n'}
          ## Icons8 CSS Generator{'\n'}
          {'\n'}
          A mini script code to generate CSS code from icons8 icons, {'\n'}
          currently only supports &quot;.ico&quot; and &quot;.png&quot; formats, this script {'\n'}
          generates CSS Classes, also easy to configure size, color, {'\n'}
          And so on, mostly I use this for other projects too.{'\n'}
          {'\n'}
          <Ac2 vl={">"} /> Node.js{'\n'}
          {'\n'}
          <Ac2 vl={"=>"} /> <Hlnk to={'https://github.com/rifaldiarifin/icons8-css-generator'} />
          {'\n'}
          {'\n'}
          =--------------------------------------------------------------------={'\n'}
        </>
      )
    },
    contact: () => {
      return (
        <>
          {'\n'}
          {'\n'}
          {'  '}{'                 '}<Ac1 vl="# Get In Touch"/>
          {'  '}{'\n'}
          {'  '}{'\n'}
          {'  '}{'           '}I am currently open for work, {'\n'}
          {'  '}And my inbox is always open, whatever your question is, {'\n'}
          {'   '}I will definitely respond as soon as possible for you.{'\n'}
          {'  '}{'\n'}
          {'  '}{'\n'}
          {'  '}{'            '}How about we start with...{'\n'}
          {'  '}{'\n'}
          {'  '}{'                 '}
          {'  '}<span className="accent-col-1">Say Hello :D</span>
          {'  '}{'\n'}
          {'  '}{'\n'}
          {'  '}{'         '}<Ac2 vl={"=>"}/> <a href="mailto:rifaldiarifinn@gmail.com" target="_blank" className="hyperlink" rel="noreferrer">rifaldiarifinn@gmail.com</a> <Ac2 vl={"<="}/>
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
        </>
      )
    }
  }
}

export default cihuyCommands