import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lira-page',
  templateUrl: './lira-page.component.html',
  styleUrls: ['./lira-page.component.css']
})
export class LiraPageComponent {

  @Input() img: String = "";
  @Input() text: String = "";

  constructor() { }

  setPage(): void {

  }

}
