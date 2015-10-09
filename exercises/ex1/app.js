
var React = require('react');
var ReactDom = require('react-dom');

var TITLE = "Welcome";
var NAMES = ['Mandy Michael','Dan Barrett', 'Josh Josh Allen', 'Phuong Huynh'];

var HelloWorld = React.createClass({
	render: function() {
		return null;
	}
});


ReactDom.render(<HelloWorld />, document.getElementById('app'));
