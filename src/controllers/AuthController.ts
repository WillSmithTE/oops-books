import { IAngularStatic } from 'angular';
import { CognitoUserPool, CognitoUserAttribute, NodeCallback, ISignUpResult } from 'amazon-cognito-identity-js';
import { UserSignupData, BaseUser } from '../model/User';
import { AuthService } from '../services/AuthService';

export class AuthController {
    public static CONTROLLER_NAME: string = 'AuthController';

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

    public logUsers(): void {
        this.authService.getUsers();
    }

    public register(): void {
        // this.authService.signupUser(this.userPool, this.userSignupData);
    }

    public signin(): void {
        // this.authService.signinUser(this.userPool, this.userSigninData);
    }
}

export function initAuthController(angular: IAngularStatic): void {
    angular.module('app').controller(AuthController.CONTROLLER_NAME, [AuthService.SERVICE_NAME, AuthController]);
}