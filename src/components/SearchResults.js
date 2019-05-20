import React, { Component } from 'react';

class SearchResult extends Component {
    render() {
        return (          
            <tr>
                <td>{this.props.meteor.name}</td>
                <td>{this.props.meteor.id}</td>
                <td>{this.props.meteor.nametype}</td>
                <td>{this.props.meteor.recclass}</td>
                <td>{this.props.meteor.mass}</td>
                <td>{this.props.meteor.fall}</td>
                <td>{this.props.meteor.year}</td>
                <td>{this.props.meteor.reclat}</td>
                <td>{this.props.meteor.reclong}</td>
            </tr>          
        );

    }

}

export default SearchResult;
