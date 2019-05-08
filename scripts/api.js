
'use strict';


const api = (function api(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Dustin';

  function getItems(){
    return fetch(BASE_URL+'/items');
    //return Promise.resolve('A successful response');
  }

  function createItem(name) {
    const newItem = JSON.stringify({'name': name});

    const options ={
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: newItem,
    };

    return fetch(BASE_URL+'/items',options);
      
  }

  function updateItem(id, updateData) {
    const data = JSON.stringify(updateData);
    console.log(data);
    const options = {
      method: 'PATCH',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: data
    };
    return fetch(`${BASE_URL}/items/${id}`, options);
  }

  function deleteItem(id) {
    const options = {
      method: 'DELETE',
    };
    return fetch(`${BASE_URL}/items/${id}`, options);
  }

  return {
    getItems: getItems,
    createItem,
    updateItem,
    deleteItem,
  };
})();