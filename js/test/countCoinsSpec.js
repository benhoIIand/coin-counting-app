describe('Given an amount of pennies', function() {

    describe('When they are sorted with the amount of 375', function() {

        var coins = countCoins('375');

        it('Should return 1 £2 coins', function() {
            expect(coins['£2']).toEqual(1);
        });

        it('Should return 1 £1 coins', function() {
            expect(coins['£1']).toEqual(1);
        });

        it('Should return 1 50p coins', function() {
            expect(coins['50p']).toEqual(1);
        });

        it('Should return 1 20p coins', function() {
            expect(coins['20p']).toEqual(1);
        });

        it('Should return 2 2p coins', function() {
            expect(coins['2p']).toEqual(2);
        });

        it('Should return 1 1p coins', function() {
            expect(coins['1p']).toEqual(1);
        });

    });

});
