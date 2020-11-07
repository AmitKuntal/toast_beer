import React from 'react';
import Beer from './beer';

export default class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state={
            beers:[]
        }
    }

    getBeer=()=>{
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(res=>res.json())
        .then(response=>{
            const beers = this.state.beers;
            this.setState({beers:[...beers, ...response]})
        })
    }

    componentWillMount(){
        this.getBeer();
        setInterval(this.getBeer,5000)
    }

    render(){
        return(
           
            <div className="feed">    
                {this.state.beers.map((beer, index)=>{
                return <Beer key={index} beer={beer}/>})}  
            </div>
        )
    }
}