import Beer from './beer';

export default function listView(props){
    return(
        <div className="listView">    
                {props.beers.map((beer, index)=>{
                return <Beer key={index} beer={beer}/>})}  
        </div>
    )
}