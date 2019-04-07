import { generate } from 'password-hash';
import { Location } from './Location';
import { RegisterData } from './RegisterData';

export class RegistrationRequest {
    private id: number;
    private name: string;
    private password: string;
    private email: string;
    private location: Location;

    constructor(name: string, password: string, email: string, location: Location) {
        this.name = name;
        this.email = email;
        this.location = location;
        this.password = generate(password);
    }

    public static createFromObject(registerData: RegisterData) {
        return new RegistrationRequest(registerData.name, registerData.password, registerData.email, registerData.location);
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getLocation(): Location {
        return this.location;
    }

    public getPassword(): string {
        return this.password;
    }

}