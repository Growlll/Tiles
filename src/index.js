import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from './redux/rootReducer'

import App from './App'

import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunk))
window.__store__ = store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
