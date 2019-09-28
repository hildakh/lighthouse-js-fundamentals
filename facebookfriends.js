let facebookProfile = {
    name: "Hilda",
    friends: 352,
    messages: ["sth about global warming", "The latest books to read"],
    postMessage: function(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
        facebookProfile.friends += 1;
    },
    removeFriend: function() {
        facebookProfile.friends -= 1;
    }
};