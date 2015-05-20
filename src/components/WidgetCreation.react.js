var React = require('react')
var WidgetAction = require('../actions/WidgetAction')

var WidgetCreation = React.createClass({
	render: function() {
		return (
			<div id="demo-editor">
			  <div className="tool-section" id="type-form-section">
			    <fieldset>
				    <legend>Types</legend>
						<div>
				      <label>Text:</label>
			        <input name="type" type="radio" value="text" defaultChecked={true}/>
						</div>
						<div>
				      <label>List:</label>
			        <input name="type" type="radio" value="list"/>
						</div>
					</fieldset>
			  </div>

			  <div className="tool-section" id="style-form-section">
			    <fieldset>
				    <legend>Styles</legend>
						<div>
				      <label>Default:</label>
			        <input name="style" type="radio" value="default" defaultChecked={true}/>
						</div>
						<div>
				      <label>Red:</label>
			        <input name="style" type="radio" value="red"/>
						</div>
					</fieldset>
			  </div>

				<div className="tool-section-end">
					<button onClick={this.create}>Create Widget</button>
				</div>
			</div>
		)
	},
  create: function() {
		// Static templates for pre defined widgets (List and Textbox)
		var listJsx = "<div><h4>User List</h4><ul><li>Albert Muster</li><li>Emil Dante</li><li>Shara Boje</li></ul></div>"
		var textJsx = "<div><h4>Info Panel</h4><p>Reminder text for you. :)</p></div>"

    WidgetAction.create({
			meta: document.querySelector('#type-form-section input:checked').value === 'list' ? listJsx : textJsx,
			feature: {
				close: {},
				flexbox: {
					order: 1
				},
				style: {
					class: document.querySelector('#style-form-section input:checked').value
				}
			}
		})
  }
})

module.exports = WidgetCreation
