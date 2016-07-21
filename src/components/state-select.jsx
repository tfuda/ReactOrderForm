import React from 'react';
import SelectElement from './select-element';

const STATE_LIST = [
	{label: 'Alabama', value: 'AL'},
	{label: 'Alaska', value: 'AK'},
	{label: 'Arkansas', value: 'AR'},
	{label: 'Connecticut', value: 'CT'},
	{label: 'Maine', value: 'ME'},
	{label: 'Massachusetts', value: 'MA'},
	{label: 'New Hampshire', value: 'NH'},
	{label: 'New Jersey', value: 'NJ'},
	{label: 'New York', value: 'NY'},
	{label: 'Rhode Island', value: 'RI'},
	{label: 'Vermont', value: 'VT'}
]

class StateSelect extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<SelectElement selectOptions={STATE_LIST} selectValue={this.props.selectedState}
			               label={this.props.label} domId={this.props.stateElementId} size={this.props.size}
			               onChange={this.props.onChange}/>
		);
	}
}
StateSelect.propTypes = {
	selectedState: React.PropTypes.string,
	stateElementId: React.PropTypes.string.isRequired,
	label: React.PropTypes.string,
	size: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired
}
StateSelect.defaultProps = {label: 'State', size: '1'}
export default StateSelect
