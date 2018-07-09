import { Component } from 'react';
import axios from 'axios';

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
        <h1>Galleries</h1>
        {galleries.map(g => (
          <div key={g._id}>
            <h4>{g.name}</h4>
            <div>
            {g.images.map(i => {
              return (
                <img key={i._id} className="image" src={i.secure_url} alt={i.secure_url} />
              );
            })}
            </div>
          </div>
        ))}
      </div>
    );
  };
}

export default About;