var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/WidgetConstants')
var EventEmitter = require('events').EventEmitter
var morv = require('../utils/morv')
var assign = require('object-assign')
var localforge = require('localforage')

const CHANGE_EVENT = "change"
const STORAGE_KEY = "widgets"

let _widgets = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
let _feature = []

function saveToLocalStorage() {
	for (var widgetObj in _widgets) {
		delete widgetObj.ext
	}
	localStorage.setItem(STORAGE_KEY, JSON.stringify(_widgets))
}

function create(widget, id) {
	widget._id = id || (+new Date() + Math.floor(Math.random() * 999999)).toString(36)

	_widgets[widget._id] = widget

	saveToLocalStorage()
	return widget
}

function update(id, update) {
	_widgets[id] = update
	saveToLocalStorage()
	return _widgets[id]
}

function destroy(id) {
	delete _widgets[id]
	saveToLocalStorage()
	return id
}

function register(id, payload) {
	_feature[id] = payload
}

var WidgetStore = assign({}, EventEmitter.prototype, {
	/* Get Widget by its id
	 * @return {object}
	 */
	get: function(id) {
		return _widgets[id]
	},

	/* Get all Widgets
	 * @return {array}
	 */
	getAll: function() {
		for (var widgetKey in _widgets) {
			for (var key in _widgets[widgetKey].feature) {
			  if (_widgets[widgetKey].feature.hasOwnProperty(key) && _feature[key]) {
					_widgets[widgetKey].ext = {}
					// merge feature and data objekt and write them to ext
					_widgets[widgetKey].ext[key] = assign({}, _feature[key], _widgets[widgetKey].feature[key])
			  }
			}
		}

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
      update(action.payload._id, action.payload)
      WidgetStore.emitChange()
      break

    case AppConstants.WIDGET_REGISTER:
      register(action.id, action.payload)
      WidgetStore.emitChange()
      break

    default:
      // no op
  }
})

module.exports = WidgetStore
