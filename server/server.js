if (Meteor.isServer) {

    Meteor.methods({
        getQuote: function( stockname ) {
            console.log("getQuote method was called.");
            return YahooFinance.snapshot({symbols: [stockname] });
        }
    });

}