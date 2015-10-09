
var React = require('react');

var messages = require('../messages.js');

var MessageInput = React.createClass({

	getInitialState: function () {
	    return {
	    	message: ''
		};
	},

  	render: function() {
    	return <div className="messageInput">
    		<input ref="message" value={this.state.message} />
    		<button>Send</button>
    	</div>;
  	}
});

module.exports = MessageInput;
