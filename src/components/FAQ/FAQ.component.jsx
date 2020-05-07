import React from 'react'

//import styles
import styles from './FAQ.module.scss'

//import icons
import {MdChevronRight, MdSearch} from 'react-icons/md'

//data
const data = [
    {
        title: 'What is delyte?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'What are tags?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'What is an account?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'How do I assign a contact?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'How do I set ticket priority?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'Question Title Displayed Here?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

export default () => (
    <div className={styles.faq}>
        <div className={styles.search}>
            <input 
                placeholder='Search FAQs'
            />
            <div>
                <MdSearch color='#D2D5D4'/>
            </div>
        </div>
            {data.map((question) => 
                <article
                    className={styles.question}
                    key={question.title}
                >
                    <div className={styles.left}>
                        <h4>{question.title}</h4>
                        <p>{question.answer}</p>
                    </div>
                    <div className={styles.icon}>
                        <MdChevronRight color='#18988C'/>
                    </div>
                </article>
            )}
    </div>
)