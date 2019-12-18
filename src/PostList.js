import React from 'react';
import Post from './Post';
import PostDetail from './PostDetail';
import './style.css';

class PostList extends React.Component {

    // setup
    constructor(props){
        super(props);
        this.state = {
            selectedPost : {
                sections : []
            },
            posts : []
        }
    }


    componentDidMount(){
        // get posts
        fetch(
            "/api/articles",
            {
                method : "GET"
            }
        )
        // get response's data
        .then((response) => {
            return response.json();
        })
        // assign data to state
        .then((data) => {
            // get posts
            var posts = data.data.rows;
            // update state
            this.setState({
                posts : posts
            });
        })
        // error?
        .catch((error) => {
            alert(error);
        });
    }


    // rendering
    render(){
        return (
            <div className="app-container">
                <div className="wrapper">

                    {/* --------- Post List ---------- */}
                    <div className="left-column">
                        <div className="nav">
                            文章列表
                        </div>
                        <div className="post-list">
                            {this.state.posts.map((a) => {
                                return (
                                    <Post key={a.id} post={a} onClick={() => {
                                        // When post onClick, we set selectedPost as a
                                        this.setState({ selectedPost : a });
                                    }}/> 
                                );
                            })}
                        </div>
                    </div>
                    {/* --------- /Post List ---------- */}

                    {/* --------- Post Reading View ---------- */}
                    <div className="right-column">
                        {/*  Post Detail is a component displaying the selected Post */}
                        <PostDetail post={this.state.selectedPost} />
                    </div>
                    {/* --------- /Post Reading View ---------- */}

                </div>
            </div>
        );
    }

}

export default PostList;

