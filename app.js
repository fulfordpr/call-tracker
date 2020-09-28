const custNum = document.querySelector('#customer-number');
const list = document.querySelector('#instance-list');
const form = document.querySelector('#form');
const time = document.querySelector('#time');
const date = document.querySelector('#date');
const logIn = document.querySelector('#log-status');
const ready = document.querySelector('#ready-status');
const ring = document.querySelector('#ring-status');
const currentCall = document.querySelector('#phone-status');
const vm = document.querySelector('#vm-status');
const phone = document.querySelector('#phone-number');



//Load event listeners
loadAllEventListeners();

function loadAllEventListeners(){
document.addEventListener('DOMContentLoaded', getInstances);
// customer number event
form.addEventListener('submit', addInstance);

}


function getInstances(){
  let instances;
  if(localStorage.getItem('instances') === null){
    instances = [];
  } else {
    instances = JSON.parse(localStorage.getItem('instances'));
  }
  // console.log(instances);
  // console.log(typeof instances);
  //set the keys and values into an Array with arrays [[x,y],[x,y]]
  const properties = Object.entries(instances);
  // console.log(testProperties);
  // console.log(typeof properties);
  for(const [prop,value] of properties){
    const inst = Object.entries(value);
    //create ul and set class
    const ul = document.createElement('ul');
    ul.className = 'instance';
    for(const [prop,value] of inst){
      
      //create an li and set class
      const li = document.createElement('li');
      li.className = 'instance-data';
      li.appendChild(document.createTextNode(`${prop}`+ ': ' + `${value}` + ' '));
      ul.appendChild(li);
      list.appendChild(ul);
    }
  }
  
}
  










//add customer number
function addInstance(e){
  if(custNum.value === ''||
  time.value === ''||
  date.value === ''){
    alert('At least fill customer number, date, and time.');
  } else {
    //create instance object
    const instance = {
      Customer_Number : custNum.value, 
      Phone_Number : phone.value,
      Call_Time :time.value, 
      Call_Date : date.value, 
      Login_Status : logIn.value, 
      Ready_Status : ready.value, 
      Phone_Ring : ring.value, 
      On_Call : currentCall.value, 
      Received_VM : vm.value
    };
    //store in local storage
    storeInLS(instance);



  //set the keys and values into an Array with arrays [[x,y],[x,y]]
    const properties = Object.entries(instance);
  //output the keys and values into the document
    addToDOM(properties);
    console.log(properties);
    e.preventDefault();
  }
}



// function addToDOM(properties){
//   for(const [prop,value] of properties){
//   //create ul and set class
//   const ul = document.createElement('ul');
//   ul.className = 'instance';
//   //create an li and set class
//   const li = document.createElement('li');
//   li.className = 'instance-data';
//   li.appendChild(document.createTextNode(`${prop}`+ ': ' + `${value}` + ' '));
//   ul.appendChild(li);
//   list.appendChild(ul);
// }
// }

//store instance in local storage
function storeInLS(inst){
  let instances;
  if(localStorage.getItem('instances') === null){
    instances = [];
  } else {
    instances = JSON.parse(localStorage.getItem('instances'));
  }
  //set the keys and values into an Array with arrays [[x,y],[x,y]]
  // instances = Object.entries(inst)
  instances.push(inst);
  localStorage.setItem('instances', JSON.stringify(instances));
}