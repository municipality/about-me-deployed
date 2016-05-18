System.register(['angular2/core', 'angular2/http', './square.component', './contact.footer', './banner.component', './wall.service'], function(exports_1, context_1) {
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
    var core_1, http_1, square_component_1, contact_footer_1, banner_component_1, wall_service_1;
    var Wall;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (square_component_1_1) {
                square_component_1 = square_component_1_1;
            },
            function (contact_footer_1_1) {
                contact_footer_1 = contact_footer_1_1;
            },
            function (banner_component_1_1) {
                banner_component_1 = banner_component_1_1;
            },
            function (wall_service_1_1) {
                wall_service_1 = wall_service_1_1;
            }],
        execute: function() {
            Wall = (function () {
                //Construct the builder which is used to lay out the squares by template
                function Wall(wallService) {
                    this.wallService = wallService;
                }
                Wall.prototype.ngOnInit = function () {
                    this.builder = this.wallService.getSquaresTable();
                    this.wallService.callApi('http://localhost:3000/api/')
                        .subscribe(function (result) {
                        console.log(result);
                    });
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [square_component_1.Square, contact_footer_1.ContactFooter, banner_component_1.Banner],
                        providers: [wall_service_1.WallService, http_1.Http, http_1.HTTP_BINDINGS],
                        template: "\n        <div id=\"wall\">\n            <banner></banner>\n            <table id=\"square-table\">\n                <tr *ngFor=\"#row of builder\">\n                    <td *ngFor=\"#square of row\">\n                        <square [title]=\"square.title\" [description]=\"square.description\" [src]=\"square.src\"\n                                [descriptionLink]=\"square.descriptionLink\" [descriptionLinkURL]=\"square.descriptionLinkURL\">\n                        </square>\n                    </td>\n                </tr>\n            </table>\n            <div>\n            <contact></contact>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [wall_service_1.WallService])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRCQTtnQkFHSSx3RUFBd0U7Z0JBQ3hFLGNBQXFCLFdBQXlCO29CQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztnQkFDOUMsQ0FBQztnQkFFRCx1QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUM7eUJBQ3JELFNBQVMsQ0FBQyxVQUFDLE1BQU07d0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsTUFBTTt3QkFDakIsVUFBVSxFQUFHLENBQUMseUJBQU0sRUFBRSw4QkFBYSxFQUFFLHlCQUFNLENBQUM7d0JBQzVDLFNBQVMsRUFBRyxDQUFDLDBCQUFXLEVBQUUsV0FBSSxFQUFFLG9CQUFhLENBQUM7d0JBQzlDLFFBQVEsRUFBRyxxbkJBZVY7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBZ0JGLFdBQUM7WUFBRCxDQUFDLEFBZkQsSUFlQztZQWZELHVCQWVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cCwgSFRUUF9CSU5ESU5HU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge1NxdWFyZX0gZnJvbSAnLi9zcXVhcmUuY29tcG9uZW50JztcbmltcG9ydCB7Q29udGFjdEZvb3Rlcn0gZnJvbSAnLi9jb250YWN0LmZvb3Rlcic7XG5pbXBvcnQge0Jhbm5lcn0gZnJvbSAnLi9iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7V2FsbFNlcnZpY2V9IGZyb20gJy4vd2FsbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3dhbGwnLFxuICAgIGRpcmVjdGl2ZXMgOiBbU3F1YXJlLCBDb250YWN0Rm9vdGVyLCBCYW5uZXJdLFxuICAgIHByb3ZpZGVycyA6IFtXYWxsU2VydmljZSwgSHR0cCwgSFRUUF9CSU5ESU5HU10sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9XCJ3YWxsXCI+XG4gICAgICAgICAgICA8YmFubmVyPjwvYmFubmVyPlxuICAgICAgICAgICAgPHRhYmxlIGlkPVwic3F1YXJlLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNyb3cgb2YgYnVpbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwiI3NxdWFyZSBvZiByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcXVhcmUgW3RpdGxlXT1cInNxdWFyZS50aXRsZVwiIFtkZXNjcmlwdGlvbl09XCJzcXVhcmUuZGVzY3JpcHRpb25cIiBbc3JjXT1cInNxdWFyZS5zcmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25MaW5rXT1cInNxdWFyZS5kZXNjcmlwdGlvbkxpbmtcIiBbZGVzY3JpcHRpb25MaW5rVVJMXT1cInNxdWFyZS5kZXNjcmlwdGlvbkxpbmtVUkxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3F1YXJlPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxjb250YWN0PjwvY29udGFjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXYWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBidWlsZGVyIDogYW55W11bXTtcblxuICAgIC8vQ29uc3RydWN0IHRoZSBidWlsZGVyIHdoaWNoIGlzIHVzZWQgdG8gbGF5IG91dCB0aGUgc3F1YXJlcyBieSB0ZW1wbGF0ZVxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHdhbGxTZXJ2aWNlIDogV2FsbFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IHRoaXMud2FsbFNlcnZpY2UuZ2V0U3F1YXJlc1RhYmxlKCk7XG4gICAgICAgIHRoaXMud2FsbFNlcnZpY2UuY2FsbEFwaSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS8nKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=