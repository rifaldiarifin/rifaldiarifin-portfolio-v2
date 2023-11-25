import { forwardRef, useRef, useState } from 'react'
import {
  BracketXml,
  Control,
  String,
  Variable,
  VariableName,
  KeywordOperator,
  Bracket,
  ControlName,
  Codes,
  Bl
} from '../components/fragments/Codes'
import Button from '../components/elements/Button'
import useScrollTo from '../hooks/useLandingScrollTo'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { predictClass } from '../utils/predictClass'
import ShowcaseGroup from '../components/fragments/ShowcaseGroup'
import ShowcaseListGroup from '../components/fragments/ShowcaseListGroup'
import useGetProjects from '../hooks/useGetProjects'

// eslint-disable-next-line react/display-name
const Welcome = forwardRef(({ currentlyOpen }, editorBody) => {
  const { bestProjects, otherProjects } = useGetProjects()
  const [moreSkills, setMoreSkills] = useState(false)
  const [moreShowcase, setMoreShowcase] = useState(false)
  const toggleMoreSkills = () => setMoreSkills(!moreSkills)
  const toggleMoreShowcase = () => setMoreShowcase(!moreShowcase)
  const heroSection = useRef(null)
  const about = useRef(null)
  const myskills = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const componentRenderData = [
    {
      name: 'heroSection',
      renderTime: 480,
      ref: heroSection
    },
    {
      name: 'about',
      renderTime: 500,
      ref: about
    },
    {
      name: 'myskills',
      renderTime: 520,
      ref: myskills
    },
    {
      name: 'projects',
      renderTime: 530,
      ref: projects
    },
    {
      name: 'contact',
      renderTime: 550,
      ref: contact
    }
  ]
  const { renderStatus } = useScrollTo({ refs: componentRenderData, currentlyOpen, editorBody })
  return (
    <>
      <Codes>
        <Control val={'import'} /> <ControlName val={'Welcome'} /> <Control val={'from'} /> <String val={"'rifaldiarifin/Welcome'"} />
      </Codes>
      <Codes line="2" />
      <Codes line="3" disabled>
        <Variable val={'const'} /> <VariableName val={'App'} /> <KeywordOperator val={'='} /> <Bracket val={'()'} vart="1" /> <Variable val={'=>'} /> <Bracket val={'{'} vart="1" />
      </Codes>
      <Codes line="4" disabled>
        <Bl x='2' />
        <Control val={'return'} /> <Bracket val={'('} vart="2" />
      </Codes>
      {/* body */}
      <Codes line={'5'} disabled>
        <Bl x='4' />
        <BracketXml val={'<'} /><Variable val={'Welcome'} /><BracketXml val={'>'} />
      </Codes>
      {/* HERO SECTION ####################### */}
      <Codes
        line={'6'}
        renderStatus={renderStatus.heroSection}
        renderTime={componentRenderData[0].renderTime}
        ref={heroSection}
        frame={
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
                  width={'200px'}
                  ariaLabel={'Mail to rifaldiarifinn'}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        }
      >
        <Bl x='6' />
        <BracketXml val={'<'} /><Variable val={'Welcome.HeroSection'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'7'} disabled>
        <Bl x='6' />
        <BracketXml val={'</'} /><Variable val={'Welcome.HeroSection'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'8'} />
      {/* ABOUT ####################### */}
      <Codes
        line={'9'}
        renderStatus={renderStatus.about}
        renderTime={componentRenderData[1].renderTime}
        ref={about}
        frame={
          <div id="about" className="render dual-content">
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
                  <LazyLoadImage src="/img/me-removebg.webp" alt="Rifaldi Arifin" effect="opacity" />
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
        }
      >
        <Bl x='6' />
        <BracketXml val={'<'} /><Variable val={'Welcome.About'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'10'} disabled>
        <Bl x='6' />
        <BracketXml val={'</'} /><Variable val={'Welcome.About'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'11'} />
      {/* MY SKILLS ####################### */}
      <Codes
        line={'12'}
        renderStatus={renderStatus.myskills}
        renderTime={componentRenderData[2].renderTime}
        ref={myskills}
        frame={
          <div id="myskills" className="render">
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
        }
      >
        <Bl x='6' />
        <BracketXml val={'<'} /><Variable val={'Welcome.MySkills'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'13'} disabled>
        <Bl x='6' />
        <BracketXml val={'</'} /><Variable val={'Welcome.MySkills'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'14'} />
      {/* PROJECTS ####################### */}
      <Codes
        line={'15'}
        renderStatus={renderStatus.projects}
        renderTime={componentRenderData[3].renderTime}
        ref={projects}
        frame={
          <div id="projects" className="render">
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
        }
      >
        <Bl x='6' />
        <BracketXml val={'<'} /><Variable val={'Welcome.Projects'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'16'} disabled>
        <Bl x='6' />
        <BracketXml val={'</'} /><Variable val={'Welcome.Projects'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'17'} />
      {/* CONTACT ####################### */}
      <Codes
        line={'18'}
        renderStatus={renderStatus.contact}
        renderTime={componentRenderData[4].renderTime}
        ref={contact}
        frame={
          <div id="contact" className="render">
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
                ariaLabel={'Mail to Rifaldi Arifin'}
              >
                {'Say Hello :D'}
              </Button>
            </div>
          </div>
        }
      >
        <Bl x='6' />
        <BracketXml val={'<'} /><Variable val={'Welcome.Contact'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'19'} disabled>
        <Bl x='6' />
        <BracketXml val={'</'} /><Variable val={'Welcome.Contact'} /><BracketXml val={'>'} />
      </Codes>
      <Codes line={'20'} disabled>
        <Bl x='4' />
        <BracketXml val={'</'} /><Variable val={'Welcome'} /><BracketXml val={'>'} />
      </Codes>
      {/* ---- */}
      <Codes line={'21'} disabled>
        <Bl x='2' />
        <Bracket val={')'} vart="2" />
      </Codes>
      <Codes line={'22'} disabled>
        <Bracket val={'}'} vart="1" />
      </Codes>
      <Codes line={'23'} disabled />
      <Codes line={'24'}>
        <Control val={'export'} /> <Control val={'default'} /> <ControlName val={'App'} />
      </Codes>
    </>
  )
})

export default Welcome
