'use strict';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {persistStore, autoRehydrate} from 'redux-persist';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import {AsyncStorage} from 'react-native';

const logger = createLogger();
const CrypticStore = applyMiddleware(thunk, promise, logger)(createStore);
console.log(typeof(CrypticStore));

export default function configureStore(onComplete: ?() => void) {
  const store = autoRehydrate()(CrypticStore)(rootReducer);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  return store;
}