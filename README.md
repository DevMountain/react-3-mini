<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll introduce `axios` and how to use it inside of a React project. We'll cover full `CRUD` ( GET, PUT, POST, DELETE ) and also cover how to use `.then()`. The majority of the React application will already be built for you. If you're finding it hard to dive into an existing code base and understand exactly what is going on, that's perfectly normal. It's most important to focus only on how we're interacting with the API using `axios`.

To help you understand wether or not you API requests are failed or successful, we've used a UI tool to build in the ability to visualize notifications in the app. The specific style we use is referred to as a "toast" notification. To take advantage of this capability to visualize successful and failed API requests, an additional line of code will need to be added to `axios` requests, examples of which can be found below.

* Success: `toast.success("Success!");`
* Failure: `toast.error("Failed!");`

# Live Example

<a href="https://devmountain.github.io/react-3-mini/">Click Me!</a>

<img src="https://github.com/DevMountain/react-3-mini/blob/solution/assets/1.png" />

## Setup

1.  `Fork` and `clone` this repository.
2.  `cd` into the project directory.
3.  Run `npm install`.
4.  Run `npm start`.
5.  In a seperate terminal, `cd` into the project directory.

## API Documentation

https://app.swaggerhub.com/apis/DevMountain/Joes-Auto/1.0.0

Please reference this API documentation when completing the project steps.

## Step 1

### Summary

In this step, we'll make use of `axios` to get the `Get All Vehicles` button to work. When fetching data from a server you should always use a GET request.

### Instructions

* Open `./src/App.js`.
* Locate the pre-made `getVehicles` method.
* Using `axios` and the API documentation make a GET request to receive all the vehicles.
  * If the request is successful, use `this.setState()` to update the value of `vehiclesToDisplay` and use `toast.success`.
    * Hint: Inspect the returned data object.
  * If the request is unsuccessful, use `toast.error`.

### Solution

<details>

<summary> <code> ./src/App.js ( getVehicles method ) </code> </summary>

```js
getVehicles() {
  axios.get('https://joes-autos.herokuapp.com/api/vehicles').then( results => {
    toast.success("Successfully got Vehicles.");
    this.setState({ 'vehiclesToDisplay': results.data });
  }).catch( () => toast.error("Failed at fetching Vehicles") );
}
```

</details>

## Step 2

### Summary

In this step, we'll make use of `axios` to get the `Increase Price` and `Decrease Price` buttons to work. When modifying/updating data on a server you always use a PUT request.

### Instructions

* Open `./src/App.js`.
* Locate the pre-made `updatePrice` method.
* Using `axios` and the API documentation make a PUT request to either increase or decrease the price.
  * If the request is successful, use `this.setState()` to update the value of `vehiclesToDisplay` and use `toast.success`.
    * Hint: Inspect the returned data object.
  * If the request is unsuccessful, use `toast.error`.

### Solution

<details>

<summary> <code> ./src/App.js ( updatePrice method ) </code> </summary>

```js
updatePrice( priceChange, id ) {
  axios.put(`https://joes-autos.herokuapp.com/api/vehicles/${ id }/${ priceChange }`).then( results => {
    toast.success("Successfully updated price.");
    this.setState({ 'vehiclesToDisplay': results.data.vehicles });
  }).catch( () => toast.error("Failed at updating price") );
}
```

</details>

## Step 3

### Summary

In this step, we'll make use of `axios` to get the `Add vehicle` button to work. When creating new data on a server you should always use a POST request.

### Instructions

* Open `./src/App.js`.
* Locate the pre-made `addCar` method.
* Using `axios` and the API documentation make a POST request to create a new vehicle.
  * If the request is successful, use `this.setState()` to update the value of `vehiclesToDisplay` and use `toast.success`.
    * Hint: Inspect the returned data object.
  * If the request is unsuccessful, use `toast.error`.

### Solution

<details>

<summary> <code> ./src/App.js ( addCar method ) </code> </summary>

```js
addCar() {
  let newCar = {
    make: this.make.value,
    model: this.model.value,
    color: this.color.value,
    year: this.year.value,
    price: this.price.value
  };

  axios.post('https://joes-autos.herokuapp.com/api/vehicles', newCar).then( results => {
    toast.success("Successfully added vehicle.");
    this.setState({ vehiclesToDisplay: results.data.vehicles });
  }).catch( () => toast.error('Failed at adding new vehicle.') );
}
```

</details>

## Step 4

### Summary

In this step, we'll make use of `axios` to get the `SOLD!` button to work. When deleting data on a server you should always use a DELETE request.

### Instructions

* Open `./src/App.js`.
* Locate the pre-made `sellCar` method.
* Using `axios` and the API documentation make a DELETE request to delete ( "sell" ) a vehicle.
  * If the request is successful, use `this.setState()` to update the value of `vehiclesToDisplay` and use `toast.success`.
    * Hint: Inspect the returned data object.
  * If the request is unsuccessful, use `toast.error`.

### Solution

<details>

<summary> <code> ./src/App.js ( sellCar method ) </code> </summary>

```js
sellCar( id ) {
  axios.delete(`https://joes-autos.herokuapp.com/api/vehicles/${ id }`).then( results => {
    toast.success("Successfully sold car.");
    this.setState({ 'vehiclesToDisplay': results.data.vehicles });
  }).catch( () => toast.error("Failed at selling car.") );
}
```

</details>

## Black Diamond

If there is extra time during the lecture, try to complete the remaining methods. The remaining methods can also be used as `axios` and `CRUD` practice on your own time.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
