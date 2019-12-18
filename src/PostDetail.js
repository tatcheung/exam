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

                        var imageDetail = s.media[0];

                        return (
                            <div key={s.title} className="section">
                                <img src={imageDetail.url} className="section-image" alt="section thumbnail"/>
                                <div className="section-title">{s.title}</div>
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