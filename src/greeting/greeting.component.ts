import {Component} from '@angular/core'

// creating new component
@Component({
    template:`<b>{{greet}}</b>`,
    selector:'greet-tag'
})
export class Greeting{
    greet:string="Hi universe"
}