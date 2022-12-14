import {useState} from 'react'
import BigCard from '../BigCard/BigCard'
import styles from './Job.module.css'

const Job = ({jobTitle, 
                company, 
                salary,
                link, 
                id, 
                applied, 
                interview, 
                offer,
                dateAdded, 
                notes, 
                handleEdit, 
                notProgressed}) => {
    
const [bigCard , setBigCard] = useState(false)




return <>
<div className={styles.job} style={{ backgroundColor: notProgressed === true ? "gray" : "white" }} >
    <div className={styles.job_header }>
            {(notProgressed === false)? <h2 >{company}</h2>:<h2 style={{textDecoration: 'line-through'}}>{company}</h2>}
    </div>
    <div className={styles.job_title}>
            <h3>{jobTitle}</h3><p>{salary}</p>
    </div>
     <div className={styles.icons}>       
        <a className={styles.link} href={link} target='blank'><img  src='./link.png' alt='hyperlink'/></a>
            {(notes.length > 0)?<div className={styles.comments_icon}>
                                        <img src='./note.png'  alt='comments'/>
                                        <div className={styles.hidden_notes}>
                                        <h2>{company} - Notes</h2>
                                                <div className={styles.hidden_notes_list}>  {/*will show on hover of icon*/}   
                                                        {notes.map((note)=><h4 key={note}> - {note}</h4>)}
                                                </div>
                                        </div>
                                        <p>{notes.length}</p></div>
                                 : null
                                 }

    </div>
        <div className='progress'>
        <div className={styles.progress_mobile}>
                <p>Applied </p>
                {(applied === true)? <p>✔️</p> : <p>❌</p>}
                </div>
                <p>|</p>
                <div className={styles.progress_mobile}>
                <p >Interview </p>
                {(interview === true)? <p>✔️</p> : <p>❌</p>}
                </div>
                <p>|</p>
                <div className={styles.progress_mobile}>
                <p>Offer</p>
                {(offer === true)? <p>✔️</p> : <p>❌</p>}
                </div>
        </div>
        <div className={styles.job_btns}>
                <button className={`update${company}`} onClick={()=> setBigCard(true)}>Update</button>
                
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
            dateAdded={dateAdded}
            notes={notes}
            handleEdit={handleEdit}
           
                   />
            
    : null}
    </>

}

export default Job