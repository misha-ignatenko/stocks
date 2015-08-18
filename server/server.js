if (Meteor.isServer) {



    //Meteor.startup(function () {
    //    var dataToInsertIntoRatingChanges = [];
    //    _.once(function() {
    //        dataToInsertIntoRatingChanges = [
    //            {},
    //            {},
    //            {},
    //            {},
    //            {}
    //        ];
    //    });
    //
    //    dataToInsertIntoRatingChanges.forEach(function(ratingChangeInstance) {
    //        RatingChanges.insert();
    //    });
    //});

    Meteor.methods({
        getQuote: function( stockname ) {
            console.log("getQuote method was called.");
            return YahooFinance.snapshot({symbols: [stockname] });
        }
    });
    //console.log(Meteor.call('getQuote', 'AAPL'));
}

Meteor.startup(function () {
    //var _fin = YahooFinance.snapshot({symbols: [stockname] , fields:['n','a','b','j2'] });

    var stockname = 'AAPL';
    var _fin = YahooFinance.snapshot({symbols: [stockname]});
    //console.log(_fin);
});