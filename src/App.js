import React, { Component } from 'react';
import logo from './joesAuto.svg';
import axios from 'axios';
import './App.css';

// === TOAST ================
import { ToastContainer, ToastStore } from 'react-toasts';
// ===========================

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      vehiclesToDisplay: [],
      buyersToDisplay: [],
      baseUrl: 'https://joes-autos.herokuapp.com'
    }

    this.getVehicles = this.getVehicles.bind(this);
    this.getPotentialBuyers = this.getPotentialBuyers.bind(this);
    this.sellCar = this.sellCar.bind(this);
    this.addCar = this.addCar.bind(this);
    this.filterByColor = this.filterByColor.bind(this);
    this.filterByMake = this.filterByMake.bind(this);
    this.addBuyer = this.addBuyer.bind(this);
    this.nameSearch = this.nameSearch.bind(this);
    this.resetData = this.resetData.bind(this);
    this.byYear = this.byYear.bind(this);
  }

  getVehicles() {
    // axios (GET)
    // setState with response -> vehiclesToDisplay
    axios.get(`${this.state.baseUrl}/api/vehicles`)
    .then(res => {
      this.setState({
        vehiclesToDisplay: res.data
      })
    })
  }

  getPotentialBuyers() {
    // axios (GET)
    // setState with response -> buyersToDisplay
    axios.get(`${this.state.baseUrl}/api/buyers`)
    .then(res => {
      this.setState({
        buyersToDisplay: res.data
      })
    })
  }

  sellCar(id) {
    // axios (DELETE)
    // setState with response -> vehiclesToDisplay
    axios.delete(`${this.state.baseUrl}/api/vehicles/${id}`)
    .then(res => {
      this.setState({
        vehiclesToDisplay: res.data.vehicles
      })
    })
  }

  filterByMake() {
    let make = this.refs.selectedMake.value
    // axios (GET)
    // setState with response -> vehiclesToDisplay
    axios.get(`${this.state.baseUrl}/api/vehicles?make=${make}`)
    .then(res => {
      this.setState({
        vehiclesToDisplay: res.data
      })
    })
  }

  filterByColor() {
    let color = this.refs.selectedColor.value;
    // axios (GET)
    // setState with response -> vehiclesToDisplay
    axios.get(`${this.state.baseUrl}/api/vehicles?color=${color}`)
    .then(res => {
      this.setState({
        vehiclesToDisplay: res.data
      })
    })
  }

  updatePrice(priceChange, id) {
    // axios (PUT)
    // setState with response -> vehiclesToDisplay
    axios.put(`${this.state.baseUrl}/api/vehicles/${id}/${priceChange}`)
    .then(res => {
      this.setState({
        vehiclesToDisplay: res.data.vehicles
      })
    })
  }

  addCar(){
  let newCar = {
    make: this.refs.make.value,
    model: this.refs.model.value,
    color: this.refs.color.value,
    year: this.refs.year.value,
    price: this.refs.price.value
  }  
  // axios (POST)
  // setState with response -> vehiclesToDisplay
  axios.post(this.state.baseUrl + '/api/vehicles', newCar)
  .then(res => {
    this.setState({
      vehiclesToDisplay: res.data.vehicles
    })
  })
}

addBuyer() {
  let newBuyer ={
    name: this.refs.name.value,
    phone: this.refs.phone.value,
    address: this.refs.address.value
  }
  //axios (POST)
  // setState with response -> buyersToDisplay
  axios.post(`${this.state.baseUrl}/api/buyers`, newBuyer)
  .then(res => {
    this.setState({
      buyersToDisplay: res.data.buyers
    })
  })
}

nameSearch() {
  let searchLetters = this.refs.searchLetters.value;
  // axios (GET)
  // setState with response -> buyersToDisplay
  axios.get(`${this.state.baseUrl}/api/buyers?name=${searchLetters}`)
  .then(res => {
    this.setState({
      buyersToDisplay: res.data
    })
  })
}

byYear() {
  let year = this.refs.searchYear.value;
  console.log(year)
  // axios (GET)
  // setState with response -> vehiclesToDisplay
  axios.get(`${this.state.baseUrl}/api/vehicles?year=${year}`)
  .then(res => {
    this.setState({
      vehiclesToDisplay: res.data
    })
  })
}

