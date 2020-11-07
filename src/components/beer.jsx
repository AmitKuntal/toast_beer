import React from 'react';

export default class Beer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            ...props.beer,
            comments:[],
            liked:true
        }
    }

    render(){
        return(
            <div className="beer">
                <div className="title">
                    <span className="name">{this.state.name}</span>
                    <p className="tagline">{this.state.tagline}</p>
                </div>
                <img src={this.state.image_url || 'https://specsonline.com/wp-content/themes/Specs%20Theme/images/default_wine.png'} className="feed-image" alt="beer"/>
                <div className="controls">
                    <img className="control"
                        onClick={()=>this.setState({liked:!this.state.liked})}
                        src={this.state.liked ? 'https://icon-library.com/images/beer-icon-png/beer-icon-png-12.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ2pQDjUilE1hQpmR8-MslTJmg2oCJdSH92w&usqp=CAU'} alt="like"/>
                    <span className="control"><img src="https://cdn.onlinewebfonts.com/svg/img_571105.png" alt="comment" className="control" /></span>
                </div>
            </div>
        )
    }
}