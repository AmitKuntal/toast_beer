import Navigation from './navigation';
import ViewControls from './viewcontrols';
import {connect} from 'react-redux';
import GridView from './gridView';
import ListView from './listView';
 function Dashboard(props){

    if(window.getBeerInterval !== undefined && window.getBeerInterval !== 'undefined'){
        window.clearInterval(window.getBeerInterval);
    }
    return(
        <>
        <Navigation />
        <div className="dashboard">
            <ViewControls />
            <div className="view">
                {props.view === "GRID" ? <GridView beers={props.beers} />:<ListView beers={props.beers} /> }
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
      beers:state.beers,
      view:state.view
    }
  }

export default connect(mapStateToProps)(Dashboard)