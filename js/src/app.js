var $calculateBtn  = $('#calculate_btn');
var $currencyInput = $('#currency_input');
var $coinsResults  = $('#coins_result');

var coinsTemplate = Handlebars.compile($('#coins_template').innerHTML);
var errorTemplate = Handlebars.compile($('#error_template').innerHTML);

$calculateBtn.onclick = function() {
    var html;

    var amount = $currencyInput.value;
    var parsedCurrency = validateCurrencyInput(amount);

    if(parsedCurrency.error) {
        html = errorTemplate(parsedCurrency);
    } else {
        html = coinsTemplate({
            coins: countCoins(parsedCurrency)
        });
    }

    $coinsResults.innerHTML = html;
}

$currencyInput.onkeypress = function(e) {
    if(e.keyCode === 13) {
        $calculateBtn.click();
    }
}
