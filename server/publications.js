Meteor.publish("allPickLists", function() {
    return PickLists.find();
});