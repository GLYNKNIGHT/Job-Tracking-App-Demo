import styles from './Header.module.css'
const Header = () =>{

    return<div className={styles.header}>
         <img className={styles.header_image} src='./logo.png' alt='progress' />
     
    </div>
}

export default Header