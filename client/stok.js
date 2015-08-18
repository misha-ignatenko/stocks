Template.pick_list.onCreated(function() {
    this.subscribe("allPickLists");
});

Template.pick_list.helpers({
    pickLists: function () {
        return PickLists.find();
    }
});

Template.pick_list.events({
    "click .updatePickListPrices": function() {
        var _allPicklists = PickLists.find().fetch();
        _allPicklists.forEach(function(pickList) {
            Meteor.call('getQuote', pickList.symbol, function(err, result) {
                var _quote = result;
                console.log("_quote is: ", _quote);
                var _symbol = pickList.symbol;
                var _ask = _quote[_symbol].ask;
                PickLists.update({_id: pickList._id}, {$set: {ask: _ask, lastUpdated: new Date()}});
            });
        });
    }
});