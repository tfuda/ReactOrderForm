import React from 'react';
class RadioOption extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<label className="slds-button slds-radio--button" htmlFor={this.props.domId}>
				<input name={this.props.name} type="radio" value={this.props.value}
				       checked={this.props.selectedOption === this.props.value} onChange={this.props.onChange}/>
				<span className="slds-radio--faux">{this.props.label}</span>
			</label>
		);
	}
}
RadioOption.propTypes = {
	name: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	selectedOption: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired
}
export default RadioOption;
