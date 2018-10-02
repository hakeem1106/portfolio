import React from '/react.production.min.js';
import ReactDOM from '/react-dom.production.min.js';

function pageBuilding(){
    window.onload = function(){
        class MadeIt extends React.Component{
            render(){
                return React.createElement('h1', null, 'MadeIt')
            }
        }
    }
    ReactDOM.render(
            React.createElement(MadeIt),
            document.getElementById('root')

            );
};
