import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './components/Reducer/rootReducer'
import{userLoggedIn} from './components/actions/auth'

const store = createStore(
rootReducer,
composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.booksJWT) {
const user = {token:localStorage.booksJWT};
store.dispatch(userLoggedIn(user));

}

ReactDOM.render(<BrowserRouter>
<Provider store={store}>
<Route component={App} />
</Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
