import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import UserReducer from './reducers/userReducer';
import './style/app.scss';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({
    user: UserReducer
}));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
