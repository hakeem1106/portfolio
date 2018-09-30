import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app.jsx';



const greeting = React.createElement('h1',{},'This is where I will put the about me section');
ReactDOM.render(greeting, document.getElementById('root'));
