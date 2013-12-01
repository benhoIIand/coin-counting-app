var validateCurrencyInput = function(input) {

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
