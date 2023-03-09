import { legacy_createStore as createStore } from 'redux';
import { AnimalReducer } from '../src/redux/reducer/reducers';
import thunk from "redux-thunk";
import { applyMiddleware, compose} from "redux"

const store= createStore(AnimalReducer, compose(applyMiddleware(thunk)))
export default store;