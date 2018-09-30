import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import App from './node_modules/app.jsx';


const greeting = React.createElement('h1',{},'This is where I will put the about me section');
ReactDOM.render(greeting, document.getElementById('app'));
