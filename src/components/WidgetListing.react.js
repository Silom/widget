var React = require('react')
var WidgetStore = require('../stores/WidgetStore')
var WidgetAction = require('../actions/WidgetAction')


function getWidgetState() {
  return {
    allWidgets: WidgetStore.getAll()
  }
}


var WidgetListing = React.createClass({
	getInitialState: function() {
		return {
			widgets: WidgetStore.getAll()
		}
	},
	render: function() {
		return (
  		<div>Widget render loop</div>
		)
	},
  delete: function(id) {
    WidgetAction.destroy(id)
  },
  update: function(id, changes) {
    WidgetAction.update(id, changes)
  },

	componentDidMount: function() {
		WidgetStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		WidgetStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState({
			widgets: WidgetStore.getAll()
		})
	}
})


module.exports = WidgetListing
