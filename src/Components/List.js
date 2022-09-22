import Job from './Job.js'

const List = ({jobs}) => {

return<div className='jobs-list'>
   {jobs.map((job) => (<Job key={job.id} 
                              id={job.id} 
                              jobTitle={job.jobTitle} 
                              company={job.company} 
                              link={job.link} 
                              applied={job.applied} 
                              interview={job.interview}/>))}
</div>

}

export default List
