import React from 'react';

export default class Beer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            comments:[]
        }
    }

    render(){
        return(
            <div className="beer">
                <div className="title">
                    <h2>Title</h2>
                    <h2>Beer Name</h2>
                </div>
                <p className="subset">Subset info</p>
                <img src="https://images.punkapi.com/v2/192.png" className="feed-image" alt="beer"/>
                <div className="controls">
                    <span className="control">Like</span>
                    <span className="control">Comment {this.state.comments.length}</span>
                </div>
            </div>
        )
    }
}