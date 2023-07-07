const getAPI = require('./index');

test("returns array", () => {
    const number = getAPI();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
});