import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {ReduxCounterStore} from "./Redux/ReduxCounterStore"
import {reduxBankStore} from "./Redux/ReduxBankAccount/ReduxBankAccountStore"
// import {Provider} from "react-redux"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={ReduxCounterStore}>
    <App />
    // </Provider> */}
    <Provider store={reduxBankStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
