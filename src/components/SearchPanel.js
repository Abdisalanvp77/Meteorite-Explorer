import React, { Component } from 'react';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            meteorDetail: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleClick(event) {
        event.preventDefault();
        console.log('The link was clicked.');
    }
    handleChange(event){
        
        this.setState({
            [event.target.name]: event.target.value,
        });

    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    filterData(data, str){
        var newData = []
        for(let item in data){
            // console.log(data[item])
            // console.log(str)
            if(data[item].hasOwnProperty(str)){
                console.log(data[item])
                newData.push(data[item]);
            }

        }
        return newData;
    }

 
    render() {
        var filteredData = this.filterData(this.props.meteorites, this.state.meteorDetail);
        // console.log(filteredData);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>                
                    <input 
                        type="text" 
                        name="meteorDetail"
                        placeholder="Search meteorite..."
                        value = {this.state.meteorDetail}
                        onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.handleClick}>Search</button>
                    {/* <p>SEARCH: {this.state.meteorDetail}</p> */}
                    {this.props.meteorites.map((meteor) => ( 
                        console.log(meteor.hasOwnProperty(this.state.meteorDetail))               
                        // <SearchResults key={meteor.id} meteor={meteor} />
                    ))};
                    
                </form>
            </div>
        );

    }

}

export default SearchPanel;
