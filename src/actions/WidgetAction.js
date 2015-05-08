var AppDispatcher = require('../dispatcher/AppDispatcher')
var WidgetConstants = require('../constants/WidgetConstants')

var WidgetAction = {
	create: function(widget) {
		 AppDispatcher.dispatch({
      actionType: WidgetConstants.WIDGET_CREATE,
      text: "test create"
    })
	},
	destroy: function(widget) {
		 AppDispatcher.dispatch({
      actionType: WidgetConstants.WIDGET_DESTROY,
      text: "test destroy"
    })

	},
	update: function(widget, update) {
		 AppDispatcher.dispatch({
      actionType: WidgetConstants.WIDGET_UPDATE,
      text: "test update"
    })
	}
}

module.exports = WidgetAction
