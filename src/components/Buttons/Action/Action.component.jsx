import React from 'react'

//import styles
import styles from './Action.module.scss'

export default function ({action, icon}) {
    return (
        <button className={styles.action}>
            <div className={styles.icon}>{icon}</div>
            {action}
        </button>
    )
}
