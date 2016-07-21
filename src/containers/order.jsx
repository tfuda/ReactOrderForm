import {connect} from 'react-redux';
import {
	deleteItem,
	deleteAllItems,
	changeDonation,
	changeDeliveryMethod,
	copyBillingToShipping,
	inputChange
} from '../actions';
import OrderForm from '../components/order-form';

const mapStateToProps = (state) => {
	return {order: state.order};
}
const mapDispatchToProps = (dispatch) => {
	return {
		onDeleteItem: (name) => {
			dispatch(deleteItem(name))
		},
		onDeleteAllItems: () => {
			dispatch(deleteAllItems())
		},
		onDonationChange: (donationAmount) => {
			dispatch(changeDonation(donationAmount))
		},
		onDeliveryMethodChange: (deliveryMethod) => {
			dispatch(changeDeliveryMethod(deliveryMethod))
		},
		onCopyBillingToShipping: () => {
			dispatch(copyBillingToShipping())
		},
		onInputChange: (field, value) => {
			dispatch(inputChange(field, value))
		}
	}
}
const Order = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderForm)
export default Order;
