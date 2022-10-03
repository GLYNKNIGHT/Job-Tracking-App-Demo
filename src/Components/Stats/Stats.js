import Styles from './Stats.module.css'
import {useState} from 'react'

const Stats = ({jobs}) => {
  
  

const inProgressJobs = jobs.filter((job)=> job.notProgressed === false);
const appliedJobs = jobs.filter((job)=> job.applied === true);
const interviewJobs = jobs.filter((job)=> job.interview === true);
const offerJobs = jobs.filter((job)=> job.offer === true);



return <div className={Styles.stats}>
<p>Total: {jobs.length}</p>
<p>|</p>
<p>In Progress:  {inProgressJobs.length}</p>
<p>|</p>
<p>Applied:  {appliedJobs.length} </p>
<p>|</p>
<p>Interview:  {interviewJobs.length}</p>
<p>|</p>
<p>Offer:  {offerJobs.length}</p>

    </div>
}

export default Stats