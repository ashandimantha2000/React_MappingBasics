import Jobs from './components/Jobs'
import jobData from './components/jobData'

function App() {
  //Defining a variable to store the JSX we want to render
  const friendsData =jobData.map(data => <Jobs name={data.name} degree={data.degree} job={data.job} />)
  return (
    <div>
      <h3>My Friends</h3>
      {/* Render the stored jsx */}
      {friendsData}
    </div>
  )
}

export default App