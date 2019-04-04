import { IAngularStatic } from 'angular';
import { CognitoUserPool, CognitoUserAttribute, NodeCallback, ISignUpResult, CognitoUser, ICognitoUserData, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import { UserSignupData, BaseUser, User } from '../model/User';
import { get, post } from 'superagent';
import { sign } from 'jsonwebtoken';

const REGISTER_PATH: string = '/register',
    LOGIN_PATH: string = '/login';

export class AuthService {
    public static SERVICE_NAME = 'AuthService';

    private secret: string = 'secret';

    constructor() {
    }

    // public static getUserSession(): CognitoUserSession {
    //     return AuthService.userSession;
    // }

    public getUsers() {
        get('http://localhost:8080/user/').then(
            (users) => console.error(users),
            (error) => console.error(error)
        );

    }

    public register(username: string, password: string): void {
        const token: string = sign({ data: password }, this.secret);
        const registrationRequest = {
            username,
            password: token
        };
        post(REGISTER_PATH)
            .send(registrationRequest)
            .then(
                (value) => console.log('Registration Success'),
                (error) => console.error('Registration Failed: ' + error)
            );
    }

    public signin(username: string, password: string): void {
        console.error({ username, password });
        const token: string = sign({ data: password }, this.secret);
        console.error({token});
        const signinRequest = {
            username,
            password: token
        };

        post(LOGIN_PATH)
            .send(signinRequest)
            .then(
                (value) => console.log('Login Success'),
                (error) => console.error('Login failed: '+ error)
            );
    }

    public static signinUser(userPool: CognitoUserPool, userData: BaseUser) {
        const user: CognitoUser = new CognitoUser({ Username: userData.email, Pool: userPool });

        user.authenticateUser(new AuthenticationDetails({ Username: userData.email, Password: userData.password }), {
            onSuccess: (result: CognitoUserSession) => {
                alert('successful login');
                // this.userSession = result;
            },
            onFailure: (error) => alert(`Login failed: ${error}`)
        });
    }
}

export function initAuthService(angular: IAngularStatic) {
    angular.module('app').service(AuthService.SERVICE_NAME, ['$http', AuthService]);
}