import React from 'react';
import ReactDOM from 'react-dom';

newFunction();

function newFunction() {
    class App {
    }
    () => {
        return (<div className="App">
            <h1> React Works</h1>
        </div>);
    };
    const rootElement = document.getElementById('root');
    ReactDOM.render(<App />, rootElement);
}
