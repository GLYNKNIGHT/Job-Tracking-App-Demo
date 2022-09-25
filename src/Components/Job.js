import {useState} from 'react'
import BigCard from './BigCard'

const Job = ({jobTitle, 
                company, 
                link, 
                id, 
                applied, 
                interview, 
                offer,
                dateApplied, 
                notes, 
            handleEdit}) => {
    
const [bigCard , setBigCard] = useState(false)


    const handleDelete = ({id}) =>{
        
        fetch(`http://localhost:8000/jobs/${id}`, {
        method: 'DELETE',
       }).then(()=> console.log(`Item ${id} Deleted`), handleEdit())
    
    }
    
   


    return <><div className="job" >
    <div className='job-header'>
    <h3>{company}</h3> 
    <a className='link' href={link}><img width='30px' src='./hyperlink.png' alt='hyperlink'/></a>
    </div>
    <p>{jobTitle}</p>
        <div className='progress'>
    <p>Applied </p>
    {(applied === true)? <p>✔️</p> : <p>❌</p>}
    <p>|</p>
    <p >Interview </p>
    {(interview === true)? <p>✔️</p> : <p>❌</p>}
    <p>|</p>
    <p>Offer</p>
    {(offer === true)? <p>✔️</p> : <p>❌</p>}
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
            setBigCard={setBigCard}
            dateApplied={dateApplied}
            notes={notes}
            handleEdit={handleEdit}
            //onClick={()=>setBigCard(false)}
            />
            
    : null}
    </>

}

export default Job