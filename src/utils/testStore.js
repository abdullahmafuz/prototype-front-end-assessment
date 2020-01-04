import {createStore,applyMiddleware} from 'redux';

import rootReducer from '../reducers';

import thunk from 'redux-thunk';

const middleware=[thunk];

export const testStore=(initialState)=>{

    const createStoreWithMiddleware =applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(rootReducer,initialState);
}