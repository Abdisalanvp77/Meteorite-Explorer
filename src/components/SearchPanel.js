import React, { Component } from 'react';

class SearchPanel extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search meteorite..."/>
                <button type="submit">Search</button>
            </div>
        );

    }

}

export default SearchPanel;
