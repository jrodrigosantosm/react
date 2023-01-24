import styles from './loguin.module.css'
import PropTypes from 'prop-types'

function Loguin ({label}){ 

    return(
        <>
            <label className={styles.item}>{label}</label>
            <input className={styles.item}></input>
        </>
    )
}

Loguin.propTypes = {
    label: PropTypes.string,
}

export default Loguin