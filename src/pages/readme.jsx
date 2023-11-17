import { Colors, Space, Variable } from '../components/fragments/Codes'

const Readme = () => {
  // codes
  return (
    <>
      <div className="codes">
        <div className="write-code" data-numberline="1">
          <Colors val={'#'} />
          <Space />
          <Variable val={'new-rifaldiarifin-portfolio'} />
        </div>
      </div>
      <div className="codes">
        <div className="write-code" data-numberline="2"></div>
      </div>
      <div className="codes">
        <div className="write-code" data-numberline="3">
          <Colors val={`I'm a Front-end Web Developer based in Padang, West Sumatera, Indonesia.`} />
        </div>
      </div>
    </>
  )
}

export default Readme
