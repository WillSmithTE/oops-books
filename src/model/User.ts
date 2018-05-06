import { Book } from "./Book";

export class User {
    private id: number;
    private name: string;
    private email: string;
    private cart: Book[] = [];

    constructor(id: number, name: string, email: string, cart: Book[] = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cart = cart;
    }

    public addToCart(book: Book) {
        this.cart.push(book);
    }

    public removeFromCart(book: Book) {
        const cartIds = this.cart.map((book) => book.getId());
        const bookIndex = cartIds.indexOf(book.getId());
        this.cart.splice(bookIndex, 1);
        console.log(this.cart);
    }

    public getCart() {
        return this.cart;
    }

    public getSubtotal() {
        let sum = 0;
        this.cart.forEach((book) => sum += book.getPrice());
        return sum;
    }
}