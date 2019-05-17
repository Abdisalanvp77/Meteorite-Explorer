import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
class SearchResult extends Component {
    render() {
        return (          
            <tr>
                <td>{this.props.meteor.name}</td>
                <td>{this.props.meteor.id}</td>
                <td>{this.props.meteor.nameType}</td>
                <td>{this.props.meteor.recClass}</td>
                <td>{this.props.meteor.mass}</td>
                <td>{this.props.meteor.fall}</td>
                <td>{this.props.meteor.year}</td>
                <td>{this.props.meteor.latitude}</td>
                <td>{this.props.meteor.longitude}</td>
            </tr>          
        );

    }

}

export default SearchResult;
