import React from 'react';
import StateSelect from './state-select';

export default class AddressInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// Generate camelCased DOM Ids
		const streetId = this.getDomId(this.props.addressType, 'Street');
		const cityId = this.getDomId(this.props.addressType, 'City');
		const stateId = this.getDomId(this.props.addressType, 'State');
		const postalCodeId = this.getDomId(this.props.addressType, 'PostalCode');
		return(
			<fieldset className="slds-form--compound">
				<legend className="slds-form-element__label">{this.props.addressType} Address</legend>
				<div className="form-element__group">
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-1">
							<label className="slds-form-element__label" htmlFor={streetId}>Street</label>
							<input id={streetId} className="slds-input" type="text" onChange={this.props.onInputChange} value={this.props.street} />
						</div>
					</div>
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-2">
							<label className="slds-form-element__label" htmlFor={cityId}>City</label>
							<input id={cityId} className="slds-input" type="text" onChange={this.props.onInputChange} value={this.props.city} />
						</div>
						<div className="slds-form-element slds-size--1-of-2">
							<StateSelect selectedState={this.props.state || ''} label='State' stateElementId={stateId} size='1' onChange={this.props.onInputChange} />
						</div>
					</div>
					<div className="slds-form-element__row">
						<div className="slds-form-element slds-size--1-of-2">
							<label className="slds-form-element__label" htmlFor={postalCodeId}>Postal Code</label>
							<input id={postalCodeId} className="slds-input" type="text" onChange={this.props.onInputChange} value={this.props.postalCode} />
						</div>
						<div className="slds-form-element slds-size--1-of-2"></div>
					</div>
				</div>
			</fieldset>
		);
	}
	getDomId(type : string, field : string) {
		var theString = type + field;
		return this.camelize(theString);
	}
	camelize(str: string) {
		return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
			if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
			return index == 0 ? match.toLowerCase() : match.toUpperCase();
		});
	}
}
AddressInput.propTypes = {
	addressType: React.PropTypes.string,
	street: React.PropTypes.string,
	city: React.PropTypes.string,
	postalCode: React.PropTypes.string,
	onInputChange: React.PropTypes.func.isRequired
}
AddressInput.defaultProps = { addressType: '' }
