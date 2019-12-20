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
        // get thumbnail from first section
        var thumbnail = first_section.media[0].url;
        var title = first_section.title;
        var displaytime = post.time;

        console.log(first_section); // HINT: see what is first section at your console

        return (
            <div className="post" onClick={() => {
                // when post is being clicked
                if(typeof this.props.onClick == "function") {
                    this.props.onClick();
                }
            }}>
                {/* --------- Post thumbnail --------- */}
                <img src={thumbnail} className="thumbnail" alt="Section"/>
                <div>
                    {/* --------- Post Title? --------- */}
                    <h1>{title}</h1>

                    {/* --------- Post time? --------- */}
                    {displaytime}

                </div>
            </div>
        );
    }

}

export default Post;

