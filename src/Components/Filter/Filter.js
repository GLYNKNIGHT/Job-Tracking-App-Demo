import Styles from './Filter.module.css'

const Filter = ({handleFilter}) =>{


    return <select className={Styles.filter} id='filter' onChange={(e)=> handleFilter(e)}>
        <option value='All'>All Jobs</option>
        <option value='date'>Date</option>
        <option value='applied'>Applied</option>
        <option value='notProgressed'>In Progress</option>
        <option value='interview'>Interview</option>
    </select>
}

export default Filter