import React from 'react'

//import icon
import {FaRegCalendarCheck} from 'react-icons/fa'

//import component
import Button from '../Buttons/Input/Input.component'   

//import styles
import styles from './Calendar.module.scss'

export default function () {
    return (
        <form className={styles.calendar}>
            <div className={styles.icon} />
            <input
                className={styles.inputText}
                size='3'
                type='text'
                defaultValue='Follow Up'
            />
            <input 
                className={styles.inputDate}
                type='date'
                defaultValue="2018-07-22"
            />
            <Button>
                <FaRegCalendarCheck
                    size='1rem'
                    color="#fff"
                />
            </Button>
        </form>
    )
}
