import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import { MantineProvider } from '@mantine/core';
import Users from './components/Users';

// Redux imports
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        {/* <Users /> */}
        <BrowserRouter>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <App />
          </MantineProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
)
