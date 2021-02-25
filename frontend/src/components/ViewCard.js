import { useHistory } from 'react-router-dom'

const ViewCard = ({ token }) => {
  const history = useHistory()

  return (
    <div>
      Hello World
      <div>
        <button className={() => history.pushState('/explore')}>
          Back
        </button>
      </div>
    </div>
  )
}

export default ViewCard
