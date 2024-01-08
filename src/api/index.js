/* eslint-disable lines-around-comment */
import React from 'react'
import axios from 'axios'

const apiUrl = 'https://api.example.com'
const baseurl = 'http://localhost:8000/'
// Define your API functions here

// Example GET request
export const getcamplist = () => {
  return axios.get(baseurl + 'get_all_camp')
}

// Example POST request
// export const postData = (data) => {
//   return axios.post(${apiUrl}/post, data);
// };

// function getcamplist() {
//   fetch(baseurl + 'get_all_camp', {
//     method: 'GET'
//   })
//     .then(response => response.json())
//     .then(data => {
//       setcampList(data)
//     })
//     .catch(error => console.log(error))
// }
