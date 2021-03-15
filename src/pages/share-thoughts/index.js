import React from 'react'
import styles from './index.module.css'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Posts from '../../components/posts'

const ShareThoughtsPage = () => {
    return (
        <PageWrapper>
            <Title title="Share your thoughts..." />
            <div className={styles.container}>
                <div>

                    <textarea className={styles.textarea} defaultValue="Publication..."/>
                </div>
                <div>

                    <SubmitButton title="Post" />
                </div>
            </div>
            <Posts length={3}/>
        </PageWrapper>
    );
}

export default ShareThoughtsPage
