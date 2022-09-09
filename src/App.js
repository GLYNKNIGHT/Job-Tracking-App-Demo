import {useState, useEffect} from 'react';
import Input from './Components/Input.js';
import List from './Components/List'
import './App.css';

function App() {
const [jobs, setJobs] = useState(null)


  useEffect(()=> {
    fetch('http://localhost:8000/jobs')
    .then(res =>{
      return res.json();
    })
    .then((data)=> {console.log(data); setJobs(data)});

  }, [])

  return (
    <div className="App">
    <h1>Jobs Progress</h1>
    <div className='main'>
   <Input />
   {jobs && <List jobs={jobs}/>}

   </div>
    </div>
  );
}

export default App;
