Put it all together

Task:
Include all the other components to make a fully functioning application

Now we have a working application, we need to clean up our components.
1) Use messsages.getUsers(callback) to populate the users list
2) Shift the polling logic from the MessageList into the Main app component (Pass the list via a prop)
3) Shift the send message logic from the MessageInput Component and pass in a handler function to the component