import React from 'react'

//import styles
import styles from './IssueDetails.module.scss'

export default function ({ticket}) {
    return (
        <div className={styles.container}>
            <h3>Login Issue</h3>
            <table className={styles.issue}>
                <tbody>
                    <tr>
                        <th>Ticket Duration</th>
                        <td>{ticket.duration}</td>
                    </tr>
                    <tr>
                        <th>Email Thread Status</th>
                        <td>{ticket.emailThreadStatus}</td>
                    </tr>
                    <tr>
                        <th>Priority</th>
                        <td>{ticket.priority}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{ticket.status}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{ticket.type}</td>
                    </tr>
                    <tr>
                        <th>Watchers</th>
                        <td>{ticket.watchers[0]}</td>
                    </tr>
                    <tr>
                        <th>Tags</th>
                        <td>{ticket.tags[0]}</td>
                    </tr>
                    <tr>
                        <th>Related Account</th>
                        <td>{ticket.duration}</td>
                    </tr>
                    <tr>
                        <th>Related Contact</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Assigned To</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
