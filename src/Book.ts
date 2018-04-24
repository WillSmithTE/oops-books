export class Book {
    private name: string;
    private author: string;
    private price: number;
    private description: string;

    constructor(name: string, author: string, price: number, description: string | undefined) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.description = description;
    }

    public getName() {
        return this.name;
    }

    public getAuthor() {
        return this.author;
    }

    public getPrice() {
        return this.price;
    }

    public getDescription() {
        return this.description;
    }

    public setName(name: string) {
        this.name = name;
        return this;
    }

    public setAuthor(author: string) {
        this.author = author;
        return this;
    }

    public setPrice(price: number) {
        this.price = price;
        return this;
    }

    public setDescription(description: string) {
        this.description = description;
        return this;
    }
}