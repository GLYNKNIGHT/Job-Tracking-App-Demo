import { useState } from "react"

const Input = () => {
    const [jobtitle, setJobTitle] = useState('')
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
    setNewJob({'Job Tilte': e.target.value});
    
}

const onChangeCompany = (e) =>{
    setNewJob( {'Company': e.target.value})
    console.log(newJob)
}

const onLinkChange = (e) =>{
    setNewJob( {'Link': e.target.value})
    console.log(newJob)
}

const onAppliedChange = (e) =>{
    setNewJob( {'Applied': e.target.value})
    console.log(newJob)
}

const onSubmit = () =>{
    console.log(newJob)
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