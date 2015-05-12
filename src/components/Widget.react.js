var React = require('react')
var PropTypes = React.PropTypes
var WidgetStore = require('../stores/WidgetStore')
var WidgetAction = require('../actions/WidgetAction')


var Widget = React.createClass({
	propTypes: {
    widget: PropTypes.object.isRequired
  },
	render: function() {

    var widget = this.props.widget

    return (
			<div className="widget theme-default">
				<div className="header">
					<div className="grid-box">
						<span>{widget._id}</span>
					</div>
					<div className="grid-box pull-right">
						<a onClick={this.delete}>
							<i className="icon fa fa-times"></i>
						</a>
					</div>
				</div>
				<div className="content">{widget.meta}</div>
			</div>
		)
	},
  delete: function() {
    WidgetAction.destroy(this.props.widget._id)
  },
  update: function() {
		// TODO
    // WidgetAction.update(id, changes)
  }
})


module.exports = Widget
