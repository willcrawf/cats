import tokenService from '../services/tokenService';
const BASE_URL = '/api/cats/';

export function create(cat) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(cat)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function getAll() {
    console.log('front end api fetch getting called')
    return fetch(BASE_URL, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken() }
    },
         {mode: "cors"})
    .then(res => res.json())
  }

  export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
  }