import React, { Component } from 'react'

//import icons
import {MdAdd, MdRemove} from 'react-icons/md'

//import styles
import styles from './CollapseTable.module.scss'

export default class CollapseTable extends Component {
    constructor(props){
        super(props)
        this.state = {isOpen: this.props.isOpen}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((state, props) => ({isOpen: !state.isOpen}))
    }

    render() {
        return (
            <div>
                <div className={styles.header}>
                    <h3>{this.props.title}</h3>
                    <button
                        onClick={this.handleClick}
                    >
                        {this.state.isOpen ? <MdRemove /> : <MdAdd />}
                    </button>
                </div>
                {this.state.isOpen ? this.props.children : null}
            </div>
        )
    }
}
