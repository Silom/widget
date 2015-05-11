var React = require('react')
var WidgetStore = require('../stores/WidgetStore')
var WidgetAction = require('../actions/WidgetAction')

var WidgetCreation = require('./WidgetCreation.react')
var WidgetListing = require('./WidgetListing.react')


var WidgetApp = React.createClass({
	getInitialState: function() {
		return {
			widgets: WidgetStore.getAll()
		}
	},
	render: function() {
		return (
      <div>
    		<WidgetCreation />
    		<WidgetListing />
      </div>
		)
	}
})


module.exports = WidgetApp
