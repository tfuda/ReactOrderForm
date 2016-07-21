import React from 'react';
class SelectElement extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let selectOptions = this.props.selectOptions.map(function (option) {
			return <option key={option.value} value={option.value}>{option.label}</option>;
		});
		return (
			<div className="slds-form-element">
				<label className="slds-form-element__label" htmlFor={this.props.domId}>{this.props.label}</label>
				<div className="slds-form-element__control">
					<div className="slds-select_container">
						<select id={this.props.domId} className="slds-select" size={this.props.size}
						        onChange={this.props.onChange} value={this.props.selectValue}>
							<option value='' disabled>Select...</option>
							{selectOptions}
						</select>
					</div>
				</div>
			</div>
		);
	}
}
SelectElement.propTypes = {
	selectOptions: React.PropTypes.array.isRequired,
	selectValue: React.PropTypes.string,
	domId: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	size: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired
}
SelectElement.defaultProps = {size: '1', selectValue: ''}
export default SelectElement
