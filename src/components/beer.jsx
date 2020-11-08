import React from 'react';
import BeerFooter from './beerfooter';
import {DEFAULT_IMAGE} from './../config';

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
                <img src={this.state.image_url || DEFAULT_IMAGE} className="feed-image" alt="beer"/>
                <BeerFooter id = {this.props.beer.id} likeCount = {this.props.beer.likeCount || 0} comments = {this.props.beer.comments || []}/>
            </div>
        )
    }
}