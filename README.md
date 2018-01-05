<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll introduce how to use axios inside of a React project. We'll cover full CRUD in this project ( GET, PUT, POST, DELETE ) and also cover how to use .then(). Majority of the React application will already be built for you. If you're finding it hard to dive into an existing code base and understand exactly what is going on, that's perfectly normal. Try to focus only on how we're interacting with the API using axios.

This project is also incorporating toast notifications to help visualize successful or failed API requests. Therefore when building out our axios requests, we will add an additional line of code for successful and failed API requests.

* Success: `ToastStore.success('Success!', 3000);`
* Failure: `ToastStore.error('Failed!', 3000);`

## Setup

1. `Fork` and `clone` this repository.
2. `cd` into the project directory.
3. Run `npm install`.
4. Run `npm start`.

## Step 1

GET

## Step 2

PUT

## Step 3

POST

## Step 4

DELETE

## Black Diamond

Complete the remaining methods..




## Main Street Auto's API Docs:

  - Base url: https://joes-autos.herokuapp.com

### *Vehicles*


#### GET

##### Get all vehicles
- Request url: base url + '/api/vehicles'
- Response: All vehicles

##### Get vehicles by color
- Request url: base url + '/api/vehicles'
- Send with query: i.e. `?color=red`
- Response: All vehicles that match given color

##### Get vehicles newer than specified year
- Request url: base url + '/api/vehicles'
- Send with query: i.e. `?year=1998`
- Response: All vehicles newer than given year

##### Get vehicles by make
- Request url: base url + '/api/vehicles'
- Send with query: i.e. `?make=ford`
- Response: All vehicles that match given car make

#### POST

##### Add vehicle
- Request url: base url + '/api/vehicles'
- Need make, model, year, color, price in body of request. ID is auto-generated.
- Response: updated vehicles array.

#### PUT

##### Increase/decrease price of car by $1000 
- Request url: base url + '/api/vehicles/:id/:change'
  - `id` is the id of the vehicle
  - Value of `change` needs to be either `up` or `down`.
- Response: updated vehicles array

#### DELETE

##### Delete vehicle by id
- Request url: base url + '/api/vehicles/:id'
- Response: updated vehicles array


### *Potential Buyers*

#### GET

##### Get all buyers
- Request url: base url + '/api/buyers'
- Response: array of all buyers

##### Get buyers by name/letters
- Request url: base url + '/api/buyers'
  - Send with query: i.e. `?name=Lindsey`
  - Will find names that match letters sent
- Response: Array of buyers with matching names

#### POST

##### Add potential buyer
- Request url: base url + '/api/buyers'
  - Need name, phone, address in body of request. ID is auto-generated.
- Response: updated buyers array

#### DELETE

##### Delete buyer by id
- Request url: base url + '/api/buyers/:id'
  - `id` param is the id of the buyer getting removed
- Response: updated buyers array

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>