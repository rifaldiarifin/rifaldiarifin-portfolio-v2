import { LazyLoadImage } from 'react-lazy-load-image-component'
import Button from '../elements/Button'
import { predictClass } from '../../utils/predictClass'

const ShowcaseGroup = ({ children }) => {
  return <div className="showcase-preview-group">{children}</div>
}

const Li = ({
  title = 'Your Project',
  description = 'Your Project Description',
  technologyUsed = ['HTML', 'CSS', 'JS'],
  src = null,
  alt,
  github,
  externalLink,
  isReverse = false
}) => {
  return (
    <div className={`card-showcase${predictClass(() => isReverse, 'reverse')}`}>
      <div className="main-card">
        <div className="detailed">
          <p className="featured">Featured Project</p>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <ul className="technology-used">
            {technologyUsed.map((name, index) => (
              <li key={`${name}${index}`}>{name}</li>
            ))}
          </ul>
          <div className="box dsp-flex align-itms-center gap-14">
            {github && (
              <Button
                type="link"
                allowNewTab
                to={github}
                style={'regular'}
                color="default"
                icon={'github'}
                iconSize={'22px'}
                moreClass={'icon rounded10'}
                brightness={'var(--icon4)'}
                height={'36px'}
              />
            )}
            {externalLink && (
              <Button
                type="link"
                allowNewTab
                to={externalLink}
                style={'regular'}
                color="default"
                icon={'external-link'}
                iconSize={'22px'}
                moreClass={'icon rounded10'}
                brightness={'var(--icon4)'}
                height={'36px'}
              />
            )}
          </div>
        </div>
        <div className="preview">
          <LazyLoadImage src={src} effect="opacity" alt={alt} />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <span className="bg-card"></span>
    </div>
  )
}

ShowcaseGroup.Li = Li
export default ShowcaseGroup
