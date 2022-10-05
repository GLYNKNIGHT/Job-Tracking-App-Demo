import Styles from './Stats.module.css'
import {useState} from 'react'

const Stats = ({jobs}) => {
  
  

const inProgressJobs = jobs.filter((job)=> job.notProgressed === false);
const appliedJobs = jobs.filter((job)=> job.applied === true);
const interviewJobs = jobs.filter((job)=> job.interview === true);
const offerJobs = jobs.filter((job)=> job.offer === true);



return <div className={Styles.stats}>
<p>Total:<strong> {jobs.length}</strong></p>
<p>|</p>
<p>In Progress: <strong> {inProgressJobs.length} </strong></p>
<p>|</p>
<p>Applied:<strong> {appliedJobs.length}</strong>  </p>
<p>|</p>
<p>Interview:<strong> {interviewJobs.length}</strong> </p>
<p>|</p>
<p>Offer: <strong> {offerJobs.length}</strong></p>

    </div>
}

export default Stats