
'use strict';


const api = (function api(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Dustin'

  function getItems(){
    return fetch(BASE_URL+'/items')
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

  return {
    getItems: getItems,
    createItem,
  }
})();