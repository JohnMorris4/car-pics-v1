import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';



// turn this into a class based component and pass information from parent tp child
class App extends React.Component {
  state = {images: [] };
   onSearchSubmit = async (term) => {
   const response = await unsplash.get("/search/photos", {
    params: {
      query: term
    }
    });
    this.setState({ images: response.data.results });
  }
  render() {
  return (
    <div className="ui container sb-head">
      <SearchBar onSubmit={this.onSearchSubmit} />
      
      <ImageList images={this.state.images} />
     </div>
    );
  }
}

export default App;