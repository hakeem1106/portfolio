// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// Render component into the DOM - only once per app

class Greeting extends React.Component {
    render() {
        return (<p>Hello world</p>);
    }
};

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);
