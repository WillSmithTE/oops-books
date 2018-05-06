export class Book {
    private id: number;
    private name: string;
    private author: string;
    private price: number;
    private description: string;
    private imgLink: string;
    private urlName: string;

    constructor(id: number, name: string, author: string, price: number, description: string | undefined, imgLink: string) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.description = description;
        this.imgLink = imgLink;
        this.urlName = name.split(' ').map((word) => Book.getWordWithOnlyFirstLetterUppercase(word)).join('');
    }

    public getUrlName() {
        return this.urlName;
    }

    public getId() {
        return this.id;
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

    public getImgLink() {
        return this.imgLink;
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

    public setImgLink(imgLink: string) {
        this.imgLink = imgLink;
    }

    private static getWordWithOnlyFirstLetterUppercase(word: string) {
        word.charAt(0).toUpperCase();
        return word;
    }
}