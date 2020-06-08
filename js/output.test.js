const { calculateEntitlement } = require('./output');

test('returns entitlement days 27', () => {
    const startDate = new Date(Date.UTC(2019, 3, 1));
    const endDate = new Date(Date.UTC(2020, 2, 31))
    const fte = 1;
    const baseEntitlement = 27;

    expect(calculateEntitlement(startDate, endDate, fte, baseEntitlement)).toBe(27);
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });