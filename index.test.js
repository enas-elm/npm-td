const getAPI = require('./index');

test("returns array", async () => {
    const fetchData = await getAPI();
    expect(fetchData).not.toBeNull();
    expect(fetchData).toBeInstanceOf(Array);
});