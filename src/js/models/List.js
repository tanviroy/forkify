// This code adds the "Shopping List" feature of the website. 

import uniqid from 'uniqid';

export default class List {
  constructor(){
    this.items = [];
  }

  addItem(count, unit, ingredient){
    const item = {
      id: uniqid(),
      count, 
      unit,
      ingredient
    }
    this.items.push(item);
    return item;
  }

  getItem(id){
    return this.items.find(el => el.id = id);
  }

  deleteItem(id){
    const index = this.items.findIndex(el => el.id === id);
    // [2,4,8] splice(1, 1) --> return 4, original array is [2,8]
    // [2,4,8] slice(1, 1) --> return 4, original array is [2,4,8]
    this.items.splice(index, 1);
  }

  updateCount(id, newCount){
    this.items.find(el => el.id === id).count = newCount;

  }
}