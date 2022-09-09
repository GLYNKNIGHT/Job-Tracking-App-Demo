
const Job = ({jobTitle, company, link}) => {
    return <div className="job">
    <h3>{jobTitle}</h3>
    <p>{company}</p>
    <a href={link}>Link to Post</a>
    </div>
}

export default Job