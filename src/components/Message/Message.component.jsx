import React from 'react'

//import icon
import {IoMdAttach} from 'react-icons/io'
import {MdReply, MdForward} from 'react-icons/md'

//import components
import Button from '../Buttons/General/General.component'

//import styles
import styles from './Message.module.scss'

export default function ({ticket}) {
    return (
        <section>
            <div className={styles.header}>
                <h2>{ticket.message}</h2>
                <IoMdAttach />
            </div>
            <div className={styles.container}>
                <div className={styles.message}>
                    <p>Hello Support</p>
                    <p>I am unable to login to my account. I tried resetting my password but I still cannot login. Can you please help?</p>
                    <p>Thank you, <br />Customer</p>
                </div>
                <div className={styles.buttons}>
                    <Button><MdReply color='#fff' size='1.25rem'/></Button>
                    <Button><MdForward color='#fff' size='1.25rem'/></Button>
                    <Button>Comment</Button>
                </div>
            </div>
        </section>
    )
}
