const iState = {
    beers:[]
} 


const reducer = (state = iState, action) =>{
    if(action.type === 'ADD_BEER'){
        let updateState = {...state}
        updateState.beers=action.payload
        return updateState
    }

    if(action.type === 'LIKE_BEER'){
        let updateBeers = state.beers.map((beer)=>{
            if(beer.id === action.payload.id){
                return {...beer, likeCount: action.payload.like || 0 +1}
            }
            return beer
        })
        let updateState = {...state}
        updateState.beers = updateBeers
        return updateState
    }

    return state

}

export default reducer;