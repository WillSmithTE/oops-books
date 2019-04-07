import { Location } from './Location';

export interface RegisterData {
    email?: string;
    name?: string;
    password?: string;
    confirmPassword?: string;
    location?: Location;
}