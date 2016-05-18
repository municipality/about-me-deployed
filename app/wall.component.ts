import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_BINDINGS} from 'angular2/http';
import {Square} from './square.component';
import {ContactFooter} from './contact.footer';
import {Banner} from './banner.component';
import {WallService} from './wall.service';

@Component ({
    selector : 'wall',
    directives : [Square, ContactFooter, Banner],
    providers : [WallService, Http, HTTP_BINDINGS],
    template : `
        <div id="wall">
            <banner></banner>
            <table id="square-table">
                <tr *ngFor="#row of builder">
                    <td *ngFor="#square of row">
                        <square [title]="square.title" [description]="square.description" [src]="square.src"
                                [descriptionLink]="square.descriptionLink" [descriptionLinkURL]="square.descriptionLinkURL">
                        </square>
                    </td>
                </tr>
            </table>
            <div>
            <contact></contact>
        </div>
    `
})
export class Wall implements OnInit {
    builder : any[][];

    //Construct the builder which is used to lay out the squares by template
    constructor (private wallService : WallService) {
    }

    ngOnInit () {
        this.builder = this.wallService.getSquaresTable();
        this.wallService.callApi('http://localhost:3000/api/')
        .subscribe((result) => {
            console.log(result);
        })
    }

}
