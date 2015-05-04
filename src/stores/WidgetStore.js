var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/WidgetConstants')
var morv = require('../utils/morv')

const CHANGE_EVENT = "change"

// Holds all widgets within an array.
let _widgets = []


function create() {}
function update() {}
function destroy() {}



var WidgetStore = assign({}, EventEmitter.prototype, {
	/* Get Widget by its id
	 * @return {object}
	 */
	get: function(id) {
		for (var widget in _widgets) {
			if (id = widget.id)
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
      // if (text !== '') {
      create(widgetObj);
      WidgetStore.emitChange();
      // }
      break;

    case AppConstants.WIDGET_DESTROY:
      destroy(widgetObj);
      WidgetStore.emitChange();
      break;

    case AppConstants.WIDGET_UPDATE:
      update(widgetObj);
      WidgetStore.emitChange();
      break;

    default:
      // no op
  }
})

module.exports = WidgetStore
