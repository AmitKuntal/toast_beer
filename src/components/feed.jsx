import React from 'react';
import Beer from './beer';
import {connect} from 'react-redux';
import Navigation from './navigation'


class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ...props
        }
    }

    getBeer=()=>{
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(res=>res.json())
        .then(response=>{
            const beers = [...this.props.beers, ...response];
            this.props.addBeer(beers)
        })
    }

    componentWillMount(){
        this.getBeer();
        window.getBeerInterval = setInterval(this.getBeer,5000)
    }

    render(){
        return(
            <>
            <Navigation />
            <div className="feed">    
                {this.props.beers.map((beer, index)=>{
                return <Beer key={index} beer={beer}/>})}  
            </div>
            </>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
      beers:state.beers
    }
  }

const mapDispatchToProps = (dispatch) =>{
return{
    addBeer:(payload)=>{dispatch({'type':'ADD_BEER', payload:payload})}
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Feed);