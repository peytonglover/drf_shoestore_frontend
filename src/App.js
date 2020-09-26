import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoe: [{}]
    }
  }
  
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then((res) => res.json())
    .then((data) => this.setState({shoe: data}))
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.shoe.map(s => (
            <li> Brand Name: {s.brand_name}
            <ul>
            size: {s.size}, material: {s.material}, fasten_type: {s.fasten_type}, manufacturer: {s.manufacturer}, color: {s.color}
            </ul>
            </li>

          ))}
        </ul>
      </div>
    );
  }
}

export default App;
