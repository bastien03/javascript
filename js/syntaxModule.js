'use strict';

function syntaxModule() {
	const MODULE_NAME = 'syntaxModule';
	console.log('loading ' + MODULE_NAME + '...');

	function letDeclarations(param1, param2) {
		{
			let param1 = 1;
			param2 = 1;
		}
		return {param1, param2};
	}

	function getConstant() {
		MODULE_NAME += 'xxx';
		return MODULE_NAME;
	}

	return {
		letDeclarations,
		getConstant 
	}
};