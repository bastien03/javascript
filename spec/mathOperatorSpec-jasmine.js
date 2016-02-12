describe("A suite", function() {
	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
		expect({x: 1, y: {a: 2}}).toEqual({x:1, y: {a: 2}});
        expect([1,2,3,4]).toEqual([1,2,3,4]);
	});
});