import React from 'react';
import WidgetCreation from './WidgetCreation.react';
import WidgetListing from './WidgetListing.react';
import WidgetStore from '../stores/WidgetStore';

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
			- image
*/

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the WidgetStore and passes the new data to its children.
 */


/**
 * Retrieve the current TODO data from the TodoStore
 */
function getWidgetState() {
  return {
    allWidgets: WidgetStore.getAll()
    // areAllComplete: WidgetStore.areAllComplete()
  }
}




var WidgetApp = React.createClass({
	render() {
		return (
			<div>
				<WidgetCreation />
				<WidgetListing />
			</div>
		)
	}
})
// var DemoApp = React.createClass({
// 	getInitialState() {
// 		return {
// 			count: demoStore.getCount()
// 		};
// 	},
// 	componentDidMount(){
// 		demoStore.addChangeListener(this._onChange);
// 	},
// 	componentWillUnmount(){
// 		demoStore.removeChangeListener(this._onChange);
// 	},
// 	render() {
// 		return (
// 		  <div>
// 	      	<Header />
// 	      	<Content count={this.state.count}/>
// 	      </div>
// 	    )
// 	},
// 	_onChange(){
// 		this.setState({
// 			count: demoStore.getCount()
// 		});
// 	}
// });

export default WidgetApp;
