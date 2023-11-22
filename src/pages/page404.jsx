import Button from '../components/Elements/Button'
import Icons8 from '../components/elements/Icons8'

const Page404 = ({ onOpenShortcut }) => {
  return (
    <>
      <div className="page404">
        <Icons8 icon="cancel" gradient />
        <p>The editor could not be opened because the file was not found.</p>
        <Button color="default" style={'fill'} height={'40px'} moreClass={'rounded10'} onClick={onOpenShortcut} ariaLabel={'Back to Main'}>
          Open Main
        </Button>
      </div>
    </>
  )
}

export default Page404
