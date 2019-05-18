import React, { Component } from 'react';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            meteorDetail: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    handleChange(e){
        e.preventDefault();
        this.setState(state => ({
            meteorDetail: e.target.value,
        }));

    }

 
    render() {
        return (
            <div>
                
                <input type="text" placeholder="Search meteorite..." onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleClick}>Search</button>
                <p>SEARCH: {this.state.meteorDetail}</p>
            </div>
        );

    }

}

export default SearchPanel;
