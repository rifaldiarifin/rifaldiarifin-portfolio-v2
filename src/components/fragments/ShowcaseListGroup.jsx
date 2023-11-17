import Button from '../Elements/Button'

const ShowcaseListGroup = ({ children, title }) => {
  return (
    <div className="showcase-list-group">
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  )
}

const Li = ({ title, description, index = 0, technologyUsed = [], github = null, externalLink = null }) => {
  return (
    <li style={{ '--item-index': index }}>
      <div className="box dsp-flex align-itms-center gap-14">
        {github && (
          <Button
            type="link"
            allowNewTab
            to={github}
            style={'fill'}
            color="classic"
            icon={'github'}
            iconSize={'26px'}
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
            style={'fill'}
            color="classic"
            icon={'external-link'}
            iconSize={'26px'}
            moreClass={'icon rounded10'}
            brightness={'var(--icon4)'}
            height={'36px'}
          />
        )}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <ul className="technology-used">
        {technologyUsed.map((name, index) => (
          <li key={`${name}${index}`}>{name}</li>
        ))}
      </ul>
    </li>
  )
}

ShowcaseListGroup.Li = Li
export default ShowcaseListGroup
