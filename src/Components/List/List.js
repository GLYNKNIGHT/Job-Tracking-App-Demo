import Job from '../Job/Job.js'
import styles from './List.module.css'

const List = ({jobs, setJobs}) => {

const handleEdit = ()=> {
   fetch('http://localhost:8000/jobs')
   .then(res =>{
     return res.json();
   })
   .then((data)=> {console.log(data); setJobs(data)});


}


return<div className={styles.jobs_list}>
   {jobs.map((job) => (<Job key={job.id} 
                              id={job.id} 
                              jobTitle={job.jobTitle} 
                              salary={job.salary}
                              company={job.company} 
                              link={job.link} 
                              applied={job.applied} 
                              interview={job.interview}
                              offer={job.offer}
                              dateApplied={job.dateApplied}
                              notes={job.notes}
                              handleEdit={handleEdit}
                              notProgressed={job.notProgressed}
                              />))}
</div>

}

export default List
