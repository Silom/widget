'use strict';

var React = require('react');
var WidgetApp = require('./components/App.react');


// Render Widgets and a toolbar for widget creation (the logic comes from the widget lib)
// (TODO move the app to a node package after it is ready for build)
React.render(
	<WidgetApp />,
	document.getElementById("appcontainer")
)
