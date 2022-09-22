import {useState} from 'react'
import BigCard from './BigCard'

const Job = ({jobTitle, company, link, id, applied, interview, offer}) => {
    
const [bigCard , setBigCard] = useState(false)
//const [newLink, setNewLink] = useState({link})

const handleDelete = ({id}) =>{
    fetch(`http://localhost:8000/jobs/${id}`, {
    method: 'DELETE',
   }).then(()=> console.log(`Item ${id} Deleted`))
}


const handleEdit = ({id}) => {


}

    return <><div className="job" >
    <h3>{company}</h3>
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
       <div className='job-btns'>
    <button onClick={()=> setBigCard(true)}>Edit</button>
    <button onClick={()=> handleDelete({id})}> Delete</button>
    </div>
    </div>
    {(bigCard === true)? <BigCard id={id}
            company={company}
            jobTitle={jobTitle}
            link={link}
            applied={applied}
            interview={interview}
            offer={offer}
            onClick={()=>setBigCard(false)}
            />
            
    : null}
    </>

}

export default Job