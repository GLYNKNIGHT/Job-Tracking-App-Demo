import { useState } from "react";

const BigCard = ({id, company, jobTitle, link, applied, interview, offer, onClick}) =>{

 const [editApplied, setEditApplied] =useState(applied)
 const [editInterview,setEditInterview] = useState(interview)
 const [editOffer, setEditOffer] = useState(offer)

    const handleSubmit = (e) =>{
        const job = { editApplied, editInterview, editOffer};
   console.log(job)
   /*
     fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(job)
     }).then(()=> console.log(job))
      
     */
       }
  




return <div className="big-card">
<h2>{company}</h2>
<p>{jobTitle}</p>
<a href={link}>Link to Post</a>
<div className='progress'>
    <p>Applied </p>
    {(applied === true)? <p>✔️</p> :<p>❌</p>}
    <p>|</p>
    <p >Interview </p>
    {(interview === true)?<p >✔️</p> :<p>❌</p>}
    <p>|</p>
    <p>Offer</p>
    {(offer === true)? <p>✔️</p>:<p>❌</p>}
    </div>
<div className="checkboxes">
            <div>
            <label>Applied     </label>
            <input type="checkbox" checked={(applied===true)? 'checked': ''} onChange={(e)=> setEditApplied(!applied)} />
            </div>
            <div>
            <label>Interview     </label>
            <input type="checkbox" onChange={(e)=> setEditInterview(!interview)} />
            </div>
            <div>
            <label>Offer     </label>
            <input type="checkbox" onChange={(e)=> setEditOffer(!offer)} />
            </div>
        </div>
<div className="big-card-btns">
<button className="btn" onClick={(e)=> handleSubmit(e)}> Save Changes</button>
<button className="btn" onClick={onClick}> Close</button>
</div>
</div>
}

export default BigCard