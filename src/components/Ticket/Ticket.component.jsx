import React, { Component } from 'react'

//import components
import Tab from '../Tabs/Section/Section.component'
import Actions from '../TicketActions/TicketActions.component'
import ContactInfo from '../ContactInfo/ContactInfo.component'
import Message from '../Message/Message.component'
import FAQ from '../FAQ/FAQ.component'
import Spacing from '../Spacing/Spacing.component'
import Calendar from '../Calendar/Calendar.component'
import Tags from '../Tags/Tags.component'
import IssueDetails from '../IssueDetail/IssueDetails.component'

//import styles
import styles from './Ticket.module.scss'

export default class Ticket extends Component {
    constructor(props) {
        super(props)
        this.state = {activeTab: 0}
        this.setTab = this.setTab.bind(this)
    }
    setTab(tab) {
        this.setState({activeTab: tab})
    }
    render() {
        const components = [
            <Message ticket={this.props.ticket} />,
            <ContactInfo ticket={this.props.ticket} />,
            <FAQ />
        ]
        return (
            <main className={styles.ticket}>
                <nav className={styles.tabContainer}>
                    <Tab
                        title='Message'
                        active={this.state.activeTab === 0}
                        handleClick={(e) => this.setTab(0, e)}
                    />
                    <Tab
                        title='Contact Info'
                        active={this.state.activeTab === 1}
                        handleClick={(e) => this.setTab(1, e)}
                    />
                    <Tab
                        title='FAQ'
                        active={this.state.activeTab === 2}
                        handleClick={(e) => this.setTab(2, e)}
                    />
                </nav>
                <div className={styles.layout}>
                    <section className={styles.left}> 
                        <div className={styles.padding}>
                            {components[this.state.activeTab]}
                        </div>
                    </section>
                    <Spacing height='1.5rem' />
                    <aside className={styles.right}>
                        <Actions />
                        <Spacing height='.75rem' />
                        <Calendar />
                        <Spacing height='.75rem' />
                        <Tags />
                        <Spacing height='.75rem' />
                        <IssueDetails ticket={this.props.ticket} />
                    </aside>
                </div>
            </main>
        )
    }
}
