import { useRef, useState } from 'react'
import {
  BracketXml,
  Control,
  Space,
  String,
  Variable,
  VariableName,
  KeywordOperator,
  Bracket,
  ControlName
} from '../components/fragments/Codes'
import Button from '../components/Elements/Button'
import useScrollTo from '../hooks/useMainScroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { predictClass } from '../utils/predictClass'
import ShowcaseGroup from '../components/fragments/ShowcaseGroup'
import ShowcaseListGroup from '../components/fragments/ShowcaseListGroup'
import useGetProjects from '../hooks/useGetProjects'

const MainFile = () => {
  const { bestProjects, otherProjects } = useGetProjects()
  const about = useRef(null)
  const myskills = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const [moreSkills, setMoreSkills] = useState(false)
  const [moreShowcase, setMoreShowcase] = useState(false)
  const toggleMoreSkills = () => setMoreSkills(!moreSkills)
  const toggleMoreShowcase = () => setMoreShowcase(!moreShowcase)
  useScrollTo({
    about,
    contact,
    myskills,
    projects
  })
  return (
    <>
      <div className="codes">
        <div className="write-code" data-numberline="1">
          <Control val={'import'} />
          <Space />
          <ControlName val={'React'} />
          <Space />
          <Control val={'from'} />
          <Space />
          <String val={"'react'"} />
        </div>
      </div>
      <div className="codes">
        <div className="write-code" data-numberline="2">
          <Control val={'import'} />
          <Space />
          <ControlName val={'ReactDOM'} />
          <Space />
          <Control val={'from'} />
          <Space />
          <String val={"'react-dom/client'"} />
        </div>
      </div>
      <div className="codes">
        <div className="write-code" data-numberline="3">
          <Control val={'import'} />
          <Space />
          <ControlName val={'App'} />
          <Space />
          <Control val={'from'} />
          <Space />
          <String val={"'/pages/App.jsx'"} />
        </div>
      </div>
      <div className="codes">
        <div className="write-code" data-numberline="4"></div>
      </div>
      <div className="codes">
        <div className="write-code disabled" data-numberline="5">
          <Control val={'ReactDOM'} />
          <KeywordOperator val={'.'} />
          <VariableName val={'createRoot'} />
          <Bracket val={'('} />
          <Variable val={'document'} />
          <KeywordOperator val={'.'} />
          <VariableName val={'getElementByID'} />
          <Bracket val={'('} vart={2} />
          <String val={`'root'`} />
          <Bracket val={')'} vart={2} />
          <Bracket val={')'} />
          <KeywordOperator val={'.'} />
          <VariableName val={'render'} />
          <Bracket val={'('} />
        </div>
      </div>

      {/* body */}

      <div className="codes">
        <div className="write-code disabled" data-numberline="6">
          <Space x="2" />
          <BracketXml val={'<'} />
          <Variable val={'React'} />
          <KeywordOperator val={'.'} />
          <Variable val={'StrictMode'} />
          <BracketXml val={'>'} />
        </div>
      </div>

      <div className="codes app">
        <div className="write-code disabled" data-numberline="7">
          <Space x="4" />
          <BracketXml val={'<'} />
          <Variable val={'App'} />
          <BracketXml val={'/>'} />
        </div>
        <div className="display-frame">
          <div id="herosection" className="render">
            <div className="box">
              <h1>
                Hi, I&apos;m{' '}
                <div>
                  <span>R</span>ifaldi Arifin
                </div>
              </h1>
              <h2>
                Lets make <span>your dream</span> come <span>true</span>
              </h2>
              <div className="box dsp-flex gap-10 mrgn-t-30 fl-wrap">
                <Button
                  type="link"
                  to="mailto:rifaldiarifin@gmail.com"
                  color="default"
                  style={'regular'}
                  moreClass={'rounded10'}
                >
                  Contact
                </Button>
                {/* <Button color="default" style={'regular'} moreClass={'rounded10'}>Download CV</Button> */}
              </div>
            </div>
          </div>
          <div id="about" className="render dual-content" ref={about}>
            <div className="box content1">
              <h2>About Me</h2>
              <p>
                Hi there, My name is Rifaldi Arifin, I&apos;m a Web Developer with over 2 years of experience.
                <br></br>
                <br></br>I am very interested in the world of programming, starting with a simple website. and now
                creating user-friendly responsive websites, modern websites, single-page applications (SPA), animations,
                and more.
                <br></br>
                <br></br>I started learning programming starting in 2021, I learned programming on my own with the
                intention and determination to be able to learn many things.
              </p>
            </div>
            <div className="box dsp-flex align-itms-center justify-center content2">
              <div className="card-group-photo">
                <div className="main-card">
                  <LazyLoadImage src="/img/me-removebg.png" alt="Rifaldi Arifin" effect="opacity" />
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="bg-card"></div>
                <div className="bg-card"></div>
              </div>
            </div>
          </div>
          <div id="myskills" className="render" ref={myskills}>
            <div className="listboard">
              <h2>My skills in developing</h2>
              <div className="box">
                <div className="preview-skills">
                  <h3>Recently that I used</h3>
                  <ul>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div className="preview-skills">
                  <h3>Favorites</h3>
                  <ul>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </div>
              </div>
              <div className="list-skills">
                <ul>
                  <li style={{ '--item-index': '0' }}>{'Javascript (ES6+)'}</li>
                  <li style={{ '--item-index': '1' }}>Typescript</li>
                  <li style={{ '--item-index': '2' }}>React</li>
                  <li style={{ '--item-index': '3' }}>Node.js</li>
                  <li style={{ '--item-index': '4' }}>Express</li>
                  <li style={{ '--item-index': '5' }}>MongoDB</li>
                  <li style={{ '--item-index': '6' }}>Redux</li>
                  <li style={{ '--item-index': '7' }}>Jest</li>
                </ul>
                <ul className={predictClass(() => moreSkills)}>
                  <li style={{ '--item-index': '0' }}>PHP</li>
                  <li style={{ '--item-index': '1' }}>jQuery</li>
                  <li style={{ '--item-index': '2' }}>MySQL</li>
                </ul>
                <span className="separator"></span>
                <button className={`btn-more${predictClass(() => moreSkills)}`} onClick={toggleMoreSkills}>
                  <span></span>
                  {moreSkills ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
          <div id="projects" className="render" ref={projects}>
            <h2>Projects i&apos;ve worked on </h2>
            <div className="box dsp-flex fl-colm gap-50">
              {typeof bestProjects !== 'string' && bestProjects?.length > 0 ? (
                <ShowcaseGroup>
                  {bestProjects.map((project, index) => (
                    <ShowcaseGroup.Li
                      key={`${project.title}${index}`}
                      title={project.title}
                      description={project.description}
                      technologyUsed={project.technologyUsed}
                      src={project.src}
                      alt={project.alt}
                      github={project.github}
                      externalLink={project.externalLink}
                      isReverse={index % 2 === 0 ? false : true}
                    />
                  ))}
                </ShowcaseGroup>
              ) : typeof bestProjects !== 'string' && bestProjects?.length === 0 ? (
                "You don't have a best projects yet."
              ) : bestProjects === 'ERROR' ? (
                'Oopss... Something when wrong!'
              ) : (
                'Loading...'
              )}
              {typeof otherProjects !== 'string' && otherProjects?.length > 0 ? (
                <ShowcaseListGroup title={'Other Projects'}>
                  {otherProjects.map((project, index) => {
                    if (!moreShowcase && index > 2) return
                    return (
                      <ShowcaseListGroup.Li
                        key={`${project.title}${index}`}
                        title={project.title}
                        description={project.description}
                        technologyUsed={project.technologyUsed}
                        src={project.src}
                        alt={project.alt}
                        github={project.github}
                        externalLink={project.externalLink}
                        index={index}
                      />
                    )
                  })}
                </ShowcaseListGroup>
              ) : typeof otherProjects !== 'string' && otherProjects?.length === 0 ? (
                "You don't have a best projects yet."
              ) : otherProjects === 'ERROR' ? (
                'Oopss... Something when wrong!'
              ) : (
                'Loading...'
              )}
              <button className={`btn-more${predictClass(() => moreShowcase)}`} onClick={toggleMoreShowcase}>
                <span></span>
                {moreShowcase ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
          <div id="contact" className="render" ref={contact}>
            <div className="box">
              <h2>Get In Touch</h2>
              <p>
                I am currently open for work, and my inbox is always open, whatever your question is, I will definitely
                respond as soon as possible for you.
              </p>
              <p className="mrgn-t-20">How about we start with...</p>
              <Button
                type="link"
                to="mailto:rifaldiarifinn@gmail.com"
                style={'regular'}
                color="default"
                moreClass={'rounded10'}
              >
                {'Say Hello :D'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="codes">
        <div className="write-code disabled" data-numberline="8">
          <Space x="2" />
          <BracketXml val={'</'} />
          <Variable val={'React'} />
          <KeywordOperator val={'.'} />
          <Variable val={'StrictMode'} />
          <BracketXml val={'>'} />
        </div>
      </div>

      {/* ---- */}

      <div className="codes">
        <div className="write-code disabled" data-numberline="9">
          <Bracket val={')'} />
        </div>
      </div>
    </>
  )
}

export default MainFile
