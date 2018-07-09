import { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';

class App extends Component {

  static async getInitialProps() {
    let response = await axios.get('http://localhost:3000/api/event');
    console.log('EVENTS', response);
    return { events: response.data };
  }

  async componentDidMount() {
    let response = await axios.get('http://localhost:3000/api/event');
    console.log('|EVENTS|', response);
  }

  render() {
    return (
      <div className='container'>
        <style jsx>{`
            .content {
              padding: 16px 16px;
            }
            .post {
              margin-bottom: 16px;
            }
        `}</style>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          { this.props.events.map((event, i) => {
              return (
                <div className='event' key={i}>
                  <div className='row'>
                    <div className='col-12 col-md-4'>
                      <img className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-8'>
                      <h2>{event.name}</h2>
                      <div dangerouslySetInnerHTML={{__html: event.description}}></div>
                    </div>
                  </div>
                </div>
              );
            }) }
        </div>
      </div>
    );
  };
}

export default App;