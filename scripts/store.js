/* global Item */
'use strict';
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item){
    this.items.push(item);
  };

  const findById = function(id) {
    return store.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const findAndUpdate = function(id, newData) {
    let item = findById(id);
    item = Object.assign(item, newData);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const setError = function(error) {
    console.log('Setting error');
    this.error = error;
  };

  return {
    items: [],
    error: '',
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    findAndUpdate,
    setError
  };
  
}());
