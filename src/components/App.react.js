var React = require('react')
var WidgetStore = require('../stores/WidgetStore')

var WidgetCreation = require('./WidgetCreation.react')
var WidgetListing = require('./WidgetListing.react')


function getWidgetState() {
	return {
		widgets: WidgetStore.getAll()
	}
}

var WidgetApp = React.createClass({
	getInitialState: function() {
		return getWidgetState()
	},
	componentDidMount: function() {
    WidgetStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    WidgetStore.removeChangeListener(this._onChange);
  },
	render: function() {
		return (
      <div>
    		<WidgetCreation />
    		<WidgetListing allWidgets={this.state.widgets} />
      </div>
		)
	},
  _onChange: function() {
    this.setState(getWidgetState())
  }
})


module.exports = WidgetApp
