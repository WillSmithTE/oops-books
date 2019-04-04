import { IAngularStatic } from 'angular';
import { CognitoUserPool, CognitoUserAttribute, NodeCallback, ISignUpResult } from 'amazon-cognito-identity-js';
import { UserSignupData, BaseUser } from '../model/User';
import { AuthService } from '../services/AuthService';
import { sign } from 'jsonwebtoken';

export class AuthController {
    public static CONTROLLER_NAME: string = 'AuthController';
    private username: string;
    private password: string

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    private poolData = {
        UserPoolId: 'ap-southeast-2_wdQuIDkHd',
        ClientId: 'jbje511agcinicb65vf7is0ne'
    };
    private userPool: CognitoUserPool = new CognitoUserPool(this.poolData);
    private userSignupData: UserSignupData;
    private userSigninData: BaseUser;
    private authService: AuthService;

    public getUserName(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public logUsers(): void {
        this.authService.getUsers();
    }

    public register(username: string, password: string): void {
        this.authService.register(username, password);
    }

    public signin(): void {
        console.error({ username: this.username, password: this.password });
        this.authService.signin(this.username, this.password);
    }
}

export function initAuthController(angular: IAngularStatic): void {
    angular.module('app').controller(AuthController.CONTROLLER_NAME, [AuthService.SERVICE_NAME, AuthController]);
}