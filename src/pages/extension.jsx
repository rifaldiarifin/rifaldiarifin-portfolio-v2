import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import Button from '../components/elements/Button'
import { predictClass } from '../utils/predictClass'
import { useState } from 'react'
import { Paragraph, Star } from '../components/fragments/Markdown'
import capitalize from '../utils/capitalize'
import DropdownList from '../components/fragments/DropdownList'
import Extension404 from './extension404'

const Extension = ({ extensions, toast, toggleListOfColorTheme }) => {
  const params = useParams()
  const [navPages, setNavPages] = useState([true, false, false, false])
  const find = extensions.find((find) => find.publisher === params.publisher && find.name === params.extensionName)
  const toggleNavPages = (index) => {
    setNavPages((prevState) => {
      const newState = [...prevState]
      for (let x = 0; x < newState.length; x++) {
        newState[x] = false
      }
      newState[index] = true
      return newState
    })
  }
  const checkCategory = (category = '', arr) => {
    return arr.find((find) => find === category)
  }
  const disableExt = () => {
    toast({
      title: `Can't disable this extension, for now`,
      source: 'Extensions',
      type: 'error'
    })
  }
  const uninstallExt = () => {
    toast({
      title: `Can't uninstall this extension, for now`,
      source: 'Extensions',
      type: 'error'
    })
  }
  return (
    <>
      {find ? (
        <div className="extension-page">
          <div className="ext-header">
            <div className="ext-icon">
              <LazyLoadImage src={find.icon} alt={find.displayName} effect="opacity" />
            </div>
            <div className="ext-optionview">
              <div className="name">
                <h1>{find.displayName}</h1>
                <span>v{find.version}</span>
              </div>
              <p className="publisher">{find.publisher}</p>
              <p className="description">{find.description}</p>
              <div className="options">
                {checkCategory('Themes', find.categories) && (
                  <Button
                    style={'fill'}
                    color="default"
                    ariaLabel={'Set Color Theme'}
                    moreClass={'rounded10 btn-searchpopup'}
                    onClick={() => toggleListOfColorTheme(find.displayName)}
                  >
                    Set Color Theme
                  </Button>
                )}
                <Button
                  style={'fill'}
                  color="default"
                  moreClass={'rounded10'}
                  onClick={disableExt}
                  ariaLabel={'Disable Extension'}
                >
                  Disable
                </Button>
                <Button
                  style={'fill'}
                  color="default"
                  moreClass={'rounded10'}
                  onClick={uninstallExt}
                  ariaLabel={'Uninstall Extension'}
                >
                  Uninstall
                </Button>
              </div>
              <p>This extension is enabled globally.</p>
            </div>
          </div>
          <div className="ext-body">
            <ul className="nav">
              <li className={predictClass(() => navPages[0])} onClick={() => toggleNavPages(0)}>
                DETAILS
              </li>
              <li className={predictClass(() => navPages[1])} onClick={() => toggleNavPages(1)}>
                FEATURE CONTRIBUTIONS
              </li>
              <li className={predictClass(() => navPages[2])} onClick={() => toggleNavPages(2)}>
                CHANGELOG
              </li>
              <li className={predictClass(() => navPages[3])} onClick={() => toggleNavPages(3)}>
                RUNTIME STATUS
              </li>
            </ul>
            <div className="navpages">
              <div className={`page details${predictClass(() => navPages[0])}`}>
                <div className="details">
                  <div className="readme">{<find.readme />}</div>
                  <div className="info">
                    <div className="label-info">
                      <p>Categories</p>
                      {find.categories.map((key, index) => (
                        <Button
                          key={index}
                          style={'regular'}
                          moreClass={'rounded10'}
                          color="default"
                          ariaLabel={capitalize(key)}
                        >
                          {capitalize(key)}
                        </Button>
                      ))}
                    </div>
                    <div className="label-info">
                      <p>More Info</p>
                      <div className="list-info">
                        <p>Last updated</p>
                        <p>2023-10-09, 06:40:33</p>
                      </div>
                      <div className="list-info">
                        <p>Identifier</p>
                        <p>
                          {find.publisher.toLowerCase()}.{find.name.toLowerCase()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`page contributions${predictClass(() => navPages[1])}`}>
                {find.contributes.length > 0 ? (
                  <>
                    {Object.keys(find.contributes).map((key, index) => (
                      <DropdownList
                        key={`${key}${index}`}
                        name={
                          key === 'themes'
                            ? capitalize(`Color Themes (${find.contributes[key].length})`)
                            : capitalize(`${key} (${find.contributes[key].length}})`)
                        }
                      >
                        {find.contributes[key].map((name) => (
                          <Star key={name.label} val={name.label} />
                        ))}
                      </DropdownList>
                    ))}
                  </>
                ) : (
                  <Paragraph>No contributes.</Paragraph>
                )}
              </div>
              <div className={`page changelog${predictClass(() => navPages[2])}`}>{<find.changelog />}</div>
              <div className={`page status${predictClass(() => navPages[3])}`}>
                <Paragraph>No status available.</Paragraph>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Extension404 />
      )}
    </>
  )
}

export default Extension
