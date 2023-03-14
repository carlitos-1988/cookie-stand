'use strict';

let seattleStore = {
  salmonStore: 'Seattle Store',
  minCustomers : 23,
  maxCustomers : 65,
  avgSale : 6.3,
  totalCookies: 0,
  storeLocation: 'store1',

  //array to count day for customers
  countCustomers : [],

  arrayWithText : [],

  //function to generate one day of customers
  generateOneDay: function(){
    let generatedCustomers = generateCustomers(this.minCustomers,this.maxCustomers);
    generatedCustomers = Math.floor(generatedCustomers * this.avgSale);
    console.log(generateCustomers);
    //push the random generated
    this.countCustomers.push(generatedCustomers);
  },

  //to generate 14 hours worth of work
  generateWorkdayCookieSales: function(){

    for(let i=0; i <14;i++){
      this.generateOneDay();
    }
  },

  //adds the needed string for formatting the output to be placed in DOM
  displaySaleOfDay : function(){
    this.arrayWithText = displayElemntsOfArray(this.countCustomers);
  },

  //Count the total cookies in countCustomers

  countMyTotalCookies: function(){
    let storeCookies =  countTotalCookies(this.countCustomers);
    console.log('Total:'+ storeCookies + 'cookies');
    this.totalCookies = storeCookies;
  },

  addToDom : function(){
    listItemsInStore(this.totalCookies,this.arrayWithText,this.storeLocation);
  },

  dotItALL : function(){

    this.generateWorkdayCookieSales();
    this.displaySaleOfDay();
    this.countMyTotalCookies();
    this.addToDom();
  }


};


let tokyoStore = {
  salmonStore: 'Tokyo Store',
  minCustomers : 3,
  maxCustomers : 24,
  avgSale : 1.2,
  totalCookies: 0,
  storeLocation: 'store2',

  //array to count day for customers
  countCustomers : [],

  arrayWithText : [],

  //function to generate one day of customers
  generateOneDay: function(){
    let generatedCustomers = generateCustomers(this.minCustomers,this.maxCustomers);
    generatedCustomers = Math.floor(generatedCustomers * this.avgSale);
    console.log(generateCustomers);
    //push the random generated
    this.countCustomers.push(generatedCustomers);
  },

  //to generate 14 hours worth of work
  generateWorkdayCookieSales: function(){

    for(let i=0; i <14;i++){
      this.generateOneDay();
    }
  },

  //adds the needed string for formatting the output to be placed in DOM
  displaySaleOfDay : function(){
    this.arrayWithText = displayElemntsOfArray(this.countCustomers);
  },

  //Count the total cookies in countCustomers

  countMyTotalCookies: function(){
    let storeCookies =  countTotalCookies(this.countCustomers);
    console.log('Total:'+ storeCookies + 'cookies');
    this.totalCookies = storeCookies;
  },

  addToDom : function(){
    listItemsInStore(this.totalCookies,this.arrayWithText,this.storeLocation);
  },

  dotItALL : function(){

    this.generateWorkdayCookieSales();
    this.displaySaleOfDay();
    this.countMyTotalCookies();
    this.addToDom();
  }


};





let dubaiStore ={
  salmonStore:'Dubai Store',
  minCustomers : 11,
  maxCustomers : 38,
  avgSale : 3.7,
  totalCookies: 0,
  storeLocation: 'store3',

  //array to count day for customers
  countCustomers : [],

  arrayWithText : [],

  //function to generate one day of customers
  generateOneDay: function(){
    let generatedCustomers = generateCustomers(this.minCustomers,this.maxCustomers);
    generatedCustomers = Math.floor(generatedCustomers * this.avgSale);
    console.log(generateCustomers);
    //push the random generated
    this.countCustomers.push(generatedCustomers);
  },

  //to generate 14 hours worth of work
  generateWorkdayCookieSales: function(){

    for(let i=0; i <14;i++){
      this.generateOneDay();
    }
  },

  //adds the needed string for formatting the output to be placed in DOM
  displaySaleOfDay : function(){
    this.arrayWithText = displayElemntsOfArray(this.countCustomers);
  },

  //Count the total cookies in countCustomers

  countMyTotalCookies: function(){
    let storeCookies =  countTotalCookies(this.countCustomers);
    console.log('Total:'+ storeCookies + 'cookies');
    this.totalCookies = storeCookies;
  },

  addToDom : function(){
    listItemsInStore(this.totalCookies,this.arrayWithText,this.storeLocation);
  },

  dotItALL : function(){

    this.generateWorkdayCookieSales();
    this.displaySaleOfDay();
    this.countMyTotalCookies();
    this.addToDom();
  }

};

