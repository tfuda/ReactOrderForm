import {combineReducers} from 'redux';
import { DELETE_ITEM, DELETE_ALL_ITEMS, ADD_ITEM, CHANGE_DONATION, CHANGE_PAYMENT_METHOD, CHANGE_DELIVERY_METHOD, COPY_BILLING_TO_SHIPPING, INPUT_CHANGE } from '../actions';

const initialItems = [
	{
		name: 'ITEM-000001',
		description: 'The Tom Show, July 27, 2016',
		quantity: 1,
		unitPrice: 40.00,
		unitFee: 4.00,
		subtotal: 44.00,
		discount: 0.00,
		total: 44.00
	},
	{
		name: 'ITEM-000002',
		description: 'The Tom Show, July 27, 2016',
		quantity: 1,
		unitPrice: 40.00,
		unitFee: 4.00,
		subtotal: 44.00,
		discount: 0.00,
		total: 44.00
	}
]

const initialOrder = {
	itemList: initialItems,
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	billingStreet: '',
	billingCity: '',
	billingState: '',
	billingPostalCode: '',
	paymentMethod: 'Credit Card',
	deliveryMethod: 'Email',
	shippingStreet: '',
	shippingCity: '',
	shippingState: '',
	shippingPostalCode: '',
	itemTotal: 88.00,
	donationAmount: 0.00,
	orderFee: 2.00,
	deliveryFee: 0.00,
	orderTotal: 90.00,
	orderStatus: 'Draft'
}

function itemList(state, action) {
	switch (action.type) {
		case ADD_ITEM:
			// TODO
			return state;
		case DELETE_ITEM:
			let itemList = state.filter(function(item) {
				return item.name !== action.itemName;
			});
			return itemList;
		case DELETE_ALL_ITEMS:
			return [];
		default:
			return state;
	}
}

function order(state = initialOrder, action) {
	switch (action.type) {
		case ADD_ITEM:
		case DELETE_ITEM:
		case DELETE_ALL_ITEMS:
			let newItemList = itemList(state.itemList, action);
			let newItemTotal = calculateItemTotal(newItemList);
			let newState = Object.assign({}, state, {
				itemList: newItemList,
				itemTotal: newItemTotal,
				orderTotal: calculateOrderTotal(newItemTotal, state.orderFee, state.deliveryFee, state.donationAmount)
			});
			return newState;
		case CHANGE_DONATION:
			return Object.assign({}, state, {
				donationAmount: action.donationAmount,
				orderTotal: calculateOrderTotal(state.itemTotal, state.orderFee, state.deliveryFee, action.donationAmount)
			});
		case CHANGE_DELIVERY_METHOD:
			let deliveryFee = (action.deliveryMethod === 'Ship') ? 3.00 : 0.00;
			return Object.assign({}, state, {
				deliveryMethod: action.deliveryMethod,
				deliveryFee: deliveryFee,
				orderTotal: calculateOrderTotal(state.itemTotal, state.orderFee, deliveryFee, state.donationAmount)
			});
		case COPY_BILLING_TO_SHIPPING:
			return Object.assign({}, state, {
				shippingStreet: state.billingStreet,
				shippingCity: state.billingCity,
				shippingState: state.billingState,
				shippingPostalCode: state.billingPostalCode
			});
		case INPUT_CHANGE:
			let newFieldValue = {};
			let key = action.field;
			newFieldValue[key] = action.value;
			return Object.assign({}, state, newFieldValue);
		default:
			return state;
	}
}

function calculateItemTotal(itemList) {
	let itemTotal = 0;
	itemList.forEach(function(item){ itemTotal += item.total });
	return itemTotal;
}

function calculateOrderTotal(itemTotal = 0, orderFee = 0, deliveryFee = 0, donationAmount = 0) {
	return itemTotal + orderFee + deliveryFee + donationAmount;
}

const orderApp = combineReducers({ order });
export default orderApp
