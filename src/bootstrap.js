var WidgetAction = require('./actions/WidgetAction')

WidgetAction.register('flexbox', {
	order: Number,
	dec: function (that) {
		if (that.props.widget.feature.flexbox.order <= 1) {
			that.props.widget.feature.flexbox.order = 1
			WidgetAction.update(that.props.widget)
		} else {
			that.props.widget.feature.flexbox.order -= 1
			WidgetAction.update(that.props.widget)
		}
	},
	inc: function (that) {
		that.props.widget.feature.flexbox.order += 1
		WidgetAction.update(that.props.widget)
	}
})

module.exports = true
