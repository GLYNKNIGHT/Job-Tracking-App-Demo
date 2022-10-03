import {useState, useEffect} from 'react';
import Header from './Components/Header/Header.js';
import Input from './Components/Input/Input.js';
import List from './Components/List/List'
import './App.css';
import JobCarousel from './Components/JobCarousel/JobCarousel.js';
import Filter from './Components/Filter/Filter.js';
import Sort from './Components/Sort/Sort'
import Stats from './Components/Stats/Stats'

function App() {
const [jobs, setJobs] = useState(null)
const [displayData, setDisplayData] = useState(null)

  useEffect(()=> {
    fetch('http://localhost:8000/jobs')
    .then(res =>{
      return res.json();
    })
    .then((data)=> {console.log(data); setJobs(data); setDisplayData(data)});
  }, [])


 
  return (
    <div className="App">
    
    <Header />
    <div className='filter_stats'>
    <div className='filter-contaier'>
    <Filter jobs={jobs} displayData={displayData} setDisplayData={setDisplayData} />
    <Sort jobs={jobs} displayData={displayData} setDisplayData={setDisplayData}/>
    </div>
    <div>
    {jobs && <Stats jobs={jobs} />}
    </div>
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
