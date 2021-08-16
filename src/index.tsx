import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import { configure } from 'axios-hooks'
import Axios from 'axios'
import { API_URL } from './api'
import './i18n'
import { Suspense } from 'react'

const axios = Axios.create({
  baseURL: API_URL,
})

configure({ axios })

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)
