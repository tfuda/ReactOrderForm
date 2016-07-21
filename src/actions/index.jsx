export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS';
export const CHANGE_DONATION = 'CHANGE_DONATION';
export const CHANGE_PAYMENT_METHOD = 'CHANGE_PAYMENT_METHOD';
export const CHANGE_DELIVERY_METHOD = 'CHANGE_DELIVERY_METHOD';
export const COPY_BILLING_TO_SHIPPING = 'COPY_BILLING_TO_SHIPPING';
export const INPUT_CHANGE = 'INPUT_CHANGE';

export function addItem(item) {
	return { type: ADD_ITEM, item};
}
export function deleteItem(itemName) {
	return { type: DELETE_ITEM, itemName };
}
export function deleteAllItems() {
	return { type: DELETE_ALL_ITEMS }
}
export function changeDonation(donationAmount) {
	return { type: CHANGE_DONATION, donationAmount }
}
export function changeDeliveryMethod(deliveryMethod) {
	return { type: CHANGE_DELIVERY_METHOD, deliveryMethod };
}
export function changePaymentMethod(paymentMethod) {
	return { type: CHANGE_DELIVERY_METHOD, paymentMethod };
}
export function copyBillingToShipping() {
	return { type: COPY_BILLING_TO_SHIPPING };
}
export function inputChange(field, value) {
	return { type: INPUT_CHANGE, field, value };
}
