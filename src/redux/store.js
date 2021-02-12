import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga' 

const sagaMiddleware = createSagaMiddleware()

const middlerwares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlerwares.push(logger)
}


export const store = createStore(rootReducer, applyMiddleware(...middlerwares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);



