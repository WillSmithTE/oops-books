import { Book } from './Book';

export interface HomeScope extends ng.IScope {
    books: Book[];
}

export class HomeController {
    public static CONTROLLER_NAME: string = 'HomeController';
    public readonly books: Book[];
    public readonly $scope: HomeScope;
    public readonly user: {};
    public static readonly imgLink: string = 'https://yt3.ggpht.com/a-/AJLlDp2zsCjOyN-jAOmiKEvW1R6WtABhvxJgB1zvgQ=s900-mo-c-c0xffffffff-rj-k-no';
    private $state: any;

    constructor($scope: HomeScope, $state: any) {
        this.$scope = $scope;
        this.books = HomeController.makeMockBooks(10);
        this.$scope.books = this.books;
        this.$state = $state;
    }

    public performSearch() {
        this.$state.go('home.page');
    }

    public addToCart() {
    }

    private static makeMockBooks(count: number): Book[] {
        let booksToReturn: Book[] =[];
        for (let i = 0; i < count; i++) {
            booksToReturn[i] = (new Book(i + 1, `Book ${i + 1}`, `Author ${i + 1}`, (i +1) *3, '', HomeController.imgLink));
        }
        booksToReturn[count] = new Book(count + 1, 'Cracking the Coding Interview', 'Gayle Laakmann McDowell', 20, `I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer. 

        Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.
        
        Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.
        
        These interview questions are real; they are not pulled out of computer science textbooks. They reflect what's truly being asked at the top companies, so that you can be as prepared as possible.`, 'https://images-na.ssl-images-amazon.com/images/I/41J6k0AL6yL._SX348_BO1,204,203,200_.jpg' );
    
        return booksToReturn;
    }
}

export function initHomeController(angular: any) {
    angular.module('app').controller(HomeController.CONTROLLER_NAME, ['$scope', '$state', HomeController]);
}


