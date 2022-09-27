import {useState, useEffect} from 'react';
import Header from './Components/Header/Header.js';
import Input from './Components/Input/Input.js';
import List from './Components/List/List'
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
    
    <Header />
    <div className='main'>
      {jobs && <List jobs={jobs} setJobs={setJobs}/>}
      <Input />
   </div>
    </div>
  );
}

export default App;
