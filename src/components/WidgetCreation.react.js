var React = require('react')
var WidgetStore = require('../stores/WidgetStore')
var WidgetAction = require('../actions/WidgetAction')
var Props = React.PropTypes

var WidgetCreation = React.createClass({
  // propTypes: {
  //  todo: ReactPropTypes.object.isRequired
  // },
	render: function() {
		return (
      <div>
        <p>Create a Widget</p>
        <button onClick={this.create}>create</button>
      </div>
		)
	},
  create: function() {
    WidgetAction.create({
    	feature: {
    		close: true,
    		order: 1
    	},
    	meta: {
    		content: "html/jsx",
    		theme: "default"
    	}
    })
  }
})


module.exports = WidgetCreation
