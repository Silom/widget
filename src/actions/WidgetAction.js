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
	update: function(id, update) {
		 AppDispatcher.dispatch({
      actionType: WidgetConstants.WIDGET_UPDATE,
      id: id,
			payload: update
    })
	}
}

module.exports = WidgetAction
