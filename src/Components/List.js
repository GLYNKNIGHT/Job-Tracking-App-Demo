import Job from './Job.js'

const List = ({jobs}) => {

return<div className='jobs-list'>
   {jobs.map((job) => (<Job key={job.id} 
                              id={job.id} 
                              jobTitle={job.jobTitle} 
                              company={job.company} 
                              link={job.link} 
                              applied={job.applied} 
                              interview={job.interview}
                              offer={job.offer}
                              />))}
</div>

}

export default List
