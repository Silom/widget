'use strict';

import React from "react";
//import Widget from "./widget";

var WidgetApp = React.createClass({
	displayName: 'WidgetApp',
	render: function () {
		return (
			<ul>
				<li>Widget</li>
			</ul>
		)
	}
})


var WidgetTools = React.createClass({
	displayName: 'WidgetTools',
	render: function () {
		return require('./tools.jsx')(React)
	}
})

// Render Widgets
React.render(
	<WidgetApp />,
	document.getElementById("appcontainer")
)

// Render Toolbar (for create Widget operations)
React.render(
	<WidgetTools />,
	document.getElementById("toolcontainer")
)


/*

Toolbar
	- Add Widget button (adds empty widget element)

WidgetApp
	* Widgets
		Tools (either toolbar or rightclick menu, change everything here)
			- Delete
			- Order (Flexbox)
			- Edit content (to list or whatever)
			- Content source (editor or net-src) (for presentations I should use static objects for now)
		Content
			- Graph
			- List
			- Text



*/
