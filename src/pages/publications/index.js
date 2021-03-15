import React, { Component } from 'react'
import PageWrapper from '../../components/page-wrapper'
import styles from './index.module.css'
import Posts from '../../components/posts' 
import Title from '../../components/title'
import UserContext from '../../Context'



class Publications extends Component  {

  static contextType = UserContext

    render() {
      console.log(this.context);
      return (
        <PageWrapper>
              <Title title="Publications" />
           <Posts />
        </PageWrapper>
      )

    }
  
  
}

export default Publications
