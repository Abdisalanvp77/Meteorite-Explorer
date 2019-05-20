import React, {Component} from 'react';
import SearchResults from './SearchResults';
import '../styles/Meteorite.css';
class Meteorite extends Component {
    render(){
        // console.log(this.props.meteorites);
        
        return (
            <div className="mainDiv">
                <table className="table">
                    <th>Name</th>
                    <th>id</th>
                    <th>Name Type</th>
                    <th>Rec Class</th>
                    <th>Mass(g)</th>
                    <th>Fall</th>
                    <th>Year</th>
                    <th>Latitude</th>
                    <th>Longitude</th><br/>
                    {this.props.meteorites.map((meteor) => (                
                        <SearchResults key={meteor.id} meteor={meteor} />
                    ))};
                </table>
            </div>
        );

    }
    
}

export default Meteorite;
