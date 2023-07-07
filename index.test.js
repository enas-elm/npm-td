const getRandomNumber = require('./index');

test("getRandomNumber returns a int", () => {
    const number = getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
});