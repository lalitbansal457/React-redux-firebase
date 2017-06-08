import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import InviteContainer from './InviteContainer';
import store from './store.js';




ReactDOM.render(<Provider store={store}>
		<InviteContainer />
		</Provider>,
  document.getElementById('container'));