import React, { Component } from 'react';
import dummyImage from '../components/DummyImage'
import cordoba from '../images/cordoba.jpg'
import buenosAires from '../images/buenos-aires.jpg'
import mendoza from '../images/mendoza.jpg'

const origin = [
  {
    airportCode: 'EPA',
    cityName: 'Buenos Aires',
    image: buenosAires
  }]

const destination = [
  {
    airportCode: 'COR',
    cityName: 'Cordoba',
    image: cordoba
  },
  {
    airportCode: 'MDZ',
    cityName: 'Mendoza',
    image: mendoza
  }]

class Search extends Component{
  constructor() {
    super()
    this.state = {
      isOrigin: true,
      origin: null,
    }
  }

  selected = ( airportCode, isOrigin ) => {
    this.state.isOrigin ? this.setState({ origin: airportCode, isOrigin}) : this.props.history.push(`./flights/${this.state.origin}to${airportCode}`)
  }

  render() {
    return (
      <div>
        <h1 style={text}>Seleccione su {this.state.isOrigin ? 'origen' : 'destino'}</h1>
        <ul>
          {(this.state.isOrigin ? origin : destination).map((item) => {
            return (
              <div>{dummyImage(this.selected,item,false,item.image)}</div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Search;

const text = {
  marginLeft: '37px',
  color: 'orange'
}