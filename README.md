# HTTP-mini

1. Fork, clone, and then `cd` into directory.
2. Run `npm install`.
3. Below is the documentation for a used car sales business' API. Read through the api docs so that you know what types of requests you can make, and what responses you can expect. 

* Start with setting up **_1_** get, put, post, and delete request. If you have time or need more practice with http requests, set up the rest of the app.

NOTE: Your focus is on making the http requests using axios. You will notice that most of the app is already set up for you.

REMINDER: It is hard to dive into an existing code base and understand exactly what is going on. This project's focus is to help you learn how to interact with an API through http requests. It is not neccessary to understand each peice of this react app.

FOCUS:
  - How to make an http request using axios.
  - Understanding GET, PUT, POST, and DELETE
  - Using and understanding `.then()`

Bonus - notifications:
- This app is using a library called 'react-toasts'. You can have a toast show up in the corner to let you know if your http requests were successful or not.
- i.e.:
  ```
  axios.get('/api/vehicles')
  .then( res => {
    if (res.status === 200) {
      ToastStore.success('Success!', 3000)
    } else {
      ToastStore.error('Uh, oh! We got code issues!', 3000)
    }
  })
  
  ```
  success(message, timer) : green toast

  info(message, timer) : white toast

  warning(message, timer) : yellow toast

  error(message, timer) : red toast

<hr><hr>  

## Joe's Auto API Docs:

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
- Request url: base url + '/api/vehicle/:id/:change'
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



