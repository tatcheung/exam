import React from 'react';
import './style.css';

class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        
        // get post
        var post = this.props.post;
        // get first section
        var first_section = post.sections[0] || {};
        // get thumbnail
        var thumbnail = first_section.media[0].url;

        return (
            <div className="post" onClick={() => {
                if(typeof this.props.onClick == "function") {
                    this.props.onClick();
                }
            }}>
                {/* --------- Post thumbnail --------- */}
                <img src={thumbnail} className="thumbnail" alt="Section"/>
                <div>
                    {/* --------- Post Title --------- */}
                    <div className="post-title">{first_section.title}</div>
                    {/* --------- Post Title --------- */}
                    <div className="post-time">{post.time}</div>
                </div>
            </div>
        );
    }

}

export default Post;

