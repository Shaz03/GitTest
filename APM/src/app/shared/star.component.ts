import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'pm-star',
    styleUrls: ['./star.component.css'],
    templateUrl:'./star.component.html'
}

)

export class StarComponent implements OnChanges
{
    
    @Input() rating :number;
    starWidth : number;

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    onClick() : void
    {        
        this.ratingClicked.emit(`Rating ${this.rating} was Clicked`);
    }
    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }
}   