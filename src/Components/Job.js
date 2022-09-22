import {useState} from 'react'
import BigCard from './BigCard'

const Job = ({jobTitle, company, link, id, applied}) => {
    
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
    {(applied === true)? <p style={{color: "green"}}>Applied</p>:<p style={{color: "red"}}>Not Applied</p>}
       <div className='job-btns'>
    <button onClick={()=> setBigCard(true)}>Edit</button>
    <button onClick={()=> handleDelete({id})}> Delete</button>
    </div>
    </div>
    {(bigCard === true)? <BigCard company={company}
            jobTitle={jobTitle}
            link={link}
            applied={applied}
            onClick={()=>setBigCard(false)}
            />
            
    : null}
    </>

}

export default Job