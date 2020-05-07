import React from 'react'

//import icon
import {IoMdClose} from 'react-icons/io'

//import styles
import styles from './Ticket.module.scss'

export default function Ticket({ticketNumber, active, handleClick, handleClose}) {
    return (
        <div className={active ? styles.active : styles.inactive}>
            <button
                className={styles.tab}
                onClick={handleClick}
            >
                <span>Ticket</span>
                {ticketNumber}
            </button>
            <button
                className={styles.close}
                onClick={handleClose}
            >
                <IoMdClose
                    color={active ? '#A8A8A8' : '#006255'}
                    size='1rem'
                />
            </button>
        </div>
    )
}
