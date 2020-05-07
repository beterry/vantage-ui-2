import React from 'react'

//import components
import Button from '../Buttons/Action/Action.component'

//import icons
import {FaRegEdit} from 'react-icons/fa'
import {MdMergeType, MdHelpOutline, MdInfoOutline} from 'react-icons/md'

//import styles
import styles from './TicketActions.module.scss'


export default function () {
    return (
        <div className={styles.actions}>
            <Button
                action='Edit'
                icon={<FaRegEdit size='.875rem'/>}
            />
            <Button
                action='Change Status'
                icon={<MdInfoOutline size='.875rem'/>}
            />
            <Button
                action='Merge'
                icon={<MdMergeType size='.875rem'/>}
            />
            <Button
                action='Add to FAQ'
                icon={<MdHelpOutline size='.875rem'/>}
            />
            <div className={styles.vertical}/>
            <div className={styles.horizontal}/>
        </div>
    )
}
