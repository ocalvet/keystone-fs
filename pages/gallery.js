import { Component } from 'react';
import axios from 'axios';
import GalleryList from '../components/GalleryList';

class About extends Component {
  state = {
    galleries: []
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/api/gallery')
    console.log('data', response);
    this.setState({
      galleries: response.data
    });
  }
  
  render() {
    const { galleries } = this.state;
    return (
      <div>
        <GalleryList galleries={galleries} />
      </div>
    );
  };
}

export default About;