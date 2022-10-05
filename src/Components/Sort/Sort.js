import Styles from '../Filter/Filter.module.css'

const Sort = ({displayData, setDisplayData}) =>{

    const handleSort = (e) =>{
        let sortValue = e.target.value
        //let sortedData = displayData

        if (sortValue === 'date'){
            displayData.map((job)=> job.sorted = true)
            displayData= displayData.sort(function(a,b){
            return new Date(b.dateAdded) - new Date(a.dateAdded);
          })
          }

        setDisplayData(displayData) 
        console.log(displayData)
      }
    

    return <select className={Styles.filter} id='filter' onChange={(e)=> handleSort(e)}>
      <option>Sort</option>
        <option value='date'>Date Added</option>
        <option value='salary'>Salary</option>
      </select>

}

export default Sort