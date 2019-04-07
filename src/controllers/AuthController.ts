import { IAngularStatic } from 'angular';
import { CognitoUserPool, CognitoUserAttribute, NodeCallback, ISignUpResult } from 'amazon-cognito-identity-js';
import { AuthService } from '../services/AuthService';
import { RegistrationRequest } from '../model/RegistrationRequest';
import { Location } from '../model/Location';
import { RegisterData } from '../model/RegisterData';

export class AuthController {
    public static CONTROLLER_NAME: string = 'AuthController';

    public registerForm: {};
    public registerSchema: {};
    public registerModel: RegisterData = {};

    private name: string;
    private password: string
    private location: Location;
    private email: string;

    constructor(authService: AuthService) {
        this.authService = authService;
        this.registerForm = this.makeRegisterForm();
        this.registerSchema = AuthController.makeRegisterSchema();
    }

    private authService: AuthService;

    public getPassword(): string {
        return this.password;
    }

    public logUsers(): void {
        this.authService.getUsers();
    }

    public register(): void {
        this.authService.register(RegistrationRequest.createFromObject(this.registerModel));
    }

    public signin(): void {
        this.authService.signin(this.email, this.password);
    }

    private makeRegisterForm(): {} {
        return [
            'name',
            'email',
            {
                key: 'password',
                type: 'password',
                validationMessage: {
                    passwordMatch: 'Passwords must match'
                },
                $validators: {
                    passwordMatch: (password) => password === this.registerModel.confirmPassword
                }
            },
            {
                key: 'confirmPassword',
                type: 'password',
                validationMessage: {
                    passwordMatch: 'Passwords must match'
                },
                $validators: {
                    passwordMatch: (confirmPassword) => confirmPassword === this.registerModel.password
                }
            }
        ];
    }

    private static makeRegisterSchema(): {} {
        return {
            type: 'object',
            properties: {
                'name': {
                    title: 'Name',
                    type: 'string'
                },
                'email': {
                    title: 'Email',
                    type: 'string',
                    pattern: '^\\S+@\\S+$'
                },
                'password': {
                    title: 'Password',
                    type: 'string',
                    minLength: 8
                },
                'confirmPassword': {
                    title: 'Confirm Password',
                    type: 'string'
                }
            },
            required: [
                'name',
                'email',
                'password',
                'confirmPassword'
            ]
        };
    }
}

export function initAuthController(angular: IAngularStatic): void {
    angular.module('app').controller(AuthController.CONTROLLER_NAME, [AuthService.SERVICE_NAME, AuthController]);
}