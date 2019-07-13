import { createStore } from 'redux';
import DevTools from '../DevTools';
import reducers from '../reducers/index';

const store = createStore(
  reducers,
  DevTools.instrument()
);

export default store;