import {DEFAULT_IMAGE} from './../config'
export default function gridView(props){
    return(
        <div className="gridview">
        {props.beers.map((beer,index)=>{
            return <img src={beer.image_url || DEFAULT_IMAGE} key={index}  className="gridimage" alt="img"/>
        })}
        </div>
    )
}