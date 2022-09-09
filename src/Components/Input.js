import { useState } from "react"

const Input = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [link, setLink] = useState('')




const handleSubmit = (e) =>{
   e.preventDefault();
   const job = {jobTitle, company, link};
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
                <div className="btn-div">
                </div>
        <button className="btn">Add Job</button>
        </div>
        </form>
    </div>
}

export default Input