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
		close: Boolean,
		style: {class: String},
		flexbox: {order: Number}
	},
	meta: String
}

function create(widget) {
	widget._id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)

	_widgets[widget._id] = widget

	return widget
}

function update(id, update) {
	_widgets[id] = assign({}, _widgets[id], update)
	return _widgets[id]
}
// FIXME get it working with the update function only
function updateOrder(id, order) {
	console.log(order)
	_widgets[id].feature.flexbox.order = order
}

function destroy(id) {
	delete _widgets[id]
	return id
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
      create(action.payload)
      WidgetStore.emitChange()
      break

    case AppConstants.WIDGET_DESTROY:
      destroy(action.id)
      WidgetStore.emitChange()
      break

    case AppConstants.WIDGET_UPDATE:
      // update()
      WidgetStore.emitChange()
      break

    case AppConstants.WIDGET_ORDER:
      updateOrder(action.id, action.payload)
      WidgetStore.emitChange()
      break

    default:
      // no op
  }
})

module.exports = WidgetStore
