import { useState } from "react"
import styles from './Input.module.css'

const Input = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [salary, setSalary] =useState('')
    const [link, setLink] = useState('')
    const [applied, setApplied] = useState(false)
    const [interview, setInterview] = useState(false)
    const [offer, setOffer] = useState(false) 
    const [dateApplied, setDateApplied] =useState('')
    const [note, setNote] = useState()
   

const handleSubmit = (e) =>{
    const job = {jobTitle, company, salary, link, applied, interview, offer, dateApplied, notes:[note], notProgressed: false};
    
    fetch('http://localhost:8000/jobs', {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(job)
   }).then(()=> console.log(job))
    
}


return<div >
    <form  onSubmit={handleSubmit}>
        <div className={styles.add_job}>
        <h3 >Add New Job</h3>
        <div>
            <label>Company</label> 
                <input 
                    className="input" 
                    id='company'
                    type='text' 
                    placeholder='Company' 
                    value={company}
                    onChange={(e)=> setCompany(e.target.value)} /> 
                </div>
        <div>
            <label>Job Title</label>
                <input
                    className="input" 
                    id='title'
                    type='text' 
                    placeholder=' Job Title' 
                    value={jobTitle}
                    onChange={(e)=> setJobTitle(e.target.value)}/>
            </div>
        <div>
            <label>Salary</label>
                <select className="input" id='salary' onChange={(e)=> setSalary(e.target.value)}>
                    <option value='N/A'>N/A</option>
                    <option value='Under £25000'> Under £25000</option>
                    <option value='£25000-£30000'>£25000-£30000</option>
                    <option value='£30000-£35000'>£30000-£35000</option>
                    <option value='£35000-£40000'>£35000-£40000</option>
                    <option value='£40000 +'>£40000 +</option>
                </select>
             </div>
        <div>
            <label>Link</label>
                <input 
                    className="input"
                    id='link'
                    type='text' 
                    placeholder=' Link' 
                    value={link}
                    onChange={(e)=> setLink(e.target.value)}  /> 
            </div>
        <div className="checkboxes">
            <div>
                <label>Applied  </label>
                    <label className="switch">
                    <input type="checkbox" id='applied'  onChange={(e)=> setApplied(!applied)} />
                    <span className="slider round"></span>
                    </label>
                </div>
            <div>
                <label>Interview    </label>
                    <label className="switch">
                    <input type="checkbox"  onChange={(e)=> setInterview(!interview)} />
                    <span className="slider round"></span>
                    </label>
                </div>
            <div>
                <label>Offer    </label>
                    <label className="switch">
                    <input type="checkbox"  onChange={(e)=> setOffer(!offer)} />
                    <span className="slider round"></span>
                    </label>
                </div>      
        </div>
        <div>
                <label>Date Added</label>
                    <input 
                        className="input"
                        id='date'
                        type='text' 
                        placeholder=' DD/MM/YY' 
                        value={dateApplied}
                        onChange={(e)=> setDateApplied(e.target.value)}  /> 
                </div>
        <div>
                <label>Notes</label>
                    <input 
                        className={styles.input_text_area}
                        id='notes'
                        type='text-area' 
                        placeholder=' Notes' 
                        value={note}
                        onChange={(e)=> setNote(e.target.value)}  /> 
                </div>
        <div className={styles.btn_div}>
                <button className="btn">Add Job</button>
            </div>
     </div>
    </form>
</div>
}

export default Input