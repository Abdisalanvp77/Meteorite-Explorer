import React, {Component} from 'react';
import './App.css';
import Meteorite from './components/Meteorite';
import SearchPanel from './components/SearchPanel';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      apiData: [],
      meteors: [
        {id: 1,
        name: "yassin",
        nameType: "valid",
        recClass: "ls",
        mass: 13,
        fall: "feb",
        year: 2018,
        latitude: 50.55,
        longitude: 67.53
        },
        {
          id: 2,
          name: "abdullah",
          nameType: "valid",
          recClass: "lg",
          mass: 11,
          fall: "march",
          year: 2027,
          latitude: 50.25,
          longitude: 33.53
        },
        {
          id: 3,
          name: "liban",
          nameType: "valid",
          recClass: "md",
          mass: 12,
          fall: "june",
          year: 2009,
          latitude: 42.55,
          longitude: 48.53
        },
        {
          id: 4,
          name: "basasy",
          nameType: "valid",
          recClass: "ls",
          mass: 12,
          fall: "december",
          year: 2000,
          latitude: 17.55,
          longitude: 27.53
        }

      ],
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          apiData: data
        })
      })
  }


  render() {
    console.log(this.state.apiData);
    for(let item in this.state.apiData){
      console.log(item["fall"]);
    }
    const text = this.state.loading ? "loading ..." : this.state.apiData;
    return (
      <div className="App">
        <h5 className="App-Header">Meteorite Explorer</h5>
        {/* <p> {text} </p> */}
        <SearchPanel meteorites={this.state.apiData}/>
        
        <Meteorite meteorites={this.state.apiData}/>
      </div>
    );
  }
  
}

export default App;
