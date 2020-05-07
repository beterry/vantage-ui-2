import React from 'react'

//import styles
import styles from './Section.module.scss'

export default function ({title, active, handleClick}) {
    return (
        <button
            className={active ? styles.active : styles.inactive}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}
