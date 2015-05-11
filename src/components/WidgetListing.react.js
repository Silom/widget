var React = require('react')
var PropTypes = React.PropTypes
var WidgetStore = require('../stores/WidgetStore')
var WidgetAction = require('../actions/WidgetAction')


var WidgetListing = React.createClass({
	propTypes: {
    allWidgets: PropTypes.object.isRequired
  },
	render: function() {
    if (Object.keys(this.props.allWidgets).length < 1)
      return null

    var allWidgets = this.props.allWidgets
    var widgets = []


    // Push Widgets to the list
    for (var key in allWidgets) {
      widgets.push(
        <div className="widget theme-default">
          <div className="header">
            <div className="grid-box">
              <span>{allWidgets[key]._id}</span>
            </div>
            <div className="grid-box pull-right">
							<a href="#">
								<i className="icon fa fa-cog"></i>
							</a>
            </div>
          </div>
          <div className="content">
            {allWidgets[key].meta}
          </div>
        </div>
      )
    }

    return (
			<div className="flexbox center demo-container">{widgets}</div>
    )
	},
  delete: function(id) {
    WidgetAction.destroy(id)
  },
  update: function(id, changes) {
    WidgetAction.update(id, changes)
  }
})


module.exports = WidgetListing
