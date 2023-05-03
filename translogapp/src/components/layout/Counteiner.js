import styles from  './Counteiner.module.css'



function Counteiner(props){

    return <div className={`${styles.counteiner}${styles[props.customClass]}`}>
        {props.children}
        
    </div>
}

export default Counteiner;