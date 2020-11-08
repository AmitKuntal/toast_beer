import {Link} from 'react-router-dom';

export default function Navigation(props){
    return (
        <div className="nav">
            <Link to="/" className="navlink">
                <span >Feed</span>
            </Link>
            <Link to="/dashboard" className="navlink">
                <span >Dashboard</span>
            </Link>
        </div>
        
    )
}