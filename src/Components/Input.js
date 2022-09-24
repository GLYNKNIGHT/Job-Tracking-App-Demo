import { useState } from "react"

const Input = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [link, setLink] = useState('')
    const [applied, setApplied] = useState(false)
    const [interview, setInterview] = useState(false)
    const [offer, setOffer] = useState(false) 
    const [dateApplied, setDateApplied] =useState('')
    const [notes, setNotes] = useState ('')


const handleSubmit = (e) =>{
      const job = {jobTitle, company, link, applied, interview, offer, dateApplied, notes};
 console.log(job)
   fetch('http://localhost:8000/jobs', {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(job)
   }).then(()=> console.log(job))
    
   
     }


    return<div >
    <form  onSubmit={handleSubmit}>
    <div className="add-job">
    <h3>New Job</h3>
        <div>
        <label>Job Title</label>
            <input
                className="input" 
                type='text' 
                placeholder=' Job Title' 
                value={jobTitle}
                onChange={(e)=> setJobTitle(e.target.value)}/>
                </div>
                <div>
        <label>Company</label> 
            <input 
                className="input" 
                type='text' 
                placeholder='Company' 
                value={company}
                onChange={(e)=> setCompany(e.target.value)} /> 
                </div>
                <div>
        <label>Link</label>
            <input 
                className="input"
                type='text' 
                placeholder=' Link' 
                value={link}
                onChange={(e)=> setLink(e.target.value)}  /> 
        
        </div>
        <div className="checkboxes">
                <div>
                <label>Applied     </label>
                <label class="switch">
                <input type="checkbox"  onChange={(e)=> setApplied(!applied)} />
                <span class="slider round"></span>
                </label>
                </div>

                <div>
                <label>Interview     </label>
                <label class="switch">
                <input type="checkbox"  onChange={(e)=> setInterview(!interview)} />
                <span class="slider round"></span>
                </label>
                </div>

                <div>
                <label>Offer     </label>
                <label class="switch">
                <input type="checkbox"  onChange={(e)=> setOffer(!offer)} />
                <span class="slider round"></span>
                </label>
                </div>

            
        </div>
            <div>
            <label>Date Applied</label>
            <input 
                className="input"
                type='text' 
                placeholder=' DD/MM/YY' 
                value={dateApplied}
                onChange={(e)=> setDateApplied(e.target.value)}  /> 
        
            </div>
       

            <div>
            <label>Notes</label>
            <input 
                className="input-text-area"
                type='text-area' 
                placeholder=' Notes' 
                value={notes}
                onChange={(e)=> setNotes(e.target.value)}  /> 
            </div>

        <div className="btn-div">
                <button className="btn">Add Job</button>
                </div>
     </div>
        </form>
    </div>
}

export default Input