import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './style.css';


class PostDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        // setup an array called sections to contain our post content
        var sections = this.props.post.sections;

        return(
            <div className="post-detail-view">
                {/* -------------- Display post section by section -------------- */}
                {
                    sections.map((s) => {
                        // get the url of the first image from this section
                        var imageUrl = (s.media[0] || {}).url;

                        return (
                            <div key={s.title} className="section">
                                <img src={imageUrl} className="imageUrl" alt="Section"/>
                                <div className="section-description">{ReactHtmlParser(s.description)}</div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }

}


export default PostDetail;