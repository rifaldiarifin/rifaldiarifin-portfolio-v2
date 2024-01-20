import Button from '../components/elements/Button'
import Codicon from '../components/elements/Codicon'

const Page404 = ({ onOpenShortcut }) => {
  return (
    <>
      <div className="page404">
        <Codicon icon="error" />
        <p>The editor could not be opened because the file was not found.</p>
        <Button
          color="default"
          style={'fill'}
          height={'40px'}
          moreClass={'rounded10'}
          onClick={onOpenShortcut}
          ariaLabel={'Back to Main'}
        >
          Open Main
        </Button>
      </div>
    </>
  )
}

export default Page404
