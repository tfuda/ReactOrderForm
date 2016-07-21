import React from 'react';
import Order from '../containers/order';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="slds">
				<Order />
			</div>
		);
	}
}

