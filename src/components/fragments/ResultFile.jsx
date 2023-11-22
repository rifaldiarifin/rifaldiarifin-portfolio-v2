import Button from '../Elements/Button'
import Icons8 from '../elements/Icons8'

const ResultFile = ({ name, onClickFile = () => {}, index, onDismisFile = () => {} }) => {
  const onClick = (event) => {
    if (!event.target.classList.contains('result-file')) return
    // ----
    onClickFile(event)
  }
  const onDismiss = (event) => {
    if (!event.target.classList.contains('btn-dismiss')) return
    // ----
    onDismisFile(event)
  }
  return (
    <div className="result-file" onClick={onClick} style={{ '--item-index': index }}>
      <div className="box pointer-none">
        <Icons8 icon="degrees" size={'6px'} gradient />
        {name}
      </div>
      <div className="box">
        <Button
          icon={'delete'}
          iconStyle="filled"
          iconSize={'14px'}
          height={'22px'}
          moreClass={'icon btn-dismiss'}
          style={'fill'}
          brightness={'var(--icon1)'}
          color="classic"
          onClick={onDismiss}
          ariaLabel={`result ${name}`}
        />
      </div>
    </div>
  )
}

export default ResultFile