// ==============================================
// RESET DATA - DON'T CHANGE
// ==============================================
resetData(dataToReset) {
  axios.get('https://joes-autos.herokuapp.com/api/' + dataToReset + '/reset')
    .then( res => {
      if (dataToReset === 'vehicles') {
        this.setState({
          vehiclesToDisplay: res.data
        })
      } else {
        this.setState({
          buyersToDisplay: res.data
        })
      }
    })
}
// ==============================================
// ==============================================

  render() {
    const vehicles = this.state.vehiclesToDisplay.map( v => {
      return (
        <div key={ v.id }>
          <p>Make: { v.make }</p>
          <p>Model: { v.model }</p>
          <p>Year: { v.year }</p>
          <p>Color: { v.color }</p>
          <p>Price: { v.price }</p>
          <button
            className='btn btn-sp'
            onClick={ () => this.updatePrice('up', v.id) }
            >Increase Price</button>
          <button
            className='btn btn-sp'
            onClick={ () => this.updatePrice('down', v.id) }
            >Decrease Price</button>  
          <button 
            className='btn btn-sp'
            onClick={ () => this.sellCar(v.id) }
            >SOLD!</button>
          <hr className='hr' />
        </div> 
      )
    })

    const buyers = this.state.buyersToDisplay.map ( person => {
      return (
        <div key={person.id}>
          <p>Name: {person.name}</p>
          <p>Phone: {person.phone}</p>
          <p>Address: {person.address}</p>
          <button className='btn'>No longer interested</button>
          <hr className='hr' />
        </div> 
      )
    })

    return (
      <div className=''>
        <ToastContainer store={ ToastStore } />
        <header className='header'>
         <img src={logo} alt=""/>
         <button className="header-btn1 btn">Reset Vehicles</button>
         <button className='header-btn2 btn'>Reset Buyers</button>
        </header>
        <div className='btn-container'>
          <button
            className='btn-sp btn' 
            onClick={ this.getVehicles }
            >Get All Vehicles</button>
          <select
            onChange={ this.filterByMake }
            ref='selectedMake'
            className='btn-sp'>
            <option value="" selected disabled>Filter by make</option>
            <option value="Suzuki">Suzuki</option>
            <option value="GMC">GMC</option>
            <option value="Ford">Ford</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Dodge">Dodge</option>
            <option value="Chrysler">Chrysler</option>
          </select>  
          <select 
            ref='selectedColor'
            onChange={ this.filterByColor }
            className='btn-sp'>
            <option value="" selected disabled>Filter by color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="Purple">Purple</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="teal">Teal</option>
          </select>
          <input 
            onChange={ this.nameSearch } 
            placeholder='Search by name' 
            type="text"
            ref='searchLetters'/>
           <input
            ref='searchYear'
            className='btn-sp'
            type='number'
            placeholder='Year'/>
          <button
            onClick={ this.byYear }
            className='btn-inp'>
            Go</button>  
          <button
            className='btn-sp btn'
            onClick={ this.getPotentialBuyers }
            >Get Potential Buyers</button>
        </div> 

        <br />

        <p className='form-wrap'>
          <input className='btn-sp' placeholder='make' ref="make"/>
          <input className='btn-sp' placeholder='model' ref='model'/>
          <input type='number' className='btn-sp' placeholder='year' ref='year'/>
          <input className='btn-sp' placeholder='color' ref='color'/>
          <input type='number' className='btn-sp' placeholder='price' ref='price'/>
          <button className='btn-sp btn' onClick={this.addCar}>Add vehicle</button>
        </p>
        <p className='form-wrap'>
          <input className='btn-sp' placeholder='name' ref='name'/>
          <input className='btn-sp' placeholder='phone' ref='phone'/>
          <input className='btn-sp' placeholder='address' ref='address'/>
          <button 
            onClick={ this.addBuyer }
            className='btn-sp btn' 
            >Add buyer</button>
        </p>
        

        <main className='main-wrapper'>
          <section className='info-box'> 
            <h3>Inventory</h3>

            { vehicles }

          </section>
          <section className='info-box'>
            <h3>Potential Buyers</h3>

            { buyers }

          </section>
        </main>  


      </div> 
    );
  }
}

export default App;
