import {Component} from 'angular2/core';

@Component ({
    selector : 'contact',
    template : `
        <div id="contact-footer">
            <p class="section-header">Contact Information</p>
            <p class="icon email-icon">Email : {{email}}</p>
            <p>Built with Angular2</p>
            <p id="copyright">&copy;{{name}} {{years}}</p>
        </div>
    `
})

export class ContactFooter {
    name : string = "Brian Lee";
    email : string = "ucsdblee@gmail.com";
    years : string = "2016";
}
