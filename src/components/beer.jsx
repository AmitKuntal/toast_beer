import React from 'react';

export default class Beer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            ...props.beer,
            comments:[]
        }
    }

    render(){
        return(
            <div className="beer">
                <div className="title">
                    <span className="name">{this.state.name}</span>
                    <p className="tagline">{this.state.tagline}</p>
                </div>
                <img src={this.state.image_url || 'https://bitsofco.de/content/images/2018/12/broken-1.png'} className="feed-image" alt="beer"/>
                <div className="controls">
                    <span className="control">Like</span>
                    <span className="control">Comment {this.state.comments.length}</span>
                </div>
            </div>
        )
    }
}