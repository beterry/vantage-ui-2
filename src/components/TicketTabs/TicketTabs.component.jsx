import React from 'react'

//import components
import Tab from '../Tabs/Ticket/Ticket.component'
import Add from '../Tabs/AddTicket/AddTicket.component'

//import styles
import styles from './TicketTabs.module.scss'

export default class TicketTabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tickets: [1, 2, 3],
            activeTicket: 1
        }
        this.closeTicket = this.closeTicket.bind(this)
        this.changeActive = this.changeActive.bind(this)
        this.addTicket = this.addTicket.bind(this)
    }

    // deletes the element in the array with the matching number
    // moves active ticket if needed
    closeTicket(ticketNumber, e) {
        let newTickets = this.state.tickets
        let arrayLength = newTickets.length
        // prevents last ticket from being deleted
        if (arrayLength === 1) {
            return
        }
        let index = newTickets.indexOf(ticketNumber)
        // handles logic if active ticket is being removed
        if (ticketNumber === this.state.activeTicket) {
            // if element being removed is the last ticket in array
            if (arrayLength === index + 1){
                let newActiveTicket = newTickets[index - 1]
                this.setState((state, props) => ({activeTicket: newActiveTicket}))
            } else {
                let newActiveTicket = newTickets[index + 1]
                this.setState((state, props) => ({activeTicket: newActiveTicket}))
            }
        }
        newTickets.splice(index, 1)
        this.setState({tickets: newTickets})
    }

    // looks at the last value in the ticket array and
    // creates a new ticket + 1
    addTicket() {
        let newTickets = this.state.tickets
        let arrayLength = newTickets.length
        let lastValue = newTickets[arrayLength - 1]
        newTickets.push(lastValue + 1)
        this.setState({tickets: newTickets})
    }

    changeActive(ticketNumber, e) {
        this.setState({activeTicket: ticketNumber})
    }

    render() {
        return (
            <div>
                <nav className={styles.tabContainer}>
                    {this.state.tickets.map(ticketNumber => 
                        <Tab
                            ticketNumber={ticketNumber}
                            active={this.state.activeTicket === (ticketNumber)}
                            handleClick={(e) => this.changeActive(ticketNumber, e)}
                            handleClose={(e) => this.closeTicket(ticketNumber, e)}
                            key={`ticket tab ${ticketNumber}`}
                        />
                    )}
                    <Add 
                        handleClick={this.addTicket}
                    />
                </nav>
            </div>
        )
    }
}

