var AppDispatcher = require('../dispatcher/AppDispatcher')
var WidgetConstants = require('../constants/WidgetConstants')

var WidgetAction = {
	create: function(widget) {
		 AppDispatcher.dispatch({
      actionType: WidgetConstants.WIDGET_CREATE,
      payload: widget
    })
	},
	destroy: function(id) {
		 AppDispatcher.dispatch({
      actionType: WidgetConstants.WIDGET_DESTROY,
      id: id
    })
	},
	update: function(widget) {
		 AppDispatcher.dispatch({
      actionType: WidgetConstants.WIDGET_UPDATE,
			payload: widget
    })
	},
	register: function(id, feature) {
		 AppDispatcher.dispatch({
      actionType: WidgetConstants.WIDGET_REGISTER,
			id: id,
			payload: feature
    })
	}
}

module.exports = WidgetAction
