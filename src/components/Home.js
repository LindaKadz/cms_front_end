import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
  super(props)
  this.state = {
    posts: []
   }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v0/contents")
      .then(response => response.json())
      .then((result) => {
          let posts = result.response.map(
            (post) => {
            return(
              <div key={post.id} >
                <h2>{post.title}</h2>
                <h4>{post.author}</h4>
                <h4>{post.date}</h4>
                <p>{post.summary}</p>
                <p>{post.body}</p>
             </div>
            )
          });
          this.setState({  posts: posts});
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

    render() {
      return (
        <div>
          Posts
        </div>
        { this.state.posts }
      );
  }

export default Home
