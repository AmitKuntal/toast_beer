import React from 'react';
import {connect} from 'react-redux';
import {LIKE_ICON_ACTIVE, LIKE_ICON, COMMENT_ICON} from './../config'


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
                    src={liked ? LIKE_ICON_ACTIVE : LIKE_ICON} alt="like"/>
                {props.likeCount}    
                </span>
            <span className="control">
                <img src={COMMENT_ICON} alt="comment" className="control" onClick={commentBeer}/>
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