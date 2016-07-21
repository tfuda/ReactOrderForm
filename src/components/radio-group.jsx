import React from 'react';
import RadioOption from './radio-option';
class RadioGroup extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let radioOptions = this.props.radioOptions.map(function (radioOption) {
			return (
				<RadioOption key={radioOption.value} name={this.props.groupName}
				             value={radioOption.value} label={radioOption.label}
				             selectedOption={this.props.selectedOption}
				             onChange={()=>{this.props.onRadioOptionChange(radioOption.value)}}/>
			);
		}, this);
		return (
			<fieldset className="slds-form-element">
				<legend className="slds-form-element__legend slds-form-element__label">{this.props.legend}</legend>
				<div className="slds-form-element__control">
					<div className="slds-radio--button-group">
						{radioOptions}
					</div>
				</div>
			</fieldset>
		);
	}
}
RadioGroup.propTypes = {
	radioOptions: React.PropTypes.array.isRequired,
	groupName: React.PropTypes.string.isRequired,
	legend: React.PropTypes.string,
	onRadioOptionChange: React.PropTypes.func.isRequired,
	selectedOption: React.PropTypes.string.isRequired
}
RadioGroup.defaultProps = {legend: ''};
export default RadioGroup;
