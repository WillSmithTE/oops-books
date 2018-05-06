import { Book } from '../model/Book';
import { User } from '../model/User';

export interface RootScope extends ng.IScope {
    books: Book[];
}

export class RootController {
    public static CONTROLLER_NAME: string = 'RootController';
    public books: Book[];
    public readonly $scope: RootScope;
    public readonly user: User;
    public searchString: string = '';
    public isLoggedIn: boolean = false;
    public static readonly imgLink: string = 'https://yt3.ggpht.com/a-/AJLlDp2zsCjOyN-jAOmiKEvW1R6WtABhvxJgB1zvgQ=s900-mo-c-c0xffffffff-rj-k-no';
    private $state: any;
    private $uibModal: any;

    constructor($scope: RootScope, $state: any, $uibModal: any) {
        this.user = new User(1, 'user 1', '');
        this.$scope = $scope;
        this.books = RootController.makeMockBooks(8);
        this.$state = $state;
        this.$uibModal = $uibModal;
    }

    public performSearch() {
        this.books = this.books.filter((book) => book.getName().indexOf(this.searchString) !== -1);
        this.$state.go('root.home');
    }

    public addToCart(book: Book) {
        this.user.addToCart(book);
    }

    public login() {
        this.isLoggedIn = true;
        this.$state.go('root.home');
    }

    public getUser() {
        return this.user;
    }

    public removeFromCart(item: Book) {
        this.user.removeFromCart(item);
    }

    public submitRequest() {

    }

    public getBooks() {
        return this.books;
    }

    private static makeMockBooks(count: number): Book[] {
        let booksToReturn: Book[] =[];
        for (let i = 0; i < count; i++) {
            booksToReturn[i] = (new Book(i + 1, `Book ${i + 1}`, `Author ${i + 1}`, (i +1) *3, '', RootController.imgLink));
        }
        booksToReturn[count] = new Book(count + 1, 'Cracking the Coding Interview', 'Gayle Laakmann McDowell', 20, `I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer. 

        Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.
        
        Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.
        
        These interview questions are real; they are not pulled out of computer science textbooks. They reflect what's truly being asked at the top companies, so that you can be as prepared as possible.`, 'https://images-na.ssl-images-amazon.com/images/I/41J6k0AL6yL._SX348_BO1,204,203,200_.jpg' );
    
        return booksToReturn;
    }
}

export function initRootController(angular: any) {
    angular.module('app').controller(RootController.CONTROLLER_NAME, ['$scope', '$state', RootController]);
}
