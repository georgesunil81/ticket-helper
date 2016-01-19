var assert = require('assert');
var MyController = require('../api/MyController');

describe('MyController', function() {
	describe('capitalizer', function() {
		it('should capitalize a word', function() {
			assert.equal('Jones', MyController.capitalizer('jones'));
		});
		it('should have no effect on a word that\'s already capitalized', function() {
			assert.equal('Jones', MyController.capitalizer('Jones'));
		});
		it('should return a stringified number if passed a number', function() {
			assert.equal(typeof '2424', typeof MyController.capitalizer(2424));
			assert.equal('2424', MyController.capitalizer(2424));
		});
		it('should return null if passed a null value', function() {
			assert.equal(null, MyController.capitalizer(null));
		});
	});
});