import React from 'react';
import './style.css';

class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        return (
            <div className="post">
                <div>
                    <img src={this.props.thumbnail}/>
                </div>
                <div className="title">{this.props.title}</div>
                <div>{this.props.description}</div>
            </div>
        )
    }

}

export default Post;

