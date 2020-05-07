import React from 'react'

//import icon
import {AiFillTag} from 'react-icons/ai'

//import button
import Button from '../Buttons/Input/Input.component'

//import styles
import styles from './Tags.module.scss'

export default function () {
    return (
        <form className={styles.tags}>
          <AiFillTag
            color='#A8A8A8'
          />
          <input
            type='text'
            placeholder='Add Tags'
          />
          <Button>
              Add
          </Button>
        </form>
    )
}