let parisStore ={
  salmonStore: 'Paris Store',
  minCustomers : 20,
  maxCustomers : 38,
  avgSale : 2.3,
  totalCookies: 0,
  storeLocation: 'store4',

  //array to count day for customers
  countCustomers : [],

  arrayWithText : [],

  //function to generate one day of customers
  generateOneDay: function(){
    let generatedCustomers = generateCustomers(this.minCustomers,this.maxCustomers);
    generatedCustomers = Math.floor(generatedCustomers * this.avgSale);
    console.log(generateCustomers);
    //push the random generated
    this.countCustomers.push(generatedCustomers);
  },

  //to generate 14 hours worth of work
  generateWorkdayCookieSales: function(){

    for(let i=0; i <14;i++){
      this.generateOneDay();
    }
  },

  //adds the needed string for formatting the output to be placed in DOM
  displaySaleOfDay : function(){
    this.arrayWithText = displayElemntsOfArray(this.countCustomers);
  },

  //Count the total cookies in countCustomers

  countMyTotalCookies: function(){
    let storeCookies =  countTotalCookies(this.countCustomers);
    console.log('Total:'+ storeCookies + 'cookies');
    this.totalCookies = storeCookies;
  },

  addToDom : function(){
    listItemsInStore(this.totalCookies,this.arrayWithText,this.storeLocation);
  },

  dotItALL : function(){

    this.generateWorkdayCookieSales();
    this.displaySaleOfDay();
    this.countMyTotalCookies();
    this.addToDom();
  }


};

let limaStore = {
  salmonStore:'Lima Store',
  minCustomers : 2,
  maxCustomers : 16,
  avgSale : 4.6,
  totalCookies: 0,
  storeLocation: 'store5',

  //array to count day for customers
  countCustomers : [],

  arrayWithText : [],

  //function to generate one day of customers
  generateOneDay: function(){
    let generatedCustomers = generateCustomers(this.minCustomers,this.maxCustomers);
    generatedCustomers = Math.floor(generatedCustomers * this.avgSale);
    console.log(generateCustomers);
    //push the random generated
    this.countCustomers.push(generatedCustomers);
  },

  //to generate 14 hours worth of work
  generateWorkdayCookieSales: function(){

    for(let i=0; i <14;i++){
      this.generateOneDay();
    }
  },

  //adds the needed string for formatting the output to be placed in DOM
  displaySaleOfDay : function(){
    this.arrayWithText = displayElemntsOfArray(this.countCustomers);
  },

  //Count the total cookies in countCustomers

  countMyTotalCookies: function(){
    let storeCookies =  countTotalCookies(this.countCustomers);
    console.log('Total:'+ storeCookies + 'cookies');
    this.totalCookies = storeCookies;
  },

  addToDom : function(){
    listItemsInStore(this.totalCookies,this.arrayWithText,this.storeLocation, this.salmonStore);
  },

  dotItALL : function(){

    this.generateWorkdayCookieSales();
    this.displaySaleOfDay();
    this.countMyTotalCookies();
    this.addToDom();
  },

};

document.getElementById('buttonStore1').onclick = function(){seattleStore.dotItALL();};
document.getElementById('buttonStore2').onclick = function(){tokyoStore.dotItALL();};
document.getElementById('buttonStore3').onclick = function(){dubaiStore.dotItALL();};
document.getElementById('buttonStore4').onclick = function(){parisStore.dotItALL();};
document.getElementById('buttonStore5').onclick = function(){limaStore.dotItALL();};


















// Below are my helper Methods
console.log(seattleStore, tokyoStore,dubaiStore, parisStore, limaStore);


// generate number range from max customers to minimum customers
function generateCustomers(minCust, maxCust){
  console.log(minCust + ' and ' + maxCust);
  let result = Math.ceil(Math.random() * (maxCust - minCust) + minCust);
  console.log(result);
  return result;
}

//some function to iterate customers array and display as appropriate

function displayElemntsOfArray(arr){
  let half = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0,half);
  let secondHalf = arr.slice(half);

  for(let i =0;i<firstHalf.length;i++){
    console.log((i+6)+'am: ' + arr[i] + 'cookies');
    firstHalf[i] = (i+6)+'am: ' + arr[i] + 'cookies';
  }
  for(let i =0;i<secondHalf.length;i++){
    console.log((i+1)+'pm: ' + arr[i] + 'cookies');
    secondHalf[i] = (i+1)+'pm: ' + arr[i] + 'cookies';
  }
  let arrayWithText = firstHalf.concat(secondHalf);

  return arrayWithText;

}

function countTotalCookies(arr){
  let sumOfCookies=0;
  for(let i = 0; i<arr.length;i++){
    sumOfCookies +=arr[i];
  }
  return sumOfCookies;
}

function listItemsInStore(totalCookies, arr, domLocation,storeName){
  let locationPlacementFirst = document.getElementById(domLocation);
  locationPlacementFirst.style='border-bottom: thin solid black;';
  let storeTobePlaced = document.createElement('h3');
  storeTobePlaced.textContent = storeName;
  locationPlacementFirst.appendChild(storeTobePlaced);

  for(let i =0;i < arr.length;i++){
    let locationPlacement = document.getElementById(domLocation);
    let itemTobePlaced = document.createElement('p');
    itemTobePlaced.textContent = arr[i];
    console.log(itemTobePlaced);
    locationPlacement.appendChild(itemTobePlaced);
  }

  let locationPlacementLast = document.getElementById(domLocation);
  let tempTotalCookies = document.createElement('p');
  tempTotalCookies.textContent = 'Total: ' + totalCookies + ' cookies';
  locationPlacementLast.appendChild(tempTotalCookies);

}

