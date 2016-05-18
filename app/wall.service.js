System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var WallService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            WallService = (function () {
                function WallService(http) {
                    this.http = http;
                    //used to build the squares table
                    this.numColumns = 3;
                    this.builder = [];
                    /*
                    Squares
                        title : title of square
                        src : image file name in pathToImages
                        description : square description
                    */
                    this.squares = [
                        {
                            title: "",
                            src: "aboutbrianlee.jpg",
                            description: ""
                        },
                        {
                            title: "Software Engineer",
                            src: 'aboutme.jpg',
                            description: "UC San Diego 2014 Computer Science Major"
                        },
                        {
                            title: "Weight Lifter",
                            src: "lifter.jpg",
                            description: "Active weight-lifter for six years"
                        },
                        {
                            title: "Photographer",
                            src: "photographer.jpg",
                            description: "Amateur photographer experienced with both DSLR and polaroid cameras"
                        },
                        {
                            title: "Snowboarder",
                            src: "snowboard.jpg",
                            description: "Amateur snowboarder with consistent rear-end pain"
                        },
                        {
                            title: "Tetris Enthusiast",
                            src: "tetris.jpg",
                            description: "High score of 41933 on Tetris Ultra, proficient at T-spinning and ST stacking"
                        },
                        {
                            title: "Dessert Connoisseur",
                            src: "dessert.jpg",
                            description: "Expert in dessert tasting"
                        },
                        {
                            title: "Hiker",
                            src: "hiker.jpg",
                            description: "Always actively looking for new trails to hike"
                        },
                        {
                            title: "Dancer",
                            src: "dancer.jpg",
                            description: "Amateur dancer, but expert with good company and a couple of beers"
                        },
                        {
                            title: "World Explorer",
                            src: "explorer.jpg",
                            description: "Lover of the ocean, new environments, and exotic foods"
                        },
                        {
                            title: "Jokester",
                            src: "jokester.jpg",
                            description: "Creator of bad jokes and puns with a side of horrendously loud laughter"
                        },
                        {
                            title: "Hard Thinker",
                            src: "thinker.jpg",
                            description: "Get to know my technical side!",
                            descriptionLink: "Check out my resume here",
                            descriptionLinkURL: "LeeBrian_Resume.pdf"
                        }
                    ];
                    for (var i = 0; i < this.squares.length; i++) {
                        //For every numColumns squares, construct a new row
                        if (i % this.numColumns == 0) {
                            this.builder.push([]);
                        }
                        this.builder[this.builder.length - 1].push(this.squares[i]);
                    }
                }
                WallService.prototype.getSquares = function () {
                    return this.squares;
                };
                WallService.prototype.getSquaresTable = function () {
                    return this.builder;
                };
                WallService.prototype.callApi = function (url) {
                    var headers = new http_1.Headers();
                    headers.append('Authorization', "");
                    return this.http.get(url, {
                        headers: headers
                    }).map(function (res) {
                        res = res.json();
                        console.log("Response from " + url + "!");
                        return res;
                    });
                };
                WallService = __decorate([
                    // use for "map" function
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WallService);
                return WallService;
            }());
            exports_1("WallService", WallService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQTRFSSxxQkFBb0IsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO29CQTNFN0IsaUNBQWlDO29CQUNqQyxlQUFVLEdBQVksQ0FBQyxDQUFDO29CQUN4QixZQUFPLEdBQWEsRUFBRSxDQUFDO29CQUV2Qjs7Ozs7c0JBS0U7b0JBQ0YsWUFBTyxHQUFXO3dCQUNkOzRCQUNJLEtBQUssRUFBRyxFQUFFOzRCQUNWLEdBQUcsRUFBRyxtQkFBbUI7NEJBQ3pCLFdBQVcsRUFBRyxFQUFFO3lCQUNuQjt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsbUJBQW1COzRCQUMzQixHQUFHLEVBQUcsYUFBYTs0QkFDbkIsV0FBVyxFQUFHLDBDQUEwQzt5QkFDM0Q7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGVBQWU7NEJBQ3ZCLEdBQUcsRUFBRyxZQUFZOzRCQUNsQixXQUFXLEVBQUcsb0NBQW9DO3lCQUNyRDt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsY0FBYzs0QkFDdEIsR0FBRyxFQUFHLGtCQUFrQjs0QkFDeEIsV0FBVyxFQUFHLHNFQUFzRTt5QkFDdkY7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGFBQWE7NEJBQ3JCLEdBQUcsRUFBRyxlQUFlOzRCQUNyQixXQUFXLEVBQUcsbURBQW1EO3lCQUNwRTt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsbUJBQW1COzRCQUMzQixHQUFHLEVBQUcsWUFBWTs0QkFDbEIsV0FBVyxFQUFHLCtFQUErRTt5QkFDaEc7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLHFCQUFxQjs0QkFDN0IsR0FBRyxFQUFHLGFBQWE7NEJBQ25CLFdBQVcsRUFBRywyQkFBMkI7eUJBQzVDO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxPQUFPOzRCQUNmLEdBQUcsRUFBRyxXQUFXOzRCQUNqQixXQUFXLEVBQUcsZ0RBQWdEO3lCQUNqRTt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsUUFBUTs0QkFDaEIsR0FBRyxFQUFHLFlBQVk7NEJBQ2xCLFdBQVcsRUFBRyxvRUFBb0U7eUJBQ3JGO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxnQkFBZ0I7NEJBQ3hCLEdBQUcsRUFBRyxjQUFjOzRCQUNwQixXQUFXLEVBQUcsd0RBQXdEO3lCQUN6RTt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsVUFBVTs0QkFDbEIsR0FBRyxFQUFHLGNBQWM7NEJBQ3BCLFdBQVcsRUFBRyx5RUFBeUU7eUJBQzFGO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxjQUFjOzRCQUN0QixHQUFHLEVBQUcsYUFBYTs0QkFDbkIsV0FBVyxFQUFHLGdDQUFnQzs0QkFDOUMsZUFBZSxFQUFHLDBCQUEwQjs0QkFDNUMsa0JBQWtCLEVBQUcscUJBQXFCO3lCQUM3QztxQkFDSixDQUFDO29CQUlFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDM0MsbURBQW1EO3dCQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDMUIsQ0FBQzt3QkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hFLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN4QixDQUFDO2dCQUVELHFDQUFlLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsNkJBQU8sR0FBUCxVQUFTLEdBQVU7b0JBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7d0JBQ3RCLE9BQU8sRUFBRyxPQUFPO3FCQUNwQixDQUFDLENBQUMsR0FBRyxDQUFFLFVBQUMsR0FBRzt3QkFDUixHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFpQixHQUFHLE1BQUcsQ0FBQyxDQUFDO3dCQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNmLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBMUdMO29CQUZrQix5QkFBeUI7b0JBRTFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQTJHYixrQkFBQztZQUFELENBQUMsQUExR0QsSUEwR0M7WUExR0QscUNBMEdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JzsgLy8gdXNlIGZvciBcIm1hcFwiIGZ1bmN0aW9uXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXYWxsU2VydmljZSB7XG4gICAgLy91c2VkIHRvIGJ1aWxkIHRoZSBzcXVhcmVzIHRhYmxlXG4gICAgbnVtQ29sdW1ucyA6IG51bWJlciA9IDM7XG4gICAgYnVpbGRlciA6IGFueVtdW10gPSBbXTtcblxuICAgIC8qXG4gICAgU3F1YXJlc1xuICAgICAgICB0aXRsZSA6IHRpdGxlIG9mIHNxdWFyZVxuICAgICAgICBzcmMgOiBpbWFnZSBmaWxlIG5hbWUgaW4gcGF0aFRvSW1hZ2VzXG4gICAgICAgIGRlc2NyaXB0aW9uIDogc3F1YXJlIGRlc2NyaXB0aW9uXG4gICAgKi9cbiAgICBzcXVhcmVzIDogYW55W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYGAsXG4gICAgICAgICAgICBzcmMgOiBgYWJvdXRicmlhbmxlZS5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBTb2Z0d2FyZSBFbmdpbmVlcmAsXG4gICAgICAgICAgICBzcmMgOiAnYWJvdXRtZS5qcGcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgVUMgU2FuIERpZWdvIDIwMTQgQ29tcHV0ZXIgU2NpZW5jZSBNYWpvcmBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgV2VpZ2h0IExpZnRlcmAsXG4gICAgICAgICAgICBzcmMgOiBgbGlmdGVyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBY3RpdmUgd2VpZ2h0LWxpZnRlciBmb3Igc2l4IHllYXJzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBQaG90b2dyYXBoZXJgLFxuICAgICAgICAgICAgc3JjIDogYHBob3RvZ3JhcGhlci5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgQW1hdGV1ciBwaG90b2dyYXBoZXIgZXhwZXJpZW5jZWQgd2l0aCBib3RoIERTTFIgYW5kIHBvbGFyb2lkIGNhbWVyYXNgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFNub3dib2FyZGVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBzbm93Ym9hcmQuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEFtYXRldXIgc25vd2JvYXJkZXIgd2l0aCBjb25zaXN0ZW50IHJlYXItZW5kIHBhaW5gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFRldHJpcyBFbnRodXNpYXN0YCxcbiAgICAgICAgICAgIHNyYyA6IGB0ZXRyaXMuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEhpZ2ggc2NvcmUgb2YgNDE5MzMgb24gVGV0cmlzIFVsdHJhLCBwcm9maWNpZW50IGF0IFQtc3Bpbm5pbmcgYW5kIFNUIHN0YWNraW5nYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBEZXNzZXJ0IENvbm5vaXNzZXVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBkZXNzZXJ0LmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBFeHBlcnQgaW4gZGVzc2VydCB0YXN0aW5nYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBIaWtlcmAsXG4gICAgICAgICAgICBzcmMgOiBgaGlrZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEFsd2F5cyBhY3RpdmVseSBsb29raW5nIGZvciBuZXcgdHJhaWxzIHRvIGhpa2VgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYERhbmNlcmAsXG4gICAgICAgICAgICBzcmMgOiBgZGFuY2VyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBbWF0ZXVyIGRhbmNlciwgYnV0IGV4cGVydCB3aXRoIGdvb2QgY29tcGFueSBhbmQgYSBjb3VwbGUgb2YgYmVlcnNgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFdvcmxkIEV4cGxvcmVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBleHBsb3Jlci5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgTG92ZXIgb2YgdGhlIG9jZWFuLCBuZXcgZW52aXJvbm1lbnRzLCBhbmQgZXhvdGljIGZvb2RzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBKb2tlc3RlcmAsXG4gICAgICAgICAgICBzcmMgOiBgam9rZXN0ZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYENyZWF0b3Igb2YgYmFkIGpva2VzIGFuZCBwdW5zIHdpdGggYSBzaWRlIG9mIGhvcnJlbmRvdXNseSBsb3VkIGxhdWdodGVyYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBIYXJkIFRoaW5rZXJgLFxuICAgICAgICAgICAgc3JjIDogYHRoaW5rZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEdldCB0byBrbm93IG15IHRlY2huaWNhbCBzaWRlIWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxpbmsgOiBgQ2hlY2sgb3V0IG15IHJlc3VtZSBoZXJlYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGlua1VSTCA6IGBMZWVCcmlhbl9SZXN1bWUucGRmYFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaHR0cDpIdHRwKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vRm9yIGV2ZXJ5IG51bUNvbHVtbnMgc3F1YXJlcywgY29uc3RydWN0IGEgbmV3IHJvd1xuICAgICAgICAgICAgaWYgKGkldGhpcy5udW1Db2x1bW5zID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXJbdGhpcy5idWlsZGVyLmxlbmd0aCAtIDFdLnB1c2godGhpcy5zcXVhcmVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNxdWFyZXMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmVzO1xuICAgIH1cblxuICAgIGdldFNxdWFyZXNUYWJsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkZXI7XG4gICAgfVxuXG4gICAgY2FsbEFwaSAodXJsOnN0cmluZykge1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgXCJcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwge1xuICAgICAgICAgICAgaGVhZGVycyA6IGhlYWRlcnNcbiAgICAgICAgfSkubWFwKCAocmVzKSA9PiB7XG4gICAgICAgICAgICByZXMgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFJlc3BvbnNlIGZyb20gJHt1cmx9IWApO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19