import {useState} from 'react'
import BigCard from './BigCard'

const Job = ({jobTitle, 
                company, 
                salary,
                link, 
                id, 
                applied, 
                interview, 
                offer,
                dateApplied, 
                notes, 
                handleEdit, 
                notProgressed}) => {
    
const [bigCard , setBigCard] = useState(false)


    const handleDelete = ({id}) =>{
        
        fetch(`http://localhost:8000/jobs/${id}`, {
        method: 'DELETE',
       }).then(()=> console.log(`Item ${id} Deleted`), handleEdit())
    
    }
    
   


    return <><div className="job" >
    <div className='job-header'>
            {(notProgressed === false)?<h2 >{company}</h2>: <h2 style={{textDecoration: 'line-through'}}>{company}</h2>}
    </div>
    <div className='job-title'>
            <h3>{jobTitle}</h3><p>{salary}</p>
    </div>
     <div className='icons'>       
        <a className='link' href={link} ><img width='50px' src='./link.png' alt='hyperlink'/></a>
            {(notes.length > 0 /*&& notes[0] != null*/ )?<div className='comments-icon'>
                                        <img width='50px' src='./note.png'  alt='comments'/>
                                        <div className='hidden-notes'>
                                        <h2>{company} - Notes</h2>
                                                <div className='hidden-notes-list'>     
                                                {notes.map((note)=><h4> - {note}</h4>)}
                                                </div>
                                        </div>
                                        <p>{notes.length}</p></div>
                                 : null
                                 }

    </div>
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
            <button onClick={()=> setBigCard(true)}>Update</button>
            <button onClick={()=> handleDelete({id})}> Remove</button>
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
           
                   />
            
    : null}
    </>

}

export default Job