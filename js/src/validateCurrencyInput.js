var validateCurrencyInput = function(input) {

    // Check if the string is empty
    if(input === '') {
        return 'Please enter an amount';
    }

    // Check if it contains any characters, excluding 'p'
    if(/(?!£|p)[a-z]/ig.test(input)) {
        return 'Please enter an amount in the correct format';
    }

    // Check if it contains no numbers
    if(!/\d/.test(input)) {
        return 'Please enter an amount in the correct format';
    }

    var extractPounds = function(str) {
        var hasPounds = /£|\./.test(str);

        if(hasPounds) {
            str = str.replace(/£|p/g, '').split('.')[0];
            return Math.floor(str) * 100;
        }

        return 0;
    };

    var extractPennies = function(str) {
        var hasPounds  = /£|\./.test(str);

        if(hasPounds) {
            str = str.replace(/£|p/g, '').split('.')[1];
        }

        if(str && hasPounds && str.length > 2) {
            str = Math.ceil(parseInt(str.slice(0, 3), 10) / 10);
        }

        return parseInt(str, 10) || 0;
    };

    return parseInt(extractPounds(input), 10) + parseInt(extractPennies(input), 10);

};
