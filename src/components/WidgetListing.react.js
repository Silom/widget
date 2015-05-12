var React = require('react')
var PropTypes = React.PropTypes

var Widget = require('./Widget.react')

var WidgetListing = React.createClass({
	propTypes: {
    allWidgets: PropTypes.array.isRequired
  },
	render: function() {
    if (Object.keys(this.props.allWidgets).length < 1)
      return null

    var allWidgets = this.props.allWidgets
    var widgets = []

    // Push Widgets to the list
    for (var key in allWidgets) {
      widgets.push(<Widget widget={allWidgets[key]} key={allWidgets[key]._id} />)
    }

    return (
			<div className="flexbox center demo-container">{widgets}</div>
    )
	}
})


module.exports = WidgetListing
