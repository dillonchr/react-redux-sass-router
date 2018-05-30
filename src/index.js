import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import {addTranslationForLanguage, initialize, localeReducer as locale} from 'react-localize-redux';
import { Provider } from 'react-redux';
import UserReducer from './reducers/userReducer';
import './style/app.scss';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({
    user: UserReducer,
    locale
}));
store.dispatch(initialize(['en-US'], {defaultLanguage: 'en-US'}));
store.dispatch(addTranslationForLanguage(require('./locale/en-US.json'), 'en-US'));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
