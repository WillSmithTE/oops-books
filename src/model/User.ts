import { Book } from './Book';
import { RegistrationRequest } from './RegistrationRequest';

export class User extends RegistrationRequest {
    private cart: Book[] = [];

    constructor(registrationRequest: RegistrationRequest, cart: Book[] = []) {
        super(registrationRequest.getName(), registrationRequest.getPassword(), registrationRequest.getEmail(), registrationRequest.getLocation());
        this.cart = cart;
    }

    public addToCart(book: Book) {
        this.cart.push(book);
    }

    public removeFromCart(book: Book) {
        const cartIds = this.cart.map((book) => book.getId());
        const bookIndex = cartIds.indexOf(book.getId());
        this.cart.splice(bookIndex, 1);
    }

    public getCart() {
        return this.cart;
    }

    public getSubtotal() {
        let sum = 0;
        this.cart.forEach((book) => sum += book.getPrice());
        return sum;
    }

    public static createFromRegistrationRequest(registrationRequest: RegistrationRequest): User {
        return new User(registrationRequest);
    }
}