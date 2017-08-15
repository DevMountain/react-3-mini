# HTTP-mini

1. Fork, clone, and then `cd` into directory.
2. `npm install`
3. Below are instructions on how to interact with an api for a used car salesman.
  - Run `npm start`
  - Your task is to use the information below to make the buttons and selects functional.

#### Vehicles

URL: https://joes-autos.herokuapp.com

###### GET

- Get all vehicles - '/api/vehicles'

- Get vehicles by color - '/api/vehicles'
  - Send with query: `'color'`

- Get vehicles newer than specified year - '/api/vehicles'
  - Send with query: `'year'`

- Get vehicles by make - '/api/vehicles'
  - Send with query: `'make'`

###### POST
- Add vehicle - '/api/vehicles'
  - Need make, model, year, color, price in body of request. ID is auto-generated.
  - Responds with updated vehicles array.

###### PUT
- Increase/decrease price of car by $1000 -  '/api/vehicle/:id/:change'
  - `id` is the id of the vehicle
  - Value of `change` needs to be either `up` or `down`.
  - Responds with updated vehicles array.

###### DELETE
- Delete vehicle by id - '/api/vehicles/:id'
  - Responds with updated vehicles array.



#### Potential Buyers

###### GET
- Get all buyers '/api/buyers'

- Get buyers by name - '/api/buyersByName'
  - Send with query: `'name'`

###### POST
- Add potential buyer - '/api/buyers'
  - Need name, phone, address in body of request. ID is auto-generated.
  - Responds with updated buyers array.

###### DELETE
- Delete buyer by id - '/api/buyers/:id'
  - Responds with updated buyers array.



