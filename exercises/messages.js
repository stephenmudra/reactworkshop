Parse.initialize("JR2O5RqeTUGWpBIiUdKU9cXYNYXFGrW3kVo3dWYu", "lzytKC1QB0lAqNH4Whv9pdq69TEuzW0ZaEVN0lek");

var UserObject = Parse.Object.extend("UserObject");
var MsgObject = Parse.Object.extend("MsgObject");

var User = new UserObject();
if (window.localStorage.getItem('userId')) {
	var query = new Parse.Query(UserObject);
	query.get(window.localStorage.getItem('userId'), {
		success: function (user) {
			User = user;
			User.save();
		}
	});
} else {
	User.save({
		'name': 'User' + parseInt(Math.random() * 1000, 10)
	}, {
		success: function (user) {
			window.localStorage.setItem('userId', user.id);
		}
	});
}

module.exports = {

	setUser: function (object) {
		User.save(object);
	},

	getUsers: function (success) {
		var query = new Parse.Query(UserObject);

		query.ascending("name");

		query.find({
			'success': function (userArray) {
				success(userArray.map(function (row) {
					return row.toJSON();
				}))
			}
		});
	},

	getMessages: function (success) {
		var query = new Parse.Query(MsgObject);

		query.ascending("createdAt");

		query.find({
			'success': function (msgArray) {
				success(msgArray.map(function (row) {
					return row.toJSON();
				}))
			}
		});
	},

	addMessage: function (msg) {
		var msgObj = new MsgObject();
		msgObj.save({
			'user': User.get('name'),
			'message': msg
		})
	}

};
