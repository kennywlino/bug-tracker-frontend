import '@testing-library/jest-dom';
import { fireEvent, screen, render } from '@testing-library/react';
import  AuthProvider, { AuthContext } from './index';

describe('Auth integration', () => {
    test('contains initial user and loggedIn values', () =>{
        render(
            <AuthProvider>
                <AuthContext.Consumer>
                   {
                    ({loggedIn, user}) => (
                        <>
                        <p data-testid="loggedIn">{loggedIn.toString()}</p>
                        <p data-testid="userObject">{typeof(user)}</p>
                        <p data-testid="loggedIn">{Object.keys(user).length}</p>
                        </>
                    )
                   } 
                </AuthContext.Consumer>
            </AuthProvider>

        );
        const loggedInTest = screen.getByTestId('loggedIn');
        const userObjectTest = screen.getByTestId('userObject');
        const userKeysTest = screen.getByTestId('userKeys');

        expect(loggedInTest).toHaveTextContent('false');
        expect(userObjectTest).toHaveTextContent('object');
        expect(userKeysTest).toHaveTextContent(0);
    });
});