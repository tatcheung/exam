import React from 'react';
import Post from './Post';
import './style.css';

class PostList extends React.Component {

    // setup
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

    // events
    componentDidMount(){

        fetch(
            "https://cdn.oneshop.cloud/lesson5_api_3.json",
            {
                method : "GET"
            }
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // set it to state
            this.setState({posts : data});
        })
        .catch((error) => {
            console.log(error);
        });

    }


    // rendering
    render(){
        return (
            <div>
                <div className="nav">Posts</div>
                <div className="post-list">
                    {this.state.posts.map((a) => {
                        /*
                            {
                                "title" : "orhgowrhg",
                                "description" : "wrwrgg",
                                "thumbnail" : "rwgwrgwgr"
                            }

                            {
                                "id": 3434,
                                "content" : {
                                    "title" : "orhgowrhg",
                                    "description" : "wrwrgg",
                                    "thumbnail" : "rwgwrgwgr"
                                }
                            }
                        */
                        return (
                            <Post 
                                title={a.post.content.title} 
                                description={a.post.content.description}
                                thumbnail={a.post.image.thumbnail}
                            /> 
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default PostList;

