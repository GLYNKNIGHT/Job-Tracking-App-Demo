import {useState} from 'react'
const Job = ({jobTitle, company, link}) => {
const [bigCard , setBigCard] = useState(false)

    return <><div className="job" onClick={()=> setBigCard(true)}>
    <h3>{jobTitle}</h3>
    <p>{company}</p>
    <a href={link}>Link to Post</a>
    </div>
    {(bigCard === true) ?<div className='bigCard'>
        <h3>{jobTitle}</h3>
        <p>{company}</p>
        <a href={link}>Link to Post</a>
        <button onClick={()=>setBigCard(false)}> Close</button>
    </div>: null}
    </>

}

export default Job