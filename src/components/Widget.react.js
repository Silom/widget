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
			<div className={this.amendThemeClass()} style={this.getFlexboxOrder()}>
				<div className="header">
					<div className="grid-box">
						<span>{widget._id}</span>
					</div>
					<div className="grid-box pull-right">
						<a onClick={this.reorderDec}>
							<i className="icon fa fa-arrow-left"></i>
						</a>
						<a onClick={this.reorderInc}>
							<i className="icon fa fa-arrow-right"></i>
						</a>

						<a onClick={this.delete}>
							<i className="icon fa fa-times"></i>
						</a>
					</div>
				</div>
				<div className="content" dangerouslySetInnerHTML={{__html: widget.meta}} ></div>
			</div>
		)
	},
  delete: function() {
    WidgetAction.destroy(this.props.widget._id)
  },
  update: function() {
		// TODO
    // WidgetAction.update(id, changes)
  },
	reorderDec: function () {
		if (this.props.widget.feature.flexbox.order <= 1)
			WidgetAction.order(this.props.widget._id, 1)
		else
			WidgetAction.order(this.props.widget._id, (this.props.widget.feature.flexbox.order - 1))
	},
	reorderInc: function () {
		WidgetAction.order(this.props.widget._id, (this.props.widget.feature.flexbox.order + 1))
	},
	amendThemeClass: function () {
		return "widget theme-" + (this.props.widget.feature.style.class || 'default')
	},
	getFlexboxOrder: function () {
		return {order: this.props.widget.feature.flexbox.order}
	}
})


module.exports = Widget
