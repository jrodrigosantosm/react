import styles from './loguin.module.css'

function Loguin ({label}){ 

    return(
        <div className={styles.divisao}>
            <label className={styles.item}>{label}</label>
            <input className={styles.item}></input>
        </div>
    )
}

export default Loguin