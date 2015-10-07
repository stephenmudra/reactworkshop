
Parse.initialize("JR2O5RqeTUGWpBIiUdKU9cXYNYXFGrW3kVo3dWYu", "lzytKC1QB0lAqNH4Whv9pdq69TEuzW0ZaEVN0lek");

var UserObject = Parse.Object.extend("UserObject");
var MsgObject = Parse.Object.extend("MsgObject");

var User = new UserObject();
if (window.localStorage.getItem('userId')) {
	var query = new Parse.Query(UserObject);
	query.get(window.localStorage.getItem('userId'), {
	  success: function(user) {
	    User = user;
	  }
	});
} else {
	User.set('name', 'User' + Math.random())
	User.save(null, {
	  success: function(user) {
	    window.localStorage.setItem('userId', user.id);
	  }
	});
}

module.exports = {

	getMessages: function (success) {
		var query = new Parse.Query(MsgObject);

		query.descending("createdAt");
		query.limit(10);

		query.find({
		  'success': success
		});
	},

	addMessage: function (msg) {
		var msgObj = new MsgObject();
		msgObj.save({
			'user': User.get('name'),
			'message': msg
		})
	}

}