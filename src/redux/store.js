import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import todo from './reducer';
import thunk from 'redux-thunk';

const store = createStore(
    todo,
    composeWithDevTools(applyMiddleware(thunk)));

export default store;