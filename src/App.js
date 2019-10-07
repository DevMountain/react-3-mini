import React, { Component } from 'react';
import logo from './mainStreetAuto.svg';
import axios from 'axios';
import './App.css';

// Toast notification dependencies
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehiclesToDisplay: [],
      buyersToDisplay: []
    };

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
    this.deleteBuyer = this.deleteBuyer.bind(this);
  }

  getVehicles() {
    // axios (GET)
    // setState with response -> vehiclesToDisplay
  }

  getPotentialBuyers() {
    // axios (GET)
    // setState with response -> buyersToDisplay
  }

  sellCar(id) {
    // axios (DELETE)
    // setState with response -> vehiclesToDisplay
  }

  filterByMake() {
    let make = this.selectedMake.value;

    // axios (GET)
    // setState with response -> vehiclesToDisplay
  }

  filterByColor() {
    let color = this.selectedColor.value;

    // axios (GET)
    // setState with response -> vehiclesToDisplay
  }

  updatePrice(priceChange, id) {
    // axios (PUT)
    // setState with response -> vehiclesToDisplay
  }

  addCar() {
    let newCar = {
      make: this.make.value,
      model: this.model.value,
      color: this.color.value,
      year: this.year.value,
      price: this.price.value
    };

    // axios (POST)
    // setState with response -> vehiclesToDisplay
  }

  addBuyer() {
    let newBuyer = {
      name: this.name.value,
      phone: this.phone.value,
      address: this.address.value
    };

    //axios (POST)
    // setState with response -> buyersToDisplay
  }

  deleteBuyer(id) {
    // axios (DELETE)
    //setState with response -> buyersToDisplay
  }

  nameSearch() {
    let searchLetters = this.searchLetters.value;

    // axios (GET)
    // setState with response -> buyersToDisplay
  }

  byYear() {
    let year = this.searchYear.value;

    // axios (GET)
    // setState with response -> vehiclesToDisplay
  }

  // Do not edit the code below
  resetData(dataToReset) {
    axios
      .get('https://joes-autos.herokuapp.com/api/' + dataToReset + '/reset')
      .then(res => {
        if (dataToReset === 'vehicles') {
          this.setState({ vehiclesToDisplay: res.data.vehicles });
        } else {
          this.setState({ buyersToDisplay: res.data.buyers });
        }
      });
  }
  // Do not edit the code above

  render() {
    const vehicles = this.state.vehiclesToDisplay.map(v => {
      return (
        <div className="vehicle" key={v.id}>
          <p className="vehicle__desc">
            <strong>Make:</strong> {v.make}
          </p>
          <p className="vehicle__desc">
            <strong>Model:</strong> {v.model}
          </p>
          <p className="vehicle__desc">
            <strong>Year:</strong> {v.year}
          </p>
          <p className="vehicle__desc">
            <strong>Color:</strong> {v.color}
          </p>
          <p className="vehicle__desc">
            <strong>Price:</strong> {v.price}
          </p>

          <button
            className="btn btn-sp"
            onClick={() => this.updatePrice('up', v.id)}
          >
            Increase Price
          </button>

          <button
            className="btn btn-sp"
            onClick={() => this.updatePrice('down', v.id)}
          >
            Decrease Price
          </button>

          <button className="btn btn-sp" onClick={() => this.sellCar(v.id)}>
            SOLD!
          </button>
        </div>
      );
    });

    const buyers = this.state.buyersToDisplay.map(person => {
      return (
        <div className="buyer" key={person.id}>
          <p className="buyer__desc">
            <strong>Name:</strong> {person.name}
          </p>
          <p className="buyer__desc">
            <strong>Phone:</strong> {person.phone}
          </p>
          <p className="buyer__desc">
            <strong>Address:</strong> {person.address}
          </p>

          <button
            className="btn"
            onClick={() => {
              this.deleteBuyer(person.id);
            }}
          >
            No Longer Interested
          </button>
        </div>
      );
    });

    return (
      <div>
        <ToastContainer />

        <header className="header">
          <img src={logo} alt="" />

          <button
            className="header-btn1 btn"
            onClick={() => this.resetData('vehicles')}
          >
            Reset Vehicles
          </button>

          <button
            className="header-btn2 btn"
            onClick={() => this.resetData('buyers')}
          >
            Reset Buyers
          </button>
        </header>

        <div className="btn-container">
          <button className="btn-sp btn" onClick={this.getVehicles}>
            Get All Vehicles
          </button>

          <select
            onChange={this.filterByMake}
            ref={selectedMake => {
              this.selectedMake = selectedMake;
            }}
            className="btn-sp"
            value=""
          >
            <option value="" disabled>
              Filter by make
            </option>
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
            ref={selectedColor => {
              this.selectedColor = selectedColor;
            }}
            onChange={this.filterByColor}
            className="btn-sp"
            value=""
          >
            <option value="" disabled>
              Filter by color
            </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="Purple">Purple</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="teal">Teal</option>
          </select>

          <input
            onChange={this.nameSearch}
            placeholder="Search by name"
            type="text"
            ref={searchLetters => {
              this.searchLetters = searchLetters;
            }}
          />

          <input
            ref={searchYear => {
              this.searchYear = searchYear;
            }}
            className="btn-sp"
            type="number"
            placeholder="Year"
          />

          <button onClick={this.byYear} className="btn-inp">
            Go
          </button>

          <button className="btn-sp btn" onClick={this.getPotentialBuyers}>
            Get Potential Buyers
          </button>
        </div>

        <br />

        <p className="form-wrap">
          <input
            className="input"
            placeholder="Make"
            ref={make => {
              this.make = make;
            }}
          />
          <input
            className="input"
            placeholder="Model"
            ref={model => {
              this.model = model;
            }}
          />
          <input
            type="number"
            className="input"
            placeholder="Year"
            ref={year => {
              this.year = year;
            }}
          />
          <input
            className="input"
            placeholder="Color"
            ref={color => {
              this.color = color;
            }}
          />
          <input
            type="number"
            className="input"
            placeholder="Price"
            ref={price => {
              this.price = price;
            }}
          />

          <button className="btn-sp btn" onClick={this.addCar}>
            Add Vehicle
          </button>
        </p>

        <p className="form-wrap">
          <input
            className="input"
            placeholder="Name"
            ref={name => {
              this.name = name;
            }}
          />
          <input
            className="input"
            placeholder="Phone"
            ref={phone => {
              this.phone = phone;
            }}
          />
          <input
            className="input"
            placeholder="Address"
            ref={address => {
              this.address = address;
            }}
          />

          <button onClick={this.addBuyer} className="btn-sp btn">
            Add Buyer
          </button>
        </p>

        <main className="main-wrapper">
          <section className="info-box">
            <h3 className="info-box__title">Inventory</h3>

            {vehicles}
          </section>

          <section className="info-box">
            <h3 className="info-box__title">Potential Buyers</h3>

            {buyers}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
