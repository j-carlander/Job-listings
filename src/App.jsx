import './App.css'
import { Attribution } from './Components/Attribution/Attribution'
import data from '../data.json'
import { Card } from './Components/Card/Card'
function App() {

  return (
    <>
    {data.map(job => <Card key={job.id} {...job} />)}
      <Attribution />
    </>
  )
}

export default App
