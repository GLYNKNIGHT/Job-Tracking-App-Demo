import Job from './Job.js'
import { useState } from 'react'

const List = ({jobs}) => {

   const [bigCard , setBigCard] = useState(false)

return<div className='jobs-list'>
   {jobs.map((job) => (<Job key={job.id} 
                              id={job.id} 
                              jobTitle={job.jobTitle} 
                              company={job.company} 
                              link={job.link} 
                              applied={job.applied} 
                              interview={job.interview}
                              offer={job.offer}
                              bigCard={bigCard}
                              setBigCard={setBigCard}
                              dateApplied={job.dateApplied}
                              notes={job.notes}
                              />))}
</div>

}

export default List
