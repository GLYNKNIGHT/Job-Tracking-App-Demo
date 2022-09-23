import { useState } from "react";

const BigCard = ({id, company, jobTitle, link, applied, interview, offer, onClick}) =>{

 const [editApplied, setEditApplied] =useState(applied)
 const [editInterview,setEditInterview] = useState(interview)
 const [editOffer, setEditOffer] = useState(offer)

 const [appliedChecked, setAppliedChecked] = useState(editApplied)
 const [interviewChecked, setInterviewChecked] = useState()
 const [offerChecked, setOfferChecked] = useState()

    const handleSubmit = (e) =>{
        const job = { applied :editApplied,  
                      interview: editInterview, 
                      offer: editOffer};
   console.log(job)
   
     fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(job)
     }).then(()=> console.log(job))
      
     
       }
  
  
    const updateApplied = (e) =>{
      setAppliedChecked(true)
      setEditApplied(!applied)
    }



return <div className="big-card">
<h2>{company}</h2>
<p>{jobTitle}</p>
<a href={link}>Link to Post</a>
<div className='progress'>
    
    <p>Applied </p>
    {(editApplied === true)? <p>✔️</p> :<p>❌</p>}
            <label class="switch">
            <input type="checkbox" checked={appliedChecked} onChange={(e)=> updateApplied(e)} />
            <span class="slider round"></span>
            </label>
    
    
    <p>|</p>

    <p >Interview </p>
    {(editInterview === true)?<p >✔️</p> :<p>❌</p>}
            <label class="switch">
            <input type="checkbox" onChange={(e)=> setEditInterview(!interview)} />
            <span class="slider round"></span>
            </label>
    
    <p>|</p>

    <p>Offer</p>
    {(editOffer === true)? <p>✔️</p>:<p>❌</p>}
            <label class="switch">
            <input type="checkbox" onChange={(e)=> setEditOffer(!offer)} />
            <span class="slider round"></span>
            </label>
   
    </div>

<div className="big-card-btns">
<button className="btn" onClick={(e)=> handleSubmit(e)}> Save Changes</button>
<button className="btn" onClick={onClick}> Close</button>
</div>
</div>
}

export default BigCard