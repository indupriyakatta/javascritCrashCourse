// console.log('hello world');
// console.error('this is an error');
// console.warn('this is warning')

// let
// let score=10;


// score=100;
// console.log(score);



//const
// const age=30;

// console.log(age);


//datatypes
//string ,numbers , boolean , null

// const name ='john';
// const num = 25;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y =  undefined;
// let z;

// console.log(typeof name);
// console.log(typeof rating);
// console.log(isCool);
// console.log(typeof x);

//string concatenation

 //const name = 'john';
 //const age = 30;

 //concatenation
 //console.log('my name is' + name + 'and i am ' + age );
 
 //template string
 //const hello = `my name is ${name} and i am ${age}`;
 //console.log(hello)


 //string properties

//  const s='hello world';

//  console.log(s.length);
//  console.log(s.toUpperCase());
//  console.log(s.toLowerCase());
//  console.log(s.substring(0, 5).toUpperCase());

//array in a string
// const s= 'hello world!';
// console.log(s.split(''));

//const s = 'technology, computers, it, code';
//console.log(s.split(', '));

//arrays - variables that hold multiple values
//const numbers = new Array( 1,2,3,4,5);
//console.log(numbers);

// adding elements into arrays

// const fruits = [ 'apples','oranges','pears'];
// console.log(fruits);

// fruits[3]='grapes';
// console.log(fruits);
//add last
//fruits.push('mangoes');
// console.log(fruits);
//add beginning

// fruits.unshift('strawberries');
//console.log(fruits);
//to pop an elment from array (last one)
// fruits.pop();
// console.log(fruits);


//to check that whether something is in array or not
// console.log(Array.isArray('mangoes'));

//to find the index
// console.log(fruits.indexOf('pears'));

//OBJECT LITERALS

// const person = {
//     firstName: 'john',
//     lastName : 'doe',
//     Age : 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address : {
//         street: '50 main st',
//         city: 'boston',
//         state: 'MA',
//     },
// }
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);


// //VARIABLES
// const{ firstName, lastName, address:{city}} = person;
// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person);

//ARRAYS TODOS
// const todos =[
//     {
//         id: 1,
//         text:'take out trash',
//         isCompleted: true,
//     },

//     {
//         id: 2,
//         text:'meeting with boss',
//         isCompleted: false,
//     },

//     {
//         id: 3,
//         text:'dentist appointment',
//         isCompleted: true,
//     },
// ];

//LOOPS
//for
// for (let i = 0; i <= 10; i++)
// {
//     console.log(`forloop number: ${i}`);
// }

//while
// let i = 0;
// while(i < 10)
// {
//     console.log(`whileloop number: ${i}`);
//     i++;
// }
//LOOP THROUGH AN ARRAY
//for
// for (let i = 0; i < todos.length; i++)
// {
//     console.log(todos[i].text);
// }

//METHOD FOR LOOP
// for(let todo of todos){
//     console.log(todo.id);
// }
    

//HIGHORDER ARRAY METHODS
//forEach , map , filter

// //forEach
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// //map
// const todoText = todos.map(function(todo) {
//     return todo.text;});
// console.log(todoText);

// //filter
// const todocompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;}).map(function(todo) {return todo.text;})
// console.log(todocompleted);

//CONDITIONALS

// const x = 10;

// if (x === 10)
// {
//     console.log('x is 10');
// }
// else if (x > 10)
// {
//     console.log('x is greater than 10');
// }
// else
// {
//     console.log('x is less than 10');
// }

// and or

// const x = 6;
// const y = 11;

// if (x > 5 || y > 10)
// {
//     console.log('x is more than 5 or y is greater than 10');
// }

// //TERNARY OPERATOR
// const z = 6 ;
// const color = z > 10 ? 'red' : "blue";
// console.log(color);

//switch
// const  x = 9;
// const  color = 'green';

// switch(color) {
//     case 'red': console.log('color is red');
//     break;
//     case  'blue': console.log('color is blue');
//     break;
//     default : console.log ('color is not red or blue');
//     break;
// }

//FUNCTIONS

    // function addNums(num1 = 1, num2 = 1)
    // {
    //     return num1 + num2;
    // }
    // console.log(addNums(5, 5));

    //ARROW FUNCTIONS
//     const addNums = (num1 = 1, num2 =1) => {return num1 +   num2 ;}
//     console.log(addNums(5,5));


// //OBJECT ORIENTED PROGRAMMING

// //CONSTRUCTOR FUNCTION
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob); 
//     }
//  Person.prototype.getBirthYear = function () {
//      return this.dob.getFullYear();
//  }

//  Person.prototype.getFullName =function () {
//      return `${this.firstName} ${this.lastName}`;
//   }


//   //CLASS
//   class Person{
//       constructor(firstName, lastName, dob) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.dob = new Date(dob); 
//       }
//       getBirthYear(){
//         return this.dob.getFullYear();
//       }
//        getFullName(){
//         return `${this.firstName} ${this.lastName}`;

//        }
//   }

// //INSTANTIATE OBJECT
//  const person1 = new Person('john','doe','4-3-1980');
//  const person2 = new Person('mary','smith','3-5-1970');

// console.log(person2.getFullName());
// console.log(person1);


//single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//multiple elements
// console.log(document.querySelectorAll('item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

//manipulations

//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'brad';
// ul.lastElementChild.innerHTML = '<h1> hello </h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = "red";


// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items')
//     .lastElementChild.innerHTML = '<h1> hello </h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);
function onsubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
      msg.innerHTML = 'please enter all fields';
      setTimeout(() => msg.remove(), 3000);
    } else{
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

      userList.appendChild(li);

      //clear fields
      nameInput.value = '';
      emailInput.value = '';
        }
    }

