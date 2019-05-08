/* global shoppingList, store, $, api */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));

      
      // const item = store.items[0];
      // console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'foobar' });
      // console.log('new name: ' + item.name);
      shoppingList.render();
    });
});