<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll introduce how to use `axios` inside of a React project. We'll cover full CRUD in this project ( GET, PUT, POST, DELETE ) and also cover how to use .then(). Majority of the React application will already be built for you. If you're finding it hard to dive into an existing code base and understand exactly what is going on, that's perfectly normal. Try to focus only on how we're interacting with the API using `axios`.

This project is also incorporating toast notifications to help visualize successful or failed API requests. Therefore when building out our `axios` requests, we will add an additional line of code for successful and failed API requests.

* Success: `ToastStore.success('Success!', 3000);`
* Failure: `ToastStore.error('Failed!', 3000);`

## Setup

1. `Fork` and `clone` this repository.
2. `cd` into the project directory.
3. Run `npm install`.
4. Run `npm start`.

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
* When the request returns the data, use `this.setState()` to update the value of `vehiclesToDisplay`.
  * Hint: Inspect the returned data object.

### Solution

<details>

<summary> <code> ./src/App.js ( getVehicles method ) </code> </summary>

```js
getVehicles() {
  axios.get('https://joes-autos.herokuapp.com/api/vehicles').then( results => {
    this.setState({ 'vehiclesToDisplay': results.data });
  });
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
* When the request returns the data, use `this.setState()` to update the value of `vehiclesToDisplay`.
  * Hint: Inspect the returned data object.

### Solution

<details>

<summary> <code> ./src/App.js ( updatePrice method ) </code> </summary>

```js
updatePrice( priceChange, id ) {
  axios.put(`https://joes-autos.herokuapp.com/api/vehicles/${ id }/${ priceChange }`).then( results => {
    this.setState({ 'vehiclesToDisplay': results.data.vehicles });
  });
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
* When the request returns the data, use `this.setState()` to update the value of `vehiclesToDisplay`.
  * Hint: Inspect the returned data object.

## Step 4

DELETE

## Black Diamond

Complete the remaining methods..


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>