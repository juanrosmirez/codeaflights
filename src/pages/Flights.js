import React from 'react';
import EPACOR from '../epa-cor.json'
import EPAMDZ from '../epa-mdz.json'
import dummyImage from '../components/DummyImage'
import cordoba from '../images/cordoba.jpg'
import buenosAires from '../images/buenos-aires.jpg'
import mendoza from '../images/mendoza.jpg'
                                                                       

export default class Flights extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      price : 0,  
      originImage : buenosAires,
      destinationImage: props.match.params.id.substring(5, 8) === 'COR' ? cordoba : mendoza,
      flights: props.match.params.id.substring(0, 3) + props.match.params.id.substring(5, 8) === 'EPACOR' ? EPACOR : EPAMDZ

    }
  }

  priceFunction = (price) => {
    this.setState({price})
  }
  render(){
  return (
    <div>
      <p style={styleLetter}>Vuelo de ida</p>
      {dummyImage(null,this.state.flights.flights[0],null,this.state.destinationImage,this.state.price,this.priceFunction)}
    
      <p style={styleLetter}>Vuelo de vuelta</p>
      {dummyImage(null,this.state.flights.flights[1],null,this.state.originImage,this.state.price,this.priceFunction)}
      <p style={styleLetter}>Precio final: {this.state.price}</p>
    </div>
  );
}
}

const styleLetter = {
  fontSize : '30px',
  marginLeft : '10px',
  color: 'orange',
  fontWeight: 'bold',
}
