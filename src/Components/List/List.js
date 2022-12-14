import Job from '../Job/Job.js'
import styles from './List.module.css'

const List = ({displayData, setDisplayData}) => {

const handleEdit = ()=> {
   fetch('http://localhost:8000/jobs')
   .then(res =>{
     return res.json();
   })
   .then((data)=> {console.log(data); setDisplayData(data)});


}


return<div className={styles.jobs_list}>
   {displayData.map((job) => (<Job key={job.id} 
                              id={job.id} 
                              jobTitle={job.jobTitle} 
                              salary={job.salary}
                              company={job.company} 
                              link={job.link} 
                              applied={job.applied} 
                              interview={job.interview}
                              offer={job.offer}
                              dateAdded={job.dateAdded}
                              notes={job.notes}
                              handleEdit={handleEdit}
                              notProgressed={job.notProgressed}
                              />))}
</div>

}

export default List
