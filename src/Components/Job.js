import {useState} from 'react'
const Job = ({jobTitle, company, link, id}) => {
    
const [bigCard , setBigCard] = useState(false)
const [newLink, setNewLink] = useState({link})

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
    <div className='job-btns'>
    <button onClick={()=> setBigCard(true)}> Edit</button>
    <button onClick={()=> handleDelete({id})}> Delete</button>
    </div>
    </div>
    {(bigCard === true) ?<div className='big-card'>
        <h2>{company}</h2>
        <p>{jobTitle}</p>
        <input type='text' value={newLink} onChange={(e) => setNewLink(e.target.value)}/>
        <button onClick={()=>setBigCard(false)}> Close</button>
    </div>: null}
    </>

}

export default Job