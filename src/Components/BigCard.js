
const BigCard = ({company, jobTitle, link, applied, onClick}) =>{
return <div className="big-card">
<h2>{company}</h2>
<p>{jobTitle}</p>
<a href={link}>Link to Post</a>
<input type="checkbox" />
<button onClick={onClick}> Close</button>
</div>
}

export default BigCard