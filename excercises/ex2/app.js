var React = require('react');

var UserList = require('./userList.js');

var USERS = [
	{userName: 'Bob', online: true},
	{userName: 'Jane', online: false},
	{userName: 'Simon', online: true}
];

React.render(<UserList users={USERS} />, document.body);
