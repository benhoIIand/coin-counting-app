var countCoins = function(amount) {

    var coins = {
        '200': '£2',
        '100': '£1',
        '50': '50p',
        '20': '20p',
        '2': '2p',
        '1': '1p'
    };

    var pennies = Object.keys(coins).map(function(key) {
        return parseInt(key, 10);
    }).sort(function(a, b) {
        return a === b ? 0 : (a < b ? 1 : -1);
    });

    var output = {};

    pennies.forEach(function(val) {
        var coin = coins[val];

        if (val > amount) {
            output[coin] = 0;
            return;
        }

        var howMany = Math.floor(amount / val);

        output[coin] = howMany;

        amount -= val * howMany;
    });

    return output;

};
