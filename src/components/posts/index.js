import React, { Component } from 'react'
import styles from './index.module.css'
import Post from '../posts'



class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }


    getPosts = async () => {
        const promise = await fetch('http://localhost:9999/api/origami')
        const posts = await promise.json()

        this.setState({
            posts
        })
    }

    renderPosts() {
        const { posts } = this.state

        return posts.map(post => {
            return (
            <Post key={post._id} {...post} />
            )
        })
    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
      

        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Posts</h1>
                <div className={styles["origamis-wrapper"]}>
                    {this.renderPosts()}

                </div>

            </div>

        )



    }


}

export default Posts