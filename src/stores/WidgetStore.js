var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/WidgetConstants')
var EventEmitter = require('events').EventEmitter
var morv = require('../utils/morv')
var assign = require('object-assign')

const CHANGE_EVENT = "change"

// Holds all widgets within an array.
// TODO get local storage as initState
let _widgets = []

var metaWidget = {
	_id: Number,
	feature: {
		close: true,
		order: Number //flex order
	},
	meta: {
		content: "html/jsx",
		theme: String
	}
}

function create(pram) {
	return "create: " + pram
}
function update(pram) {
	return "update: " + pram
}
function destroy(pram) {
	return "destroy: " + pram
}


var WidgetStore = assign({}, EventEmitter.prototype, {
	/* Get Widget by its id
	 * @return {object}
	 */
	get: function(id) {
		for (var widget in _widgets) {
			if (id === widget.id)
				return morv.validate(widget)
		}
		return morv.error("No widget found")
	},

	/* Get all Widgets
	 * @return {array}
	 */
	getAll: function() {
		return _widgets
	},

	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
})



AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case AppConstants.WIDGET_CREATE:
      // create(widgetObj)
      create()
      WidgetStore.emitChange()
      break

    case AppConstants.WIDGET_DESTROY:
      // destroy(widgetObj)
      destroy()
      WidgetStore.emitChange()
      break

    case AppConstants.WIDGET_UPDATE:
      // update(widgetObj)
      update()
      WidgetStore.emitChange()
      break

    default:
      // no op
  }
})

module.exports = WidgetStore
