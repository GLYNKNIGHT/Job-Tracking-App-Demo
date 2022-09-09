import Job from './Job.js'

const List = ({jobs}) => {

return<div className='jobs-list'>
   {jobs.map((job) => (<Job jobTitle={job.jobTitle} company={job.company} link={job.link} />))}
</div>

}

export default List
