var countCoins = function(amount) {

    // The coins that we want to sort by
    // The format is `penny value:name`
    var coins = {
        '200': '£2',
        '100': '£1',
        '50': '50p',
        '20': '20p',
        '2': '2p',
        '1': '1p'
    };

    // Turn the keys from our `coins` object in to integers and sort them from highest to lowest
    var pennies = Object.keys(coins).map(function(key) {
        return parseInt(key, 10);
    }).sort(function(a, b) {
        return a === b ? 0 : (a < b ? 1 : -1);
    });

    // Create an empty object where we'll store the coins that are needed
    var output = {};

    // Loop through each of the coins
    pennies.forEach(function(val) {
        var coin = coins[val];

        if (val > amount) {
            output[coin] = 0;
            return;
        }

        // Find the lowest number of times that the coin can be taken out of the full amount
        var divisableBy = Math.floor(amount / val);

        // Set the number of types that coin is needed
        output[coin] = divisableBy;

        // Remove that total from the amount we had before
        amount -= val * divisableBy;
    });

    return output;

};
