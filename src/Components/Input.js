import { useState } from "react"

const Input = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [link, setLink] = useState('')
    const [applied, setApplied] = useState(false)
    const [newJob, setNewJob] = useState({
            'Job Title': '',
            'Company': '',
            'Link': '',
            'Applied': 'False',
    })



const onChangeTitle = (e) =>{
    setJobTitle(e.target.value);
    console.log(jobTitle)
}

const onChangeCompany = (e) =>{
    setCompany( e.target.value)
    console.log(company)
}

const onLinkChange = (e) =>{
    setLink( e.target.value)
    console.log(link)
}

const onAppliedChange = (e) =>{
    setApplied(e.target.value)
    console.log(applied)
}

const onSubmit = () =>{
    setNewJob (
        {jobTitle, company, link, applied}
    )
   }
    return<>
   
        <input type='text' placeholder=' Job Title' onChange={onChangeTitle}/> 
        <input type='text' placeholder=' Company' onChange={onChangeCompany} /> 
        <input type='text' placeholder=' Link' onChange={onLinkChange}  /> 
        <input type='checkbox' onChange={onAppliedChange}/>
        <button onClick={()=>onSubmit()}>Add Job</button>
    
    </>
}

export default Input