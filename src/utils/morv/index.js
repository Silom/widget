//meta-object-return-value
module.exports = {
	validate: function(value, validater) {
		return {
			err: false,
			value: value
		}
	},
	error: function (message) {
		return {
			err: true,
			massage: massage
		}
	}
}
