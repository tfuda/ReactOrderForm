import React from 'react';
import RadioGroup from './radio-group';
const DELIVER_METHOD_OPTS = [
	{ value: 'Email', label: 'Email' },
	{ value: 'Will Call', label: 'Will Call' },
	{ value: 'Ship', label: 'Ship' },
	{ value: 'Walk-up', label: 'Walk-up' }
]

class DeliveryMethodRadio extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<RadioGroup groupName="delivery-method" legend="Delivery Method" radioOptions={DELIVER_METHOD_OPTS}
				onRadioOptionChange={this.props.onDeliveryMethodChange}
				selectedOption={this.props.selectedDeliveryMethod} />
		);
	}
}
DeliveryMethodRadio.propTypes = {
	selectedDeliveryMethod: React.PropTypes.string.isRequired,
	onDeliveryMethodChange: React.PropTypes.func.isRequired
}
export default DeliveryMethodRadio
