import Navigation from './navigation';
import { Provider } from 'react-redux';
import {  createStore, combineReducers } from 'redux'
import signUpReducer from "./redux/signup";
import loginReducer from "./redux/login";

const reducer = combineReducers({
  signup: signUpReducer,
  login: loginReducer,
})
const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}


