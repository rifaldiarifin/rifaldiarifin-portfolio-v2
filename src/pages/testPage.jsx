import { useRef } from "react"
import { Bracket, BracketXml, Control, ControlName, KeywordOperator, Space, String, Variable, VariableName } from "../components/fragments/Codes"
import useCihuyReactRender from "../hooks/useCihuyReactRender"

const TestPage = () => {
    const homeRef = useRef(null)
    const componentRenderData = [
        {
            name: 'home',
            renderTime: 920,
            ref: homeRef
        }
    ]
    const cihuyReactRender = useCihuyReactRender(componentRenderData)
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
                    <ControlName val={'HelloWorld'} />
                    <Space />
                    <Control val={'from'} />
                    <Space />
                    <String val={"'../components/HelloWorld'"} />
                </div>
            </div>
            <div className='codes'>
                <div className='write-code' data-numberline='3'>

                </div>
            </div>
            <div className="codes">
                <div className="write-code" data-numberline="4">
                    <Variable val={'const'} />
                    <Space />
                    <VariableName val={'App'} />
                    <Space />
                    <KeywordOperator val={'='} />
                    <Space />
                    <Bracket val={'()'} vart="1" />
                    <Space />
                    <Variable val={'=>'} />
                    <Space />
                    <Bracket val={'{'} vart="1" />
                </div>
            </div>

            <div className="codes">
                <div className="write-code" data-numberline="5">
                    <Space x="2" />
                    <Control val={'return'} />
                    <Space />
                    <Bracket val={'('} vart="2" />
                </div>
            </div>
            <div className='codes' ref={homeRef}>
                <div className='write-code' data-numberline='6'>
                    <Space x="4" />
                    <BracketXml val={'<'} />
                    <Variable val={'HelloWorld'} />
                    <BracketXml val={'>'} />
                    {cihuyReactRender.home && <span className="rendercode-notif">Rendered time: {componentRenderData[0].renderTime}ms</span>}
                </div>
                <div className="display-frame wait">
                    {
                        cihuyReactRender.home ?
                            <div className="render testpage">
                                <h1>Hello World</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime nihil incidunt eaque tempora, debitis, id dolore voluptatum dolorem explicabo sit, totam cumque nulla deserunt earum tempore iusto quaerat sed?</p>
                                <button type="button">Click Me</button>
                            </div>
                            :
                            <span className="rendercode-progress">Render Component</span>
                    }
                </div>
            </div>
            <div className='codes'>
                <div className='write-code' data-numberline='7'>
                    <Space x="4" />
                    <BracketXml val={'</'} />
                    <Variable val={'HelloWorld'} />
                    <BracketXml val={'>'} />
                </div>
            </div>
            <div className="codes">
                <div className="write-code" data-numberline="8">
                    <Space x="2" />
                    <Bracket val={')'} vart="2" />
                </div>
            </div>

            <div className="codes">
                <div className="write-code" data-numberline="9">
                    <Bracket val={'}'} vart="1" />
                </div>
            </div>
            <div className="codes">
                <div className="write-code" data-numberline="10"></div>
            </div>
            <div className="codes">
                <div className="write-code" data-numberline="11">
                    <Control val={'export'} />
                    <Space />
                    <Control val={'default'} />
                    <Space />
                    <ControlName val={'App'} />
                </div>
            </div>
        </>
    )
}

export default TestPage