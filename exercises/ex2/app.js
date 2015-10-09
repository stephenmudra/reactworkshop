
var React = require('react');
var ReactDom = require('react-dom');

var UserList = require('./userList.js');

var USERS = [
	{userName: 'Bob', online: true},
	{userName: 'Jane', online: false},
	{userName: 'Simon', online: true}
];

ReactDom.render(<UserList users={USERS} />, document.getElementById('app'));
