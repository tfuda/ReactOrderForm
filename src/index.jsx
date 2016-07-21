import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {IntlProvider, FormattedNumber} from 'react-intl';

import orderApp from './reducers';
import App from './components/app';

let store = createStore(orderApp);

ReactDOM.render(
	<Provider store={store}>
		<IntlProvider locale="en">
			<App />
		</IntlProvider>
	</Provider>,
	document.querySelector('#reactOrderForm')
);
