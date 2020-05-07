import React from 'react'

//import styles
import styles from './General.module.scss'

export default function ({children}) {
    return (
        <button className={styles.general}>
            {children}
        </button>
    )
}
