module.exports = {
	capitalizer: function(word) {
		if (!word) {
			return null;
		}
		if (typeof word === 'number') {
			return String(word);
		}
		return word.charAt(0).toUpperCase()+word.substr(1, word.length-1);
	}
}