import React from 'react';
import {connect} from 'react-redux';


function BeerFooter(props){
    const [liked, setLiked] = React.useState(true)
    const likeBeer=()=>{

        setLiked(!liked,props.likeBeer({like:props.likeCount + 1, id:props.id}))

    }

    const commentBeer=()=>{
        
    }
    return (
        <div className="controls">
            <span className="control">
                <img className="control"
                    onClick={likeBeer}
                    src={liked ? 'https://icon-library.com/images/beer-icon-png/beer-icon-png-12.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ2pQDjUilE1hQpmR8-MslTJmg2oCJdSH92w&usqp=CAU'} alt="like"/>
                {props.likeCount}    
                </span>
            <span className="control">
                <img src="https://cdn.onlinewebfonts.com/svg/img_571105.png" alt="comment" className="control" onClick={commentBeer}/>
                {props.comments.length}
            </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
return{
    likeBeer:(payload)=>{dispatch({'type':'LIKE_BEER', payload:payload})},
    commentBeer:(payload)=>{dispatch({'type':'COMMENT_BEER', payload:payload})}
    }
}

export default connect(null, mapDispatchToProps)(BeerFooter);