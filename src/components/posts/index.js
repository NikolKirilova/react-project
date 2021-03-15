import React, { Component } from 'react'
import styles from './index.module.css'
import Post from '../post' 
 



class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }


    getPosts = async () => {
        const { length } = this.props
        const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`)
        const posts = await promise.json()

        this.setState({
            posts
        })
    }

    renderPosts() {
        const { posts } = this.state

        return posts.map((post,index) => {
            return (
            <Post key={post._id} index={index} {...post} />
            )
        })
    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
        return (
         
                <div className={styles["origamis-wrapper"]}>
                    {this.renderPosts()}            

            </div>

        )
    }
}

export default Posts
