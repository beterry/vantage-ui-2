import React from 'react'

//import compnents
import CollapseTable from '../CollapseTable/CollapseTable.component'
import Spacing from '../Spacing/Spacing.component'

//import styles
import styles from './ContactInfo.module.scss'

export default function ({ticket}) {
    return (
        <div className={styles.contactInfo}>
            <CollapseTable
                title='Contact'
                isOpen={true}
            >
                <table className={styles.contact}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{ticket.name}</td>
                        </tr>
                        <tr>
                            <th>Department</th>
                            <td>{ticket.department}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{ticket.email}</td>
                        </tr>
                        <tr>
                            <th>Reports To</th>
                            <td>{ticket.reportsTo}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{ticket.phone}</td>
                        </tr>
                        <tr>
                            <th>Notify Owner</th>
                            <td>{ticket.notifyOwner}</td>
                        </tr>
                        <tr>
                            <th>Account</th>
                            <td>{ticket.account}</td>
                        </tr>
                        <tr>
                            <th>Modified</th>
                            <td>{ticket.modified}</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>{ticket.title}</td>
                        </tr>
                        <tr>
                            <th>Created</th>
                            <td>{ticket.created}</td>
                        </tr>
                    </tbody>
                </table>
            </CollapseTable>
            <Spacing height='1.875rem' />
            <CollapseTable
                title='Address Information'
                isOpen={false}
            >
                <table className={styles.contact}>
                    <tbody>
                        <tr>
                            <th>Street</th>
                            <td>{ticket.address.street}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{ticket.address.city}</td>
                        </tr>
                        <tr>
                            <th>Postal</th>
                            <td>{ticket.address.postal}</td>
                        </tr>
                        <tr>
                            <th>PO Box</th>
                            <td>{ticket.address.poBox}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>{ticket.address.state}</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>{ticket.address.country}</td>
                        </tr>
                    </tbody>
                </table>
            </CollapseTable>
            <Spacing height='1.875rem' />
            <CollapseTable
                title='Trouble Ticket History'
                isOpen={false}
            >
                <table className={styles.history}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date & Time</th>
                        </tr>
                        {ticket.history.map((trouble, index) => 
                            <tr key={`trouble ${index}`}>
                                <td>{`Trouble Ticket ${trouble.ticketNumber}`}</td>
                                <td>{trouble.status}</td>
                                <td>{trouble.date}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </CollapseTable>
        </div>
    )
}
