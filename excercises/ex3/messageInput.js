
var React = require('react');

var messages = require('../messages.js');
// messages.addMessage('msg');

module.exports = React.createClass({

	getInitialState: function () {
	    return {
	    	message: ''
		};
	},

	clearState: function () {

	},

	inputChange: function () {

	},

  	render: function() {
    	return <div>
    		<input value={this.state.message} />
    		<button />
    	</div>;
  	}
});
