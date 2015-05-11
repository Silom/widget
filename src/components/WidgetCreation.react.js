var React = require('react')
var WidgetAction = require('../actions/WidgetAction')

var WidgetCreation = React.createClass({
	render: function() {
		return (
			<div id="demo-editor">
			  <div class="tool-section" id="type-form-section">
			    <fieldset>
				    <legend>Types</legend>
						<div>
				      <label for="radio-text">Text:</label>
			        <input name="type" type="radio" value="text" defaultChecked={true} id="radio-text"/>
						</div>
						<div>
				      <label for="radio-list">List:</label>
			        <input name="type" type="radio" value="list" id="radio-list"/>
						</div>
					</fieldset>
			  </div>
				<button onClick={this.create}>Create Widget</button>
			</div>
		)
		// if list make list editor else just text input
		// <div class="tool-section">
	  //   <legend>Type-Contents</legend>
	  //   <textarea type="text" ng-model="widgetcontent"></textarea>
	  // </div>
	},
  create: function() {
    WidgetAction.create({
			meta: document.querySelector('#type-form-section input:checked').value === 'list' ?
			<ul><li>Hello 1</li><li>Hello 2</li></ul> : <p>Some Text</p>,
			feature: {
				close: true,
				flexbox: {
					order: 1
				},
				style: {
					class: "default"
				}
			}
		})
  }
})

module.exports = WidgetCreation
