// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const x = 10;
// Here x is 10
console.log('x - 10:' + x);
{
  //const x = 2;
  // Here x is 2
  console.log('x - 2:' + x);
}

// Here x is 10
appDiv.innerHTML = 'x is ' + x;
