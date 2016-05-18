import {Injectable, Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx'; // use for "map" function

@Injectable()
export class WallService {
    //used to build the squares table
    numColumns : number = 3;
    builder : any[][] = [];

    /*
    Squares
        title : title of square
        src : image file name in pathToImages
        description : square description
    */
    squares : any[] = [
        {
            title : ``,
            src : `aboutbrianlee.jpg`,
            description : ``
        },
        {
            title : `Software Engineer`,
            src : 'aboutme.jpg',
            description : `UC San Diego 2014 Computer Science Major`
        },
        {
            title : `Weight Lifter`,
            src : `lifter.jpg`,
            description : `Active weight-lifter for six years`
        },
        {
            title : `Photographer`,
            src : `photographer.jpg`,
            description : `Amateur photographer experienced with both DSLR and polaroid cameras`
        },
        {
            title : `Snowboarder`,
            src : `snowboard.jpg`,
            description : `Amateur snowboarder with consistent rear-end pain`
        },
        {
            title : `Tetris Enthusiast`,
            src : `tetris.jpg`,
            description : `High score of 41933 on Tetris Ultra, proficient at T-spinning and ST stacking`
        },
        {
            title : `Dessert Connoisseur`,
            src : `dessert.jpg`,
            description : `Expert in dessert tasting`
        },
        {
            title : `Hiker`,
            src : `hiker.jpg`,
            description : `Always actively looking for new trails to hike`
        },
        {
            title : `Dancer`,
            src : `dancer.jpg`,
            description : `Amateur dancer, but expert with good company and a couple of beers`
        },
        {
            title : `World Explorer`,
            src : `explorer.jpg`,
            description : `Lover of the ocean, new environments, and exotic foods`
        },
        {
            title : `Jokester`,
            src : `jokester.jpg`,
            description : `Creator of bad jokes and puns with a side of horrendously loud laughter`
        },
        {
            title : `Hard Thinker`,
            src : `thinker.jpg`,
            description : `Get to know my technical side!`,
            descriptionLink : `Check out my resume here`,
            descriptionLinkURL : `LeeBrian_Resume.pdf`
        }
    ];

    constructor (public http:Http) {

        for (let i = 0; i < this.squares.length; i++) {
            //For every numColumns squares, construct a new row
            if (i%this.numColumns == 0) {
                this.builder.push([]);
            }
            this.builder[this.builder.length - 1].push(this.squares[i]);
        }
    }

    getSquares () {
        return this.squares;
    }

    getSquaresTable () {
        return this.builder;
    }

    callApi (url:string) {
        var headers = new Headers();
        headers.append('Authorization', "");
        return this.http.get(url, {
            headers : headers
        }).map( (res) => {
            res = res.json();
            console.log(`Response from ${url}!`);
            return res;
        });
    }
}
