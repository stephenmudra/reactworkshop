
var React = require('react');

var messages = require('../messages.js');

var MessageList = React.createClass({

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
    	return <div className="messageList">
    		{this.state.messages.map(function (msg) {
    			return <div key={msg.objectId}><strong>{msg.user}</strong> {msg.message}</div>;
    		})}
    	</div>;
  	}
});

module.exports = MessageList;
