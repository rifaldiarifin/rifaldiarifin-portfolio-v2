import { Codes, Colors, Control, String, Variable } from '../components/fragments/Codes'

const Readme = () => {
  // codes
  return (
    <>
      <Codes>
        <Colors val={'#'} /> <Variable val={'Hi There 👋'} />
      </Codes>
      <Codes line={'2'} />
      <Codes line={'3'}>
        <Colors val={'My name is Rifaldi Arifin'} />
      </Codes>
      <Codes line={'4'} />
      <Codes line={'5'}>
        <Colors val={`I'm a Front-end Web Developer based in Padang, West Sumatera, Indonesia.`} />
      </Codes>
      <Codes line={'6'} />
      <Codes line={'7'}>
        <Colors val={`Let's make your dream come true. 🚀`} />
      </Codes>
      <Codes line={'8'} />
      <Codes line={'9'} />
      <Codes line={'10'}>
        <Colors val={'###'} /> <Variable val={'About Me 📝'} />
      </Codes>
      <Codes line={'11'} />
      <Codes line={'12'}>
        <Colors
          val={
            'I am very interested in the world of programming, starting with a simple website. and now creating user-friendly responsive websites, modern websites, single-page applications (SPA), animations, and more.'
          }
        />
      </Codes>
      <Codes line={'13'} />
      <Codes line={'14'}>
        <Colors
          val={
            'I started learning programming starting in 2021, I learned programming on my own with the intention and determination to be able to learn many things.'
          }
        />
      </Codes>
      <Codes line={'15'} />
      <Codes line={'16'} />
      <Codes line={'17'}>
        <Colors val={'###'} /> <Variable val={'My skills in developing, for now... ⚙'} />
      </Codes>
      <Codes line={'18'} />
      <Codes line={'19'}>
        <Colors val={'- Javascript (ES6+)'} />      <Colors val={'- Typescript'} />{'\n'}
        <Colors val={'- React'} />                  <Colors val={'- Node.js'} />{'\n'}
        <Colors val={'- Express'} />                <Colors val={'- MongoDB'} />{'\n'}
        <Colors val={'- Redux'} />                  <Colors val={'- Jest'} />{'\n'}
      </Codes>
      <Codes line={'20'} />
      <Codes line={'21'} />
      <Codes line={'22'}>
        <Colors val={'###'} /> <Variable val={'Wanna see more?'} />
      </Codes>
      <Codes line={'23'} />
      <Codes line={'24'}><Variable val={'['} /><Control val={'rifaldiarifin.github.com'} /><Variable val={']'} /><Variable val={'('} /><String val={'"https://rifaldiarifin.github.com"'} /><Variable val={')'} />
      </Codes>
      <Codes line={'25'} />
      <Codes line={'26'} />
      <Codes line={'27'}>
        <Colors val={'###'} /> <Variable val={'Credits'} />
      </Codes>
      <Codes line={'28'} />
      <Codes line={'29'}>
        <Colors val={`The concept of this portfolio depicts the screen contents of a developer's work, what it looks like on their screen at work.`}/>
      </Codes>
      <Codes line={'30'} />
      <Codes line={'31'}>
        <Colors val={'The portfolio UI is inspired by'} /> <Variable val={'['} />
        <Control val={'Visual Studio Code'} />
        <Variable val={']'} />
        <Variable val={'('} />
        <String
          val={
            <a
              href="https://code.visualstudio.com"
              alt="visualstudiocode"
              aria-label="visualstudiocode"
              target="_blank"
              rel="noreferrer"
            >
              &quot;https://code.visualstudio.com&quot;
            </a>
          }
        />
        <Variable val={')'} /> <Colors val={'app'} />
      </Codes>
      <Codes line={'32'} />
      <Codes line={'33'}>
        <Colors val={'Icon by'} /> <Variable val={'['} />
        <Control val={'Icons8'} />
        <Variable val={']'} />
        <Variable val={'('} />
        <String
          val={
            <a href="https://icons8.com" alt="Icons8" aria-label="Icons8" target="_blank" rel="noreferrer">
              &quot;https://icons8.com&quot;
            </a>
          }
        />
        <Variable val={')'} />
      </Codes>
      <Codes line={'34'} />
      <Codes line={'35'}>
        <Colors val={'My favorite theme extensions, also applied in my portfolio'} /> <Variable val={'['} />
        <Control val={'2077 theme'} />
        <Variable val={']'} />
        <Variable val={'('} />
        <String
          val={
            <a
              href="https://marketplace.visualstudio.com/items?itemName=Endormi.2077-theme"
              alt="2077 theme"
              aria-label="2077 theme"
              target="_blank"
              rel="noreferrer"
            >
              &quot;https://marketplace.visualstudio.com/items?itemName=Endormi.2077-theme&quot;
            </a>
          }
        />
        <Variable val={')'} />
      </Codes>
      <Codes line={'36'} />
      <Codes line={'37'}>
        <Colors val={'**Enjoy! :D**'} />
      </Codes>
      <Codes line={'38'} />
    </>
  )
}

export default Readme
