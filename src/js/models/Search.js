// This code uses Async/Await method whereby an asynchronous function returns a promise - the result of the data that was requested which is stored in variable "res". The try/catch catches if there is an error and will alert the user with a pop up box. 

import axios from 'axios';
import {key, proxy} from '../config';

export default class Search{
  constructor(query){
    this.query = query;
  }

  async getResults(){
    try{
      const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(this.result);
    }catch(error){
      alert(error);
    }
  };
}