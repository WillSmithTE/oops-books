import { IAngularStatic } from 'angular';
import { CognitoUserPool, CognitoUserAttribute, NodeCallback, ISignUpResult, CognitoUser, ICognitoUserData, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import { UserSignupData, BaseUser, User } from '../model/User';
import { get } from 'superagent';

export class AuthService {
    public static SERVICE_NAME = 'AuthService';

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