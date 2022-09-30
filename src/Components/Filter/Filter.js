import Styles from './Filter.module.css'

const Filter = ({jobs, displayData, setDisplayData}) =>{

    const handleFilter = (e) =>{
        let filter = e.target.value
        let jobsData = jobs
    
        if (filter === 'All'){
         
          setDisplayData(jobs)}
    
        if (filter === 'applied'){
          jobsData = jobs.filter((job)=> job.applied === true)
        }
    
        if (filter === 'not applied'){
            jobsData = jobs.filter((job)=> job.applied === false)
          }  
    
        if (filter === 'notProgressed'){
            jobsData = jobs.filter((job)=> job.notProgressed === false)
          }
    
        if (filter === 'interview'){
            jobsData = jobs.filter((job)=> job.interview === true)
          }
    
        setDisplayData(jobsData)
        //console.log(displayData)
      }

    return <select className={Styles.filter} id='filter' onChange={(e)=> handleFilter(e)}>
        <option>Filter</option>
        <option value='All'>All Jobs</option>
        <option value='applied'>Applied</option>
        <option value='not applied'>Not Applied</option>
        <option value='notProgressed'>In Progress</option>
        <option value='interview'>Interview</option>
    </select>
}

export default Filter