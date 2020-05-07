import React from 'react'

//import styles
import styles from './Input.module.scss'

export default function ({children}) {
    return (
        <button className={styles.input}>
            {children}
        </button>
    )
}
