import { Book } from "./Book";

export class BookController {
    public static readonly CONTROLLER_NAME = 'BookController';

    public book: Book;

    constructor() {
        this.book = new Book(10, 'Cracking the Coding Interview', 'Gayle Laakmann McDowell', 20, `I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer. 

        Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.
        
        Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.
        
        These interview questions are real; they are not pulled out of computer science textbooks. They reflect what's truly being asked at the top companies, so that you can be as prepared as possible.`, 'https://images-na.ssl-images-amazon.com/images/I/41J6k0AL6yL._SX348_BO1,204,203,200_.jpg' );
    }

    public getBook() {
        return this.book;
    }
}

export function initBookController(angular: any) {
    angular.module('app').controller(BookController.CONTROLLER_NAME, BookController);
}