/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
*/

// Importing the necessary modules from the updated locations
import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import location
import App from './App'; // Make sure the path is correct

// Identifying the root element in the DOM
const rootElement = document.getElementById('root');

// Checking if the root element is available
if (rootElement) {
  // Creating a root and rendering the App component inside of it
  createRoot(rootElement).render(<App />); // Using the imported createRoot directly
} else {
  // Error handling in case there is no element with ID 'root'
  console.error('No root element found! Please ensure your HTML file has a div with an id of "root".');
}

