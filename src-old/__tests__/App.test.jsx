import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthComponent from './src/components/AuthComponent/index';
import AuthProvider from './src/context/Auth/index';

const loggedInContext = {
    loggedIn: true,
}

const loggedOutContext = {
    loggedIn: false,
}

describe('App integration', () => {
    it('renders contents in appshell when logged in', () => {
        render(
            <BrowserRouter>
              <AuthProvider value={loggedInContext}>
                <AuthComponent>
                  <App />
                </AuthComponent>
              </AuthProvider>
          </BrowserRouter>,
        );
    
        const appShell = screen.getByTestId('appshell');
        expect(appShell).toBeDefined();
    });

    it('does not render contents in appshell when logged out', () => {
        render(
            <BrowserRouter>
              <AuthProvider value={loggedOutContext}>
                <AuthComponent>
                  <App />
                </AuthComponent>
              </AuthProvider>
          </BrowserRouter>,
        );
    
        expect(screen.queryByTestId('appshell')).toBeFalsy();
    })
  
})