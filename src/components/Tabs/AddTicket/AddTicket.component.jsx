import React from 'react'

//import icon
import {IoMdAdd} from 'react-icons/io'

//import styles
import styles from './AddTicket.module.scss'

export default function ({handleClick}) {
    return (
        <div className={styles.tabContainer}>
            <button
                className={styles.add}
                onClick={handleClick}
            >
                Add <span>Ticket</span>
            </button>
            <button
                className={styles.close}
                onClick={handleClick}
            >
                <IoMdAdd
                    color='#fff'
                    size='1rem'
                />
            </button>
        </div>
    )
}
