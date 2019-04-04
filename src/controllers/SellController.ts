import { MODULE_NAME } from '../consts';
import { Book } from '../model/Book';

export class SellController {
    public static CONTROLLER_NAME = 'SellController';

    public selectedBook: Book;

    constructor() {
    }

    public confirm(): void {
        // const confirmSell = dialogs.confirm('Confirm you wish to sell.');
        // confirmSell.result.then((success) => console.log(success));
    }
}

export function initSellController(angular: angular.IAngularStatic): void {
    angular.module(MODULE_NAME).controller(SellController.CONTROLLER_NAME, SellController);
}