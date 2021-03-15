import { Component } from 'react'
import UserContext from '../../Context'
import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'


class Footer extends Component {

  static contextType = UserContext

  render() {
    const {
      loggedIn,
      user
    } = this.context
    const links = getNavigation(loggedIn, user);

  
    return (
        <footer className={styles.footer}> 
        <div>
            
        {
        links.map(navElement => {
          return (
            <Link 
            key={navElement.title}
            href={navElement.link} 
            title={navElement.title} 
            type="footer" 
            />
          )
        })
      }
        </div>
        </footer>
    )
}
}

export default Footer
