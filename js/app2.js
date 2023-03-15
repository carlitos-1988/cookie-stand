'use strict';

let workDayArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let tableHeadElement = document.getElementById('table-header');
const tableBodyElement = document.getElementById('table-body');

//Funciton to generate header once
function generateHeader(){
  const storeHeader = document.createElement('th');
  storeHeader.textContent = 'Store Name';
  tableHeadElement.appendChild(storeHeader);
  for(let i=0; i< workDayArray.length; i++){
    const tableData = document.createElement('th');
    tableData.textContent = workDayArray[i];
    tableHeadElement.appendChild(tableData);
  }
  const lastCookie = document.createElement('th');
  lastCookie.textContent = 'Daily Location Total';
  tableHeadElement.appendChild(lastCookie);
}
//generated header automatically
generateHeader();

//Constructor function to create table body
function Store(nameOfStore,minimumCustomers,maximumCustomers,averageCookies) {
  this.nameOfStore = nameOfStore;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookies = averageCookies;
  this.totalCookies =0;

  this.countCustomers = [];
  this.arrayWithText = [];
  this.totalCookiesPerHour = [];
  this.cookiesSoldPerHour = [];
}
//function to show array as text to console
Store.prototype.displayArrayWithText = function() {
  console.log(this.totalCookiesPerHour);
  console.log(this.countCustomers);
  console.log(this.cookiesSoldPerHour);
};

//single prototype function to generate needed data to be used.
Store.prototype.generateData = function() {
  //iterate through workday array to genrate random customer number per hours available
  console.log(this.maximumCustomers + ' ' + this.minimumCustomers);
  for(let i=0; i<workDayArray.length; i++){
    let result = Math.ceil(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
    result *= Math.ceil(this.averageCookies);
    this.countCustomers.push(result);
    this.cookiesSoldPerHour.push(result);
  }
  //once random of customers per hour is generated each customer will be multiplied by
  //the average cookies and appended to array with text.also increasing cookies sold for total cookies sold.
  for(let i=0; i<this.countCustomers.length; i++){
    let cookiesSold = Math.ceil(this.averageCookies * this.countCustomers[i]);
    this.arrayWithText[i] = workDayArray[i] + ':'+ cookiesSold + ' cookies';
    this.totalCookiesPerHour[i] = this.countCustomers[i] + ' cookies';
    this.totalCookies += cookiesSold;
  }
};


//prototype function to display table body data;
Store.prototype.displayToDom = function() {

  const tableRowElement = document.createElement('tr');
  const storePlace = document.createElement('td');
  storePlace.textContent = this.nameOfStore;
  tableRowElement.appendChild(storePlace);

  for(let i=0; i<this.totalCookiesPerHour.length; i++){
    let itemTobePlaced = document.createElement('td');
    itemTobePlaced.textContent = this.totalCookiesPerHour[i];
    tableRowElement.appendChild(itemTobePlaced);
  }
  tableBodyElement.appendChild(tableRowElement);

  let lastItemtobePlaced = document.createElement('td');
  lastItemtobePlaced.textContent = this.totalCookies + ' cookies';
  tableRowElement.appendChild(lastItemtobePlaced);
};

function generateHourlyTotals(storeArray) {
  let generatedHours = [];
  let hourlyTotal = 0;
  for(let i =0; i<storeArray.length; i++){
    for(let j=0; j<storeArray[i].cookiesSoldPerHour.length; j++){
      let numberToPush = storeArray[i].cookiesSoldPerHour[j];
      hourlyTotal += numberToPush;
      generatedHours.push(hourlyTotal);
      console.log(hourlyTotal);
    }
  }
  console.log(generatedHours);
}

Store.prototype.doitAll = function() {
  this.generateData();
  this.displayToDom();
};

let SeatleStore = new Store('Seattle', 23, 65, 6.3);
SeatleStore.doitAll();
let TokyoStore = new Store('Tokyo', 3, 24, 1.2);
TokyoStore.doitAll();
let DubaiStore = new Store('Dubai', 11, 38, 3.7);
DubaiStore.doitAll();
let ParisStore = new Store('Paris', 20, 38, 2.3);
ParisStore.doitAll();
let LimaStore = new Store('Lima', 2, 16, 4.6);
LimaStore.doitAll();

let storeArray = [SeatleStore, TokyoStore, DubaiStore, ParisStore];
generateHourlyTotals(storeArray);
