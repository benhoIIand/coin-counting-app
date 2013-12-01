describe('Given an amount to validate', function() {

    describe('When passed a string in a valid format', function() {

        it('should successfully parse a single digit', function() {
            expect(validateCurrencyInput('4')).toEqual(4);
        });

        it('should successfully parse a double digit', function() {
            expect(validateCurrencyInput('85')).toEqual(85);
        });

        it('should successfully parse a single digit pence symbol', function() {
            expect(validateCurrencyInput('2p')).toEqual(2);
        });

        it('should successfully parse a pence symbol', function() {
            expect(validateCurrencyInput('197p')).toEqual(197);
        });

        it('should successfully parse a decimal point into pounds', function() {
            expect(validateCurrencyInput('1.87')).toEqual(187);
        });

        it('should successfully parse a pound symbol', function() {
            expect(validateCurrencyInput('£1.23')).toEqual(123);
        });

        it('should successfully parse a single digit pound symbol', function() {
            expect(validateCurrencyInput('£2')).toEqual(200);
        });

        it('should successfully parse a double digit pound symbol', function() {
            expect(validateCurrencyInput('£10')).toEqual(1000);
        });

        it('should successfully parse a pound and pence symbol', function() {
            expect(validateCurrencyInput('£1.87')).toEqual(187);
        });

        it('should successfully parse a missing pence value', function() {
            expect(validateCurrencyInput('£1p')).toEqual(100);
        });

        it('should successfully parse a missing pence value but present decimal', function() {
            expect(validateCurrencyInput('£1.p')).toEqual(100);
        });

        it('should successfully parse a value with buffered zeros', function() {
            expect(validateCurrencyInput('001.41p')).toEqual(141);
        });

        it('should successfully parse a value by rounding three decimal places to two', function() {
            expect(validateCurrencyInput('4.235p')).toEqual(424);
        });

        it('should successfully parse a value with symbols and round it', function() {
            expect(validateCurrencyInput('£1.257422457p')).toEqual(126);
        });

    });

    describe('When passed an invalid format', function() {

        describe('should return an error message when given', function() {

            it('an empty string', function() {
                expect(validateCurrencyInput('')).toEqual('Please enter an amount');
            });

            it('a non-numeric character', function() {
                expect(validateCurrencyInput('1x')).toEqual('Please enter an amount in the correct format');
                expect(validateCurrencyInput('£1x.0p')).toEqual('Please enter an amount in the correct format');
            });

            it('a string with missing digits', function() {
                expect(validateCurrencyInput('£p')).toEqual('Please enter an amount in the correct format');
            });
        });

    });

});
