import { useState } from "react";

const BigCard = ({id, company, jobTitle, link, applied, interview, offer, setBigCard, onClick}) =>{

 const [editApplied, setEditApplied] =useState(applied)
 const [editInterview,setEditInterview] = useState(interview)
 const [editOffer, setEditOffer] = useState(offer)

 const [appliedChecked, setAppliedChecked] = useState(applied)
 const [interviewChecked, setInterviewChecked] = useState(interview)
 const [offerChecked, setOfferChecked] = useState(interview)

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
      setAppliedChecked(!appliedChecked)
      setEditApplied(!appliedChecked)
      
    }

    const updateInterview = (e) =>{
      setInterviewChecked(!interviewChecked)
      setEditInterview(!interviewChecked)
      
    }

    const updateOffer = (e) =>{
      setOfferChecked(!offerChecked)
      setEditOffer(!offerChecked)
      
    }

 
return <div className="big-card">
<h2>{company}</h2>
<p>{jobTitle}</p>
<a href={link}>Link to Post</a>
<div className='progress'>
    
    <p>Applied </p>
    {(editApplied === true)? <p>✔️</p> :<p>❌</p>}
            <label class="switch">
            <input type="checkbox" checked={(appliedChecked===true)? 'checked': ''} onChange={(e)=> updateApplied(e)} />
            <span class="slider round"></span>
            </label>
    
    
    <p>|</p>

    <p >Interview </p>
    {(editInterview === true)?<p >✔️</p> :<p>❌</p>}
            <label class="switch">
            <input type="checkbox" checked={(interviewChecked===true)? 'checked': ''} onChange={(e)=> updateInterview(e)} />
            <span class="slider round"></span>
            </label>
    
    <p>|</p>

    <p>Offer</p>
    {(editOffer === true)? <p>✔️</p>:<p>❌</p>}
            <label class="switch">
            <input type="checkbox" checked={(offerChecked===true)? 'checked': ''} onChange={(e)=> updateOffer(e)} />
            <span class="slider round"></span>
            </label>
   
    </div>

<div className="big-card-btns">
<button className="btn" onClick={(e)=> handleSubmit(e)}> Save Changes</button>
<button className="btn" onClick={()=>setBigCard(false)}> Close</button>
</div>
</div>
}

export default BigCard