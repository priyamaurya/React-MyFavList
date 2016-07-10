var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To DO" headingColor ="#c34512"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas" headingColor ="#b31217" />, document.getElementById('christmas'));
