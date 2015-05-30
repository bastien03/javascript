describe('Test suite for the syntax module: ', function() {
	var module;
	
	beforeEach(function() {
		module = syntaxModule();
	});

	it('- block scoped declarations', function() {
		expect(module.letDeclarations(6,6)).toEqual({ param1: 6, param2: 1 });
	});

	it('- const declarations', function() {
		expect(module.getConstant()).toEqual('');
	});
});