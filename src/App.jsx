import Jobs from './components/Jobs'
import jobData from './components/jobData'

function App() {
  const userData = jobData.map((data=>{
    return <Jobs fname={data.name} fdegree={data.degree} fjob={data.job}/>
  }))
  return (
    <div>
      {userData}
    </div>
  )
}

export default App