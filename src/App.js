import {useState, useEffect} from 'react';
import Header from './Components/Header/Header.js';
import Input from './Components/Input/Input.js';
import List from './Components/List/List'
import './App.css';
import JobCarousel from './Components/JobCarousel/JobCarousel.js';
import Filter from './Components/Filter/Filter.js';

function App() {
const [jobs, setJobs] = useState(null)
const [filter, setFilter] = useState('')
const [displayData, setDisplayData] = useState(null)

  useEffect(()=> {
    fetch('http://localhost:8000/jobs')
    .then(res =>{
      return res.json();
    })
    .then((data)=> {console.log(data); setJobs(data); setDisplayData(data)});
  }, [])


  const handleFilter = (e) =>{
    let filter = e.target.value
    let jobsData = jobs

    if (filter === 'All'){
      console.log(filter)
      setDisplayData(jobs)}

    if (filter === 'applied'){
      jobsData = jobs.filter((job)=> job.applied === true)}

    if (filter === 'date'){
      alert('Not working yet')}

    if (filter === 'notProgressed'){
        jobsData = jobs.filter((job)=> job.notProgressed === false)}

    if (filter === 'interview'){
        jobsData = jobs.filter((job)=> job.interview === true)}

    setDisplayData(jobsData)
    console.log(displayData)
  }

  return (
    <div className="App">
    
    <Header /><div className='filter-contaier'>
    <Filter filter={filter} setFilter={setFilter} handleFilter={handleFilter} />
    </div>
    <div className='main'>
      {jobs && <List displayData={displayData} setDisplayData={setDisplayData}/>}
      {jobs && <JobCarousel displayData={displayData} setDisplayData={setDisplayData}/>}
      <Input />
   </div>
  
    </div>
  );
}

export default App;
