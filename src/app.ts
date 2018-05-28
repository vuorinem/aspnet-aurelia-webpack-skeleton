import * as $ from 'jquery';

export class App {
    private message: string = "Hello World";

    public attached() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    }
}