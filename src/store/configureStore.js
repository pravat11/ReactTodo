import {createStore} from 'redux';
import todoAppReducer from '../reducers/todoReducer';

const store = createStore(todoAppReducer);
export default store;