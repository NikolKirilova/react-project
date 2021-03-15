import React, { Component } from 'react'
import PageWrapper from '../../components/page-wrapper'
import Posts from '../../components/posts'

class ProfilePage extends Component {
    constructor(props) {
       super(props) 

       this.state = {
           username: null,
           posts: null
           
       }
    }



    componentDidMount(){
        console.log(this.props.match.params.userid)
        this.getUser(this.props.match.params.userid)
    }

    getUser = async(id) => {
        const response = await fetch(`http:\\localhost:999/api/user?id=${id}`)
       console.log(response)

       if(!response.ok){
           this.props.history.push('/error')
       }
        const user = await response.json()
        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        })
    }
    render() {
        const {
            username,
            posts
        }= this.state


        if(!username){
            return(
                <PageWrapper>
                    <div> Loading...</div>
                </PageWrapper>
            )}
        return(
            <PageWrapper>
                <p>User: {username}</p>
                <p>Posts: {posts}</p>


         <Posts length={3}/>
            </PageWrapper>
        )
    }
}

export default ProfilePage