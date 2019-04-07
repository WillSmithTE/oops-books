import { IAngularStatic } from 'angular';
import { get, post } from 'superagent';
import { RegistrationRequest } from '../model/RegistrationRequest';
import { generate } from 'password-hash';
import { Response, ResponseStatus } from '../model/Response';
import { LOGIN_STATE } from '../routes';

const pathGenerator = (url: string) => `http://localhost:8080/${url}`,
    REGISTER_PATH: string = pathGenerator('auth/register'),
    LOGIN_PATH: string = pathGenerator('auth/login');

export class AuthService {
    public static SERVICE_NAME = 'AuthService';

    private authToken: string;
    private $state;

    constructor($state) {
        this.$state = $state;
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

    public register(registrationRequest: RegistrationRequest): void {
        post(REGISTER_PATH)
            .set('Content-Type', 'application/json')
            .send(registrationRequest)
            .then(
                (response: any) => {
                    if (response.body.status === ResponseStatus[ResponseStatus.FAIL]) {
                        alert('Registration failed: ' + response.body.body);
                    } else {
                        alert('Registration Success');
                        this.$state.go(LOGIN_STATE);
                    }
                },
                (error) => console.error('Registration Failed: ' + error)
            );
    }

    public signin(username: string, password: string): void {
        const hashedPwd = generate(password);
        const signinRequest = {
            username,
            password: hashedPwd
        };

        post(LOGIN_PATH)
            .send(signinRequest)
            .then(
                (response) => {
                    console.log('Login Success');
                },
                (error) => console.error('Login failed: ' + error)
            );
    }
}

export function initAuthService(angular: IAngularStatic) {
    angular.module('app').service(AuthService.SERVICE_NAME, ['$state', AuthService]);
}