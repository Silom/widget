var React = require('react')
var WidgetStore = require('../stores/WidgetStore')
var WidgetAction = require('../actions/WidgetAction')

// import WidgetCreation from './WidgetCreation.react';
// import WidgetListing from './WidgetListing.react';



/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the WidgetStore and passes the new data to its children.
 */

function getWidgetState() {
  return {
    allWidgets: WidgetStore.getAll()
  }
}


var WidgetApp = React.createClass({
	getInitialState: function() {
		return {
			widgets: WidgetStore.getAll()
		}
	},
	render: function() {
		// <WidgetCreation />
		// <WidgetListing />
		return (
			<div>
        <button onClick={this.create}>create</button>
        <button onClick={this.delete}>delete</button>
        <button onClick={this.update}>update</button>
			</div>
		)
	},
  create: function() {
    WidgetAction.create("create")
  },
  delete: function() {
    WidgetAction.destroy("destroy")
  },
  update: function() {
    WidgetAction.update("update")
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


module.exports = WidgetApp
