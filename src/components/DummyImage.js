import React from 'react';
import departure from '../images/departures.png'
import arrival from '../images/arrival.png'
import airplane from '../images/airplane.png'
import './DummyImage.css'


export default function dummyImage(search, { airportCode, cityName, origin, destination, flightNo, departureDate, arrivalDate, fares }, state, image, priceFly, priceFunction) {
  // cityName ? const [button, setButton] = useState(false) : null

  const selected = () => {
    search(airportCode, state)
  }

  const price = (price) => {
    var totalPrice = priceFly + price
    priceFunction(totalPrice)
  }

  const departureDay = departureDate ? departureDate.substring(5, 9) : null
  const departureHour = departureDate ? departureDate.substring(11, 16) : null
  const arrivalDay = arrivalDate ? arrivalDate.substring(5, 9) : null
  const arrivalHour = arrivalDate ? arrivalDate.substring(11, 16) : null

  return (

    <div>
      {!cityName
        ?
        <div>
          <img style={styleImage} onClick={search ? selected : null} src={image} alt="dummyImage" width='400' height='250'></img>
          <p style={styleLetter}>{cityName}</p>
          <img style={styleIcon} src={airplane} alt="dummyImage" width='3%'></img>
          <p style={styleLetter}>{'Vuelo nro ' + flightNo}</p>
          <img style={styleIcon} src={departure} alt="dummyImage" width='3%'></img>
          <p style={styleLetter}>{'Salida ' + departureDay + ' ' + departureHour + ' (' + origin + ')'}</p>
          <img style={styleIcon} src={arrival} alt="dummyImage" width='3%'></img>
          <p style={styleLetter}>{'Llegada ' + arrivalDay + ' ' + arrivalHour + ' (' + destination + ')'}</p>
          <label>
            <input
              type="radio"
              onChange={() => price(fares[0].prices.afterTax)} />
            Seleccionar vuelo
        </label>
          <br />
          <br />

        </div>
        :
        <div className='container'>
          <img className='imagen' onClick={search ? selected : null} src={image} alt="dummyImage" width='400' height='250'></img>
          <p className='bottom-left'>{cityName}</p>
        </div>}
    </div>
  );
}

const styleLetter = {
  fontStyle: 'italic',
  fontSize: '15px',
  padding: "10px 15px",
}

const styleImage = {
  float: 'left',
  padding: '10px',
  transition: 'all .5s ease-in-out',
  hover: { filter: 'opacity(.5)' }
}

const styleIcon = {
  float: 'left',
}

