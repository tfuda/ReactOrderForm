import React from 'react';
import {FormattedNumber} from 'react-intl';

class ItemTable extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<tr>
				<td scope="row">
					<button className="slds-button slds-button--icon" onClick={this.props.onClick}>
						<svg aria-hidden="true" className="slds-button__icon">
							<use xlinkHref="../node_modules/@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg#remove"></use>
						</svg>
						<span className="slds-assistive-text">Delete Item</span>
					</button>
				</td>
				<td scope="row">
					<div className="slds-truncate">{this.props.item.name}</div>
				</td>
				<td>
					<div className="slds-truncate">{this.props.item.description}</div>
				</td>
				<td>
					<div className="slds-truncate">{this.props.item.quantity}</div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.unitPrice} style="currency" currency="USD" currencyDisplay="symbol" /></div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.unitFee} style="currency" currency="USD" currencyDisplay="symbol" /></div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.subtotal} style="currency" currency="USD" currencyDisplay="symbol" /></div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.discount} style="currency" currency="USD" currencyDisplay="symbol" /></div>
				</td>
				<td>
					<div className="slds-truncate"><FormattedNumber value={this.props.item.total} style="currency" currency="USD" currencyDisplay="symbol" /></div>
				</td>
			</tr>
		);
	}
}
ItemTable.propTypes = {
	item: React.PropTypes.object.isRequired,
	onClick: React.PropTypes.func.isRequired
}
export default ItemTable
