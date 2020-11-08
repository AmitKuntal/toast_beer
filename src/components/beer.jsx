import React from 'react';
import BeerFooter from './beerfooter';

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
                <img src={this.state.image_url || 'https://specsonline.com/wp-content/themes/Specs%20Theme/images/default_wine.png'} className="feed-image" alt="beer"/>
                <BeerFooter id = {this.props.beer.id} likeCount = {this.props.beer.likeCount || 0} comments = {this.props.beer.comments || []}/>
            </div>
        )
    }
}