
var React = require('react');

var messages = require('../messages.js');
/*messages.getMessages(function (msgArray) {
	console.log(msgArray);
});*/

module.exports = React.createClass({

	getInitialState: function () {
	    return {
	    	messages: []
		};
	},

	componentWillMount: function () {

	},

	componentDidMount: function () {

	},

	componentWillUpdate: function (nextProps, nextState) {

	},

	componentDidUpdate: function (prevProps, prevState) {

	},

	componentWillUnmount: function () {

	},

  	render: function() {
    	return <div>
    		{this.state.messages.map(function (msg) {
    			return <div><strong>{msg.user}</strong> {msg.message}</div>;
    		})}
    	</div>;
  	}
});
