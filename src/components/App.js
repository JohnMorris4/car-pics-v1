import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import './App.css';



// turn this into a class based component and pass information from parent tp child
class App extends React.Component {
  state = {images: [] };
   onSearchSubmit = async (term) => {
   const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: term
    },  
    headers: {
        Authorization:
          "Client-ID a94176a14e9d6792fe8b8d2197cb1d28110672db91b9f600641e01f4b46f8cc7"
      }
    });
    this.setState({ images: response.data.results });
  }
  render() {
  return (
    <div className="ui container sb-head">
      <SearchBar onSubmit={this.onSearchSubmit} />
      Found: {this.state.images.length} images
     </div>
    );
  }
}

export default App;